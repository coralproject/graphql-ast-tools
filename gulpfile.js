"use strict";

const gulp = require("gulp");
const ts = require("gulp-typescript");
const tslint = require("gulp-tslint");
const jsonlint = require("gulp-jsonlint");
const merge = require("merge2");
const sourcemaps = require("gulp-sourcemaps");
const replace = require("gulp-replace");

const files = {
  tsWithoutTest: ["./src/**/*.ts", "!./src/**/*.spec.ts"],
  tsWithTest: ["./src/**/*.ts"],
  json: ["./*.json", "./.nycrc"],
  js: ["./*.js"],
};

function onBuildError() {
  this.once("finish", () => process.exit(1));
}

function build(dest, module) {
  return () => {
    const tsProject = ts.createProject("tsconfig.json", {
      noEmitOnError: true,
      declaration: true,
      target: "es5",
      module,
    });

    let src = gulp.src(files.tsWithoutTest);
    if (dest === "lib") {
      // Use es6 module versions for dependencies.
      src = src.pipe(replace("reassemble/cjs/", "reassemble/lib/"));
    }
    const tsResult = src
      .pipe(sourcemaps.init())
      .pipe(tsProject())
      .once("error", onBuildError);
    return merge([
      tsResult.dts.pipe(gulp.dest(dest)),
      tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(dest)),
    ]);
  };
}

gulp.task("lib", build("lib", "es6"));
gulp.task("commonjs", build("cjs", "commonjs"));

gulp.task("tslint", () => {
  return gulp.src(files.tsWithTest)
    .pipe(tslint({
      formatter: "verbose",
    }))
  .pipe(tslint.report());
});

gulp.task("jsonlint", () => {
  return gulp.src(files.json, { dot: true })
    .pipe(jsonlint())
    .pipe(jsonlint.reporter());
});

gulp.task("lint", ["jsonlint", "tslint"]);
gulp.task("default", ["lib", "commonjs"]);
