/* tslint:disable:object-literal-key-quotes trailing-comma max-line-length */
export default {
  "__schema": {
    "queryType": {
      "name": "RootQuery"
    },
    "mutationType": {
      "name": "RootMutation"
    },
    "subscriptionType": {
      "name": "Subscription"
    },
    "types": [{
      "kind": "OBJECT",
      "name": "RootQuery",
      "description": "",
      "fields": [{
        "name": "settings",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "Settings",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "comment",
        "description": "",
        "args": [{
          "name": "id",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "Comment",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "assets",
        "description": "",
        "args": [{
          "name": "query",
          "description": "",
          "type": {
            "kind": "INPUT_OBJECT",
            "name": "AssetsQuery",
            "ofType": null
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "AssetConnection",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "asset",
        "description": "",
        "args": [{
          "name": "id",
          "description": "",
          "type": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          },
          "defaultValue": null
        }, {
          "name": "url",
          "description": "",
          "type": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "Asset",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "comments",
        "description": "",
        "args": [{
          "name": "query",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INPUT_OBJECT",
              "name": "CommentsQuery",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "CommentConnection",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "commentCount",
        "description": "",
        "args": [{
          "name": "query",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INPUT_OBJECT",
              "name": "CommentCountQuery",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "userCount",
        "description": "",
        "args": [{
          "name": "query",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INPUT_OBJECT",
              "name": "UserCountQuery",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "me",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "User",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "users",
        "description": "",
        "args": [{
          "name": "query",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INPUT_OBJECT",
              "name": "UsersQuery",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "UserConnection",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "user",
        "description": "",
        "args": [{
          "name": "id",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "User",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "Settings",
      "description": "",
      "fields": [{
        "name": "moderation",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "ENUM",
            "name": "MODERATION_MODE",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "requireEmailConfirmation",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "infoBoxEnable",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "infoBoxContent",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "questionBoxEnable",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "questionBoxContent",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "premodLinksEnable",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "questionBoxIcon",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "autoCloseStream",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "customCssUrl",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "closedTimeout",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "closedMessage",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "editCommentWindowLength",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "charCountEnable",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "charCount",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "organizationName",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "wordlist",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "Wordlist",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "domains",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "Domains",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "ENUM",
      "name": "MODERATION_MODE",
      "description": "",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [{
        "name": "PRE",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "POST",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "possibleTypes": null
    }, {
      "kind": "SCALAR",
      "name": "Boolean",
      "description": "The `Boolean` scalar type represents `true` or `false`.",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "SCALAR",
      "name": "String",
      "description": "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "SCALAR",
      "name": "Int",
      "description": "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. ",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "Wordlist",
      "description": "",
      "fields": [{
        "name": "banned",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "LIST",
            "name": null,
            "ofType": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "suspect",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "LIST",
            "name": null,
            "ofType": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "Domains",
      "description": "",
      "fields": [{
        "name": "whitelist",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "LIST",
            "name": null,
            "ofType": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "SCALAR",
      "name": "ID",
      "description": "The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `\"4\"`) or integer (such as `4`) input value will be accepted as an ID.",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "Comment",
      "description": "",
      "fields": [{
        "name": "parent",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "Comment",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "id",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "body",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "tags",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "OBJECT",
              "name": "TagLink",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "user",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "User",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "replies",
        "description": "",
        "args": [{
          "name": "query",
          "description": "",
          "type": {
            "kind": "INPUT_OBJECT",
            "name": "RepliesQuery",
            "ofType": null
          },
          "defaultValue": "{sortOrder: ASC, sortBy: CREATED_AT, limit: 3}"
        }],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "OBJECT",
            "name": "CommentConnection",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "replyCount",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "actions",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "INTERFACE",
            "name": "Action",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "action_summaries",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "LIST",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "ActionSummary",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "asset",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "Asset",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "status",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "ENUM",
            "name": "COMMENT_STATUS",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "status_history",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "OBJECT",
              "name": "CommentStatusHistory",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "created_at",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Date",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "editing",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "EditInfo",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "hasParent",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "toxicity",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Float",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "TagLink",
      "description": "",
      "fields": [{
        "name": "tag",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "OBJECT",
            "name": "Tag",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "assigned_by",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "User",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "created_at",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Date",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "Tag",
      "description": "",
      "fields": [{
        "name": "name",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "created_at",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Date",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "SCALAR",
      "name": "Date",
      "description": "Date represented as an ISO8601 string",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "User",
      "description": "",
      "fields": [{
        "name": "id",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "username",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "created_at",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Date",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "action_summaries",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "LIST",
            "name": null,
            "ofType": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INTERFACE",
                "name": "ActionSummary",
                "ofType": null
              }
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "actions",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "Action",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "roles",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "ENUM",
              "name": "USER_ROLES",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "profiles",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "OBJECT",
            "name": "UserProfile",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "tags",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "OBJECT",
              "name": "TagLink",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "canEditName",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "ignoredUsers",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "tokens",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "OBJECT",
              "name": "Token",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "comments",
        "description": "",
        "args": [{
          "name": "query",
          "description": "",
          "type": {
            "kind": "INPUT_OBJECT",
            "name": "CommentsQuery",
            "ofType": null
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "OBJECT",
            "name": "CommentConnection",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "reliable",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "Reliability",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "status",
        "description": "",
        "args": [],
        "type": {
          "kind": "ENUM",
          "name": "USER_STATUS",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "suspension",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "SuspensionInfo",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INTERFACE",
      "name": "ActionSummary",
      "description": "",
      "fields": [{
        "name": "count",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "current_user",
        "description": "",
        "args": [],
        "type": {
          "kind": "INTERFACE",
          "name": "Action",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": [{
        "kind": "OBJECT",
        "name": "DefaultActionSummary",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "FlagActionSummary",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "DontAgreeActionSummary",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "RespectActionSummary",
        "ofType": null
      }]
    }, {
      "kind": "INTERFACE",
      "name": "Action",
      "description": "",
      "fields": [{
        "name": "id",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "user",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "User",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "updated_at",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Date",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "created_at",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Date",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": [{
        "kind": "OBJECT",
        "name": "FlagAction",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "DontAgreeAction",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "RespectAction",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "DefaultAction",
        "ofType": null
      }]
    }, {
      "kind": "ENUM",
      "name": "USER_ROLES",
      "description": "",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [{
        "name": "ADMIN",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "MODERATOR",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "UserProfile",
      "description": "",
      "fields": [{
        "name": "id",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "provider",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "Token",
      "description": "",
      "fields": [{
        "name": "id",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "name",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "active",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Boolean",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "jwt",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "CommentsQuery",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "author_id",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "ID",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "statuses",
        "description": "",
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "ENUM",
              "name": "COMMENT_STATUS",
              "ofType": null
            }
          }
        },
        "defaultValue": "[NONE, ACCEPTED]"
      }, {
        "name": "asset_id",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "ID",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "parent_id",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "ID",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "action_type",
        "description": "",
        "type": {
          "kind": "ENUM",
          "name": "ACTION_TYPE",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "limit",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "defaultValue": "10"
      }, {
        "name": "cursor",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Cursor",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "sortOrder",
        "description": "",
        "type": {
          "kind": "ENUM",
          "name": "SORT_ORDER",
          "ofType": null
        },
        "defaultValue": "DESC"
      }, {
        "name": "sortBy",
        "description": "",
        "type": {
          "kind": "ENUM",
          "name": "SORT_COMMENTS_BY",
          "ofType": null
        },
        "defaultValue": "CREATED_AT"
      }, {
        "name": "tags",
        "description": "",
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        },
        "defaultValue": null
      }, {
        "name": "excludeIgnored",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "ENUM",
      "name": "COMMENT_STATUS",
      "description": "",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [{
        "name": "NONE",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "ACCEPTED",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "REJECTED",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "PREMOD",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "SYSTEM_WITHHELD",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "possibleTypes": null
    }, {
      "kind": "ENUM",
      "name": "ACTION_TYPE",
      "description": "",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [{
        "name": "FLAG",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "DONTAGREE",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "RESPECT",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "possibleTypes": null
    }, {
      "kind": "SCALAR",
      "name": "Cursor",
      "description": "Cursor represents a paginating cursor.",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "ENUM",
      "name": "SORT_ORDER",
      "description": "",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [{
        "name": "DESC",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "ASC",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "possibleTypes": null
    }, {
      "kind": "ENUM",
      "name": "SORT_COMMENTS_BY",
      "description": "",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [{
        "name": "CREATED_AT",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "REPLIES",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "RESPECTS",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "CommentConnection",
      "description": "",
      "fields": [{
        "name": "hasNextPage",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Boolean",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "startCursor",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Cursor",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "endCursor",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Cursor",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "nodes",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "LIST",
            "name": null,
            "ofType": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Comment",
                "ofType": null
              }
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "Reliability",
      "description": "",
      "fields": [{
        "name": "flagger",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "commenter",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "ENUM",
      "name": "USER_STATUS",
      "description": "",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [{
        "name": "ACTIVE",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "BANNED",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "PENDING",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "APPROVED",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "SuspensionInfo",
      "description": "",
      "fields": [{
        "name": "until",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Date",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "RepliesQuery",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "sortOrder",
        "description": "",
        "type": {
          "kind": "ENUM",
          "name": "SORT_ORDER",
          "ofType": null
        },
        "defaultValue": "ASC"
      }, {
        "name": "sortBy",
        "description": "",
        "type": {
          "kind": "ENUM",
          "name": "SORT_COMMENTS_BY",
          "ofType": null
        },
        "defaultValue": "CREATED_AT"
      }, {
        "name": "limit",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "defaultValue": "3"
      }, {
        "name": "excludeIgnored",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "Asset",
      "description": "",
      "fields": [{
        "name": "id",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "title",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "url",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "comments",
        "description": "",
        "args": [{
          "name": "query",
          "description": "",
          "type": {
            "kind": "INPUT_OBJECT",
            "name": "CommentsQuery",
            "ofType": null
          },
          "defaultValue": "{statuses: [NONE, ACCEPTED], limit: 10, sortOrder: DESC, sortBy: CREATED_AT}"
        }, {
          "name": "deep",
          "description": "",
          "type": {
            "kind": "SCALAR",
            "name": "Boolean",
            "ofType": null
          },
          "defaultValue": "false"
        }],
        "type": {
          "kind": "OBJECT",
          "name": "CommentConnection",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "comment",
        "description": "",
        "args": [{
          "name": "id",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "Comment",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "commentCount",
        "description": "",
        "args": [{
          "name": "tags",
          "description": "",
          "type": {
            "kind": "LIST",
            "name": null,
            "ofType": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "totalCommentCount",
        "description": "",
        "args": [{
          "name": "tags",
          "description": "",
          "type": {
            "kind": "LIST",
            "name": null,
            "ofType": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "settings",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "OBJECT",
            "name": "Settings",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "closedAt",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Date",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "isClosed",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Boolean",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "action_summaries",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "AssetActionSummary",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "created_at",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Date",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "tags",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "OBJECT",
              "name": "TagLink",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "author",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INTERFACE",
      "name": "AssetActionSummary",
      "description": "",
      "fields": [{
        "name": "actionCount",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "actionableItemCount",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": [{
        "kind": "OBJECT",
        "name": "DefaultAssetActionSummary",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "FlagAssetActionSummary",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "RespectAssetActionSummary",
        "ofType": null
      }]
    }, {
      "kind": "OBJECT",
      "name": "CommentStatusHistory",
      "description": "",
      "fields": [{
        "name": "type",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "ENUM",
            "name": "COMMENT_STATUS",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "created_at",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Date",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "assigned_by",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "User",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "EditInfo",
      "description": "",
      "fields": [{
        "name": "edited",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Boolean",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "editableUntil",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Date",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "SCALAR",
      "name": "Float",
      "description": "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). ",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "AssetsQuery",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "value",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "defaultValue": "\"\""
      }, {
        "name": "limit",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "defaultValue": "10"
      }, {
        "name": "open",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "sortOrder",
        "description": "",
        "type": {
          "kind": "ENUM",
          "name": "SORT_ORDER",
          "ofType": null
        },
        "defaultValue": "DESC"
      }, {
        "name": "cursor",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Cursor",
          "ofType": null
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "AssetConnection",
      "description": "",
      "fields": [{
        "name": "hasNextPage",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Boolean",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "startCursor",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Cursor",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "endCursor",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Cursor",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "nodes",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "LIST",
            "name": null,
            "ofType": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Asset",
                "ofType": null
              }
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "CommentCountQuery",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "statuses",
        "description": "",
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "ENUM",
              "name": "COMMENT_STATUS",
              "ofType": null
            }
          }
        },
        "defaultValue": "[NONE, ACCEPTED]"
      }, {
        "name": "asset_id",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "ID",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "asset_url",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "parent_id",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "ID",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "action_type",
        "description": "",
        "type": {
          "kind": "ENUM",
          "name": "ACTION_TYPE",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "author_id",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "ID",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "tags",
        "description": "",
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "UserCountQuery",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "action_type",
        "description": "",
        "type": {
          "kind": "ENUM",
          "name": "ACTION_TYPE",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "statuses",
        "description": "",
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "ENUM",
            "name": "USER_STATUS",
            "ofType": null
          }
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "UsersQuery",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "action_type",
        "description": "",
        "type": {
          "kind": "ENUM",
          "name": "ACTION_TYPE",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "statuses",
        "description": "",
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "ENUM",
              "name": "USER_STATUS",
              "ofType": null
            }
          }
        },
        "defaultValue": null
      }, {
        "name": "limit",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "defaultValue": "10"
      }, {
        "name": "cursor",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Cursor",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "sortOrder",
        "description": "",
        "type": {
          "kind": "ENUM",
          "name": "SORT_ORDER",
          "ofType": null
        },
        "defaultValue": "DESC"
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "UserConnection",
      "description": "",
      "fields": [{
        "name": "hasNextPage",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Boolean",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "startCursor",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Cursor",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "endCursor",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Cursor",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "nodes",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "LIST",
            "name": null,
            "ofType": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "RootMutation",
      "description": "",
      "fields": [{
        "name": "createComment",
        "description": "",
        "args": [{
          "name": "input",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INPUT_OBJECT",
              "name": "CreateCommentInput",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "OBJECT",
            "name": "CreateCommentResponse",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "createFlag",
        "description": "",
        "args": [{
          "name": "flag",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INPUT_OBJECT",
              "name": "CreateFlagInput",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "OBJECT",
            "name": "CreateFlagResponse",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "createDontAgree",
        "description": "",
        "args": [{
          "name": "dontagree",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INPUT_OBJECT",
              "name": "CreateDontAgreeInput",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "OBJECT",
            "name": "CreateDontAgreeResponse",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "deleteAction",
        "description": "",
        "args": [{
          "name": "id",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "DeleteActionResponse",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "editComment",
        "description": "",
        "args": [{
          "name": "id",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          "defaultValue": null
        }, {
          "name": "asset_id",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          "defaultValue": null
        }, {
          "name": "edit",
          "description": "",
          "type": {
            "kind": "INPUT_OBJECT",
            "name": "EditCommentInput",
            "ofType": null
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "OBJECT",
            "name": "EditCommentResponse",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "setUserStatus",
        "description": "",
        "args": [{
          "name": "id",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          "defaultValue": null
        }, {
          "name": "status",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "ENUM",
              "name": "USER_STATUS",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "SetUserStatusResponse",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "suspendUser",
        "description": "",
        "args": [{
          "name": "input",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INPUT_OBJECT",
              "name": "SuspendUserInput",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "SuspendUserResponse",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "rejectUsername",
        "description": "",
        "args": [{
          "name": "input",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INPUT_OBJECT",
              "name": "RejectUsernameInput",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "RejectUsernameResponse",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "setCommentStatus",
        "description": "",
        "args": [{
          "name": "id",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          "defaultValue": null
        }, {
          "name": "status",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "ENUM",
              "name": "COMMENT_STATUS",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "SetCommentStatusResponse",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "addTag",
        "description": "",
        "args": [{
          "name": "tag",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INPUT_OBJECT",
              "name": "ModifyTagInput",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "ModifyTagResponse",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "removeTag",
        "description": "",
        "args": [{
          "name": "tag",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INPUT_OBJECT",
              "name": "ModifyTagInput",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "ModifyTagResponse",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "updateAssetSettings",
        "description": "",
        "args": [{
          "name": "id",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          "defaultValue": null
        }, {
          "name": "input",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INPUT_OBJECT",
              "name": "AssetSettingsInput",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "UpdateAssetSettingsResponse",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "updateAssetStatus",
        "description": "",
        "args": [{
          "name": "id",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          "defaultValue": null
        }, {
          "name": "input",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INPUT_OBJECT",
              "name": "UpdateAssetStatusInput",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "UpdateAssetStatusResponse",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "updateSettings",
        "description": "",
        "args": [{
          "name": "input",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INPUT_OBJECT",
              "name": "UpdateSettingsInput",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "UpdateSettingsResponse",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "ignoreUser",
        "description": "",
        "args": [{
          "name": "id",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "IgnoreUserResponse",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "createToken",
        "description": "",
        "args": [{
          "name": "input",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INPUT_OBJECT",
              "name": "CreateTokenInput",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "OBJECT",
            "name": "CreateTokenResponse",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "revokeToken",
        "description": "",
        "args": [{
          "name": "input",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INPUT_OBJECT",
              "name": "RevokeTokenInput",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "RevokeTokenResponse",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "stopIgnoringUser",
        "description": "",
        "args": [{
          "name": "id",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "StopIgnoringUserResponse",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "createRespectAction",
        "description": "",
        "args": [{
          "name": "input",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INPUT_OBJECT",
              "name": "CreateRespectActionInput",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "OBJECT",
            "name": "CreateRespectActionResponse",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "deleteRespectAction",
        "description": "",
        "args": [{
          "name": "input",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INPUT_OBJECT",
              "name": "DeleteRespectActionInput",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "DeleteRespectActionResponse",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "CreateCommentInput",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "asset_id",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "defaultValue": null
      }, {
        "name": "parent_id",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "ID",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "body",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "defaultValue": null
      }, {
        "name": "tags",
        "description": "",
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "defaultValue": null
      }, {
        "name": "checkToxicity",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "CreateCommentResponse",
      "description": "",
      "fields": [{
        "name": "comment",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "Comment",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "actions",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "INTERFACE",
            "name": "Action",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "errors",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "UserError",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Response",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INTERFACE",
      "name": "Response",
      "description": "",
      "fields": [{
        "name": "errors",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "UserError",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": [{
        "kind": "OBJECT",
        "name": "CreateCommentResponse",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "CreateFlagResponse",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "CreateDontAgreeResponse",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "DeleteActionResponse",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "EditCommentResponse",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "SetUserStatusResponse",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "SuspendUserResponse",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "RejectUsernameResponse",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "SetCommentStatusResponse",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "ModifyTagResponse",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "UpdateAssetSettingsResponse",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "UpdateAssetStatusResponse",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "UpdateSettingsResponse",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "IgnoreUserResponse",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "CreateTokenResponse",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "RevokeTokenResponse",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "StopIgnoringUserResponse",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "CreateRespectActionResponse",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "DeleteRespectActionResponse",
        "ofType": null
      }]
    }, {
      "kind": "INTERFACE",
      "name": "UserError",
      "description": "",
      "fields": [{
        "name": "translation_key",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": [{
        "kind": "OBJECT",
        "name": "GenericUserError",
        "ofType": null
      }, {
        "kind": "OBJECT",
        "name": "ValidationUserError",
        "ofType": null
      }]
    }, {
      "kind": "INPUT_OBJECT",
      "name": "CreateFlagInput",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "item_id",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "defaultValue": null
      }, {
        "name": "item_type",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "ENUM",
            "name": "ACTION_ITEM_TYPE",
            "ofType": null
          }
        },
        "defaultValue": null
      }, {
        "name": "reason",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "defaultValue": null
      }, {
        "name": "message",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "ENUM",
      "name": "ACTION_ITEM_TYPE",
      "description": "",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [{
        "name": "ASSETS",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "COMMENTS",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "USERS",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "CreateFlagResponse",
      "description": "",
      "fields": [{
        "name": "flag",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "FlagAction",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "errors",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "UserError",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Response",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "FlagAction",
      "description": "",
      "fields": [{
        "name": "id",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "reason",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "message",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "user",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "User",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "updated_at",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Date",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "created_at",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Date",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Action",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "CreateDontAgreeInput",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "item_id",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "defaultValue": null
      }, {
        "name": "item_type",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "ENUM",
            "name": "ACTION_ITEM_TYPE",
            "ofType": null
          }
        },
        "defaultValue": null
      }, {
        "name": "reason",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "message",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "CreateDontAgreeResponse",
      "description": "",
      "fields": [{
        "name": "dontagree",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "DontAgreeAction",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "errors",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "UserError",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Response",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "DontAgreeAction",
      "description": "",
      "fields": [{
        "name": "id",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "reason",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "message",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "user",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "User",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "updated_at",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Date",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "created_at",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Date",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Action",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "DeleteActionResponse",
      "description": "",
      "fields": [{
        "name": "errors",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "UserError",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Response",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "EditCommentInput",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "body",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "EditCommentResponse",
      "description": "",
      "fields": [{
        "name": "comment",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "Comment",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "errors",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "UserError",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Response",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "SetUserStatusResponse",
      "description": "",
      "fields": [{
        "name": "errors",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "UserError",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Response",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "SuspendUserInput",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "id",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "defaultValue": null
      }, {
        "name": "message",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "defaultValue": null
      }, {
        "name": "until",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Date",
            "ofType": null
          }
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "SuspendUserResponse",
      "description": "",
      "fields": [{
        "name": "errors",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "UserError",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Response",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "RejectUsernameInput",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "id",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "defaultValue": null
      }, {
        "name": "message",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "RejectUsernameResponse",
      "description": "",
      "fields": [{
        "name": "errors",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "UserError",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Response",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "SetCommentStatusResponse",
      "description": "",
      "fields": [{
        "name": "errors",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "UserError",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Response",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "ModifyTagInput",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "name",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "defaultValue": null
      }, {
        "name": "id",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "defaultValue": null
      }, {
        "name": "item_type",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "ENUM",
            "name": "TAGGABLE_ITEM_TYPE",
            "ofType": null
          }
        },
        "defaultValue": null
      }, {
        "name": "asset_id",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "ID",
          "ofType": null
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "ENUM",
      "name": "TAGGABLE_ITEM_TYPE",
      "description": "",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [{
        "name": "ASSETS",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "COMMENTS",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "USERS",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "ModifyTagResponse",
      "description": "",
      "fields": [{
        "name": "errors",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "UserError",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Response",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "AssetSettingsInput",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "premodLinksEnable",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "moderation",
        "description": "",
        "type": {
          "kind": "ENUM",
          "name": "MODERATION_MODE",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "questionBoxEnable",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "questionBoxContent",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "questionBoxIcon",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "UpdateAssetSettingsResponse",
      "description": "",
      "fields": [{
        "name": "errors",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "UserError",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Response",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "UpdateAssetStatusInput",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "closedAt",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Date",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "closedMessage",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "UpdateAssetStatusResponse",
      "description": "",
      "fields": [{
        "name": "errors",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "UserError",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Response",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "UpdateSettingsInput",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "moderation",
        "description": "",
        "type": {
          "kind": "ENUM",
          "name": "MODERATION_MODE",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "requireEmailConfirmation",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "infoBoxEnable",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "infoBoxContent",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "questionBoxEnable",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "questionBoxContent",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "premodLinksEnable",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "questionBoxIcon",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "autoCloseStream",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "customCssUrl",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "closedTimeout",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "closedMessage",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "charCountEnable",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Boolean",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "charCount",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "organizationName",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "editCommentWindowLength",
        "description": "",
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "wordlist",
        "description": "",
        "type": {
          "kind": "INPUT_OBJECT",
          "name": "UpdateWordlistInput",
          "ofType": null
        },
        "defaultValue": null
      }, {
        "name": "domains",
        "description": "",
        "type": {
          "kind": "INPUT_OBJECT",
          "name": "UpdateDomainsInput",
          "ofType": null
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "UpdateWordlistInput",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "banned",
        "description": "",
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        },
        "defaultValue": null
      }, {
        "name": "suspect",
        "description": "",
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "UpdateDomainsInput",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "whitelist",
        "description": "",
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "UpdateSettingsResponse",
      "description": "",
      "fields": [{
        "name": "errors",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "UserError",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Response",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "IgnoreUserResponse",
      "description": "",
      "fields": [{
        "name": "errors",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "UserError",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Response",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "CreateTokenInput",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "name",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "CreateTokenResponse",
      "description": "",
      "fields": [{
        "name": "token",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "Token",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "errors",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "UserError",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Response",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "RevokeTokenInput",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "id",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "RevokeTokenResponse",
      "description": "",
      "fields": [{
        "name": "errors",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "UserError",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Response",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "StopIgnoringUserResponse",
      "description": "",
      "fields": [{
        "name": "errors",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "UserError",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Response",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "CreateRespectActionInput",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "item_id",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "CreateRespectActionResponse",
      "description": "",
      "fields": [{
        "name": "respect",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "RespectAction",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "errors",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "UserError",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Response",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "RespectAction",
      "description": "",
      "fields": [{
        "name": "id",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "user",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "User",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "updated_at",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Date",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "created_at",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Date",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "item_id",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Action",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "DeleteRespectActionInput",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "id",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "DeleteRespectActionResponse",
      "description": "",
      "fields": [{
        "name": "errors",
        "description": "",
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "INTERFACE",
              "name": "UserError",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Response",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "Subscription",
      "description": "",
      "fields": [{
        "name": "commentAdded",
        "description": "",
        "args": [{
          "name": "asset_id",
          "description": "",
          "type": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          },
          "defaultValue": null
        }, {
          "name": "statuses",
          "description": "",
          "type": {
            "kind": "LIST",
            "name": null,
            "ofType": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "COMMENT_STATUS",
                "ofType": null
              }
            }
          },
          "defaultValue": "[NONE, ACCEPTED]"
        }],
        "type": {
          "kind": "OBJECT",
          "name": "Comment",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "commentEdited",
        "description": "",
        "args": [{
          "name": "asset_id",
          "description": "",
          "type": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "Comment",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "commentFlagged",
        "description": "",
        "args": [{
          "name": "asset_id",
          "description": "",
          "type": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "Comment",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "commentAccepted",
        "description": "",
        "args": [{
          "name": "asset_id",
          "description": "",
          "type": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "Comment",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "commentRejected",
        "description": "",
        "args": [{
          "name": "asset_id",
          "description": "",
          "type": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "Comment",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "commentReset",
        "description": "",
        "args": [{
          "name": "asset_id",
          "description": "",
          "type": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "Comment",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "userSuspended",
        "description": "",
        "args": [{
          "name": "user_id",
          "description": "",
          "type": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "User",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "userBanned",
        "description": "",
        "args": [{
          "name": "user_id",
          "description": "",
          "type": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "User",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "usernameRejected",
        "description": "",
        "args": [{
          "name": "user_id",
          "description": "",
          "type": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "User",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "commentFeatured",
        "description": "",
        "args": [{
          "name": "asset_id",
          "description": "",
          "type": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "CommentFeaturedData",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "commentUnfeatured",
        "description": "",
        "args": [{
          "name": "asset_id",
          "description": "",
          "type": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "CommentUnfeaturedData",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "respectActionCreated",
        "description": "",
        "args": [{
          "name": "asset_id",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "RespectAction",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "respectActionDeleted",
        "description": "",
        "args": [{
          "name": "asset_id",
          "description": "",
          "type": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          "defaultValue": null
        }],
        "type": {
          "kind": "OBJECT",
          "name": "RespectAction",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "CommentFeaturedData",
      "description": "",
      "fields": [{
        "name": "comment",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "OBJECT",
            "name": "Comment",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "user",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "OBJECT",
            "name": "User",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "CommentUnfeaturedData",
      "description": "",
      "fields": [{
        "name": "comment",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "OBJECT",
            "name": "Comment",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "user",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "OBJECT",
            "name": "User",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "__Schema",
      "description": "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
      "fields": [{
        "name": "types",
        "description": "A list of all types supported by this server.",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "LIST",
            "name": null,
            "ofType": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              }
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "queryType",
        "description": "The type that query operations will be rooted at.",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "OBJECT",
            "name": "__Type",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "mutationType",
        "description": "If this server supports mutation, the type that mutation operations will be rooted at.",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "__Type",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "subscriptionType",
        "description": "If this server support subscription, the type that subscription operations will be rooted at.",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "__Type",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "directives",
        "description": "A list of all directives supported by this server.",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "LIST",
            "name": null,
            "ofType": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__Directive",
                "ofType": null
              }
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "__Type",
      "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
      "fields": [{
        "name": "kind",
        "description": null,
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "ENUM",
            "name": "__TypeKind",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "name",
        "description": null,
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "description",
        "description": null,
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "fields",
        "description": null,
        "args": [{
          "name": "includeDeprecated",
          "description": null,
          "type": {
            "kind": "SCALAR",
            "name": "Boolean",
            "ofType": null
          },
          "defaultValue": "false"
        }],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "OBJECT",
              "name": "__Field",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "interfaces",
        "description": null,
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "OBJECT",
              "name": "__Type",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "possibleTypes",
        "description": null,
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "OBJECT",
              "name": "__Type",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "enumValues",
        "description": null,
        "args": [{
          "name": "includeDeprecated",
          "description": null,
          "type": {
            "kind": "SCALAR",
            "name": "Boolean",
            "ofType": null
          },
          "defaultValue": "false"
        }],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "OBJECT",
              "name": "__EnumValue",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "inputFields",
        "description": null,
        "args": [],
        "type": {
          "kind": "LIST",
          "name": null,
          "ofType": {
            "kind": "NON_NULL",
            "name": null,
            "ofType": {
              "kind": "OBJECT",
              "name": "__InputValue",
              "ofType": null
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "ofType",
        "description": null,
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "__Type",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "ENUM",
      "name": "__TypeKind",
      "description": "An enum describing what kind of type a given `__Type` is.",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [{
        "name": "SCALAR",
        "description": "Indicates this type is a scalar.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "OBJECT",
        "description": "Indicates this type is an object. `fields` and `interfaces` are valid fields.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "INTERFACE",
        "description": "Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "UNION",
        "description": "Indicates this type is a union. `possibleTypes` is a valid field.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "ENUM",
        "description": "Indicates this type is an enum. `enumValues` is a valid field.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "INPUT_OBJECT",
        "description": "Indicates this type is an input object. `inputFields` is a valid field.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "LIST",
        "description": "Indicates this type is a list. `ofType` is a valid field.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "NON_NULL",
        "description": "Indicates this type is a non-null. `ofType` is a valid field.",
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "__Field",
      "description": "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
      "fields": [{
        "name": "name",
        "description": null,
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "description",
        "description": null,
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "args",
        "description": null,
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "LIST",
            "name": null,
            "ofType": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__InputValue",
                "ofType": null
              }
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "type",
        "description": null,
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "OBJECT",
            "name": "__Type",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "isDeprecated",
        "description": null,
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Boolean",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "deprecationReason",
        "description": null,
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "__InputValue",
      "description": "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
      "fields": [{
        "name": "name",
        "description": null,
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "description",
        "description": null,
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "type",
        "description": null,
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "OBJECT",
            "name": "__Type",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "defaultValue",
        "description": "A GraphQL-formatted string representing the default value for this input value.",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "__EnumValue",
      "description": "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
      "fields": [{
        "name": "name",
        "description": null,
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "description",
        "description": null,
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "isDeprecated",
        "description": null,
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Boolean",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "deprecationReason",
        "description": null,
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "__Directive",
      "description": "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
      "fields": [{
        "name": "name",
        "description": null,
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "description",
        "description": null,
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "locations",
        "description": null,
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "LIST",
            "name": null,
            "ofType": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "__DirectiveLocation",
                "ofType": null
              }
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "args",
        "description": null,
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "LIST",
            "name": null,
            "ofType": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__InputValue",
                "ofType": null
              }
            }
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "onOperation",
        "description": null,
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Boolean",
            "ofType": null
          }
        },
        "isDeprecated": true,
        "deprecationReason": "Use `locations`."
      }, {
        "name": "onFragment",
        "description": null,
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Boolean",
            "ofType": null
          }
        },
        "isDeprecated": true,
        "deprecationReason": "Use `locations`."
      }, {
        "name": "onField",
        "description": null,
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Boolean",
            "ofType": null
          }
        },
        "isDeprecated": true,
        "deprecationReason": "Use `locations`."
      }],
      "inputFields": null,
      "interfaces": [],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "ENUM",
      "name": "__DirectiveLocation",
      "description": "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [{
        "name": "QUERY",
        "description": "Location adjacent to a query operation.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "MUTATION",
        "description": "Location adjacent to a mutation operation.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "SUBSCRIPTION",
        "description": "Location adjacent to a subscription operation.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "FIELD",
        "description": "Location adjacent to a field.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "FRAGMENT_DEFINITION",
        "description": "Location adjacent to a fragment definition.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "FRAGMENT_SPREAD",
        "description": "Location adjacent to a fragment spread.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "INLINE_FRAGMENT",
        "description": "Location adjacent to an inline fragment.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "SCHEMA",
        "description": "Location adjacent to a schema definition.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "SCALAR",
        "description": "Location adjacent to a scalar definition.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "OBJECT",
        "description": "Location adjacent to an object type definition.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "FIELD_DEFINITION",
        "description": "Location adjacent to a field definition.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "ARGUMENT_DEFINITION",
        "description": "Location adjacent to an argument definition.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "INTERFACE",
        "description": "Location adjacent to an interface definition.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "UNION",
        "description": "Location adjacent to a union definition.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "ENUM",
        "description": "Location adjacent to an enum definition.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "ENUM_VALUE",
        "description": "Location adjacent to an enum value definition.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "INPUT_OBJECT",
        "description": "Location adjacent to an input object type definition.",
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "INPUT_FIELD_DEFINITION",
        "description": "Location adjacent to an input object field definition.",
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "DefaultAction",
      "description": "",
      "fields": [{
        "name": "id",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "user",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "User",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "updated_at",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Date",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "created_at",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Date",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "Action",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "DefaultActionSummary",
      "description": "",
      "fields": [{
        "name": "count",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "current_user",
        "description": "",
        "args": [],
        "type": {
          "kind": "INTERFACE",
          "name": "Action",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "ActionSummary",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "DefaultAssetActionSummary",
      "description": "",
      "fields": [{
        "name": "actionCount",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "actionableItemCount",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "AssetActionSummary",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "FlagAssetActionSummary",
      "description": "",
      "fields": [{
        "name": "actionCount",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "actionableItemCount",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "AssetActionSummary",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "FlagActionSummary",
      "description": "",
      "fields": [{
        "name": "count",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Int",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "reason",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "current_user",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "FlagAction",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "ActionSummary",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "DontAgreeActionSummary",
      "description": "",
      "fields": [{
        "name": "count",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Int",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "reason",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "current_user",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "DontAgreeAction",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "ActionSummary",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "GenericUserError",
      "description": "",
      "fields": [{
        "name": "translation_key",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "UserError",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "ValidationUserError",
      "description": "",
      "fields": [{
        "name": "translation_key",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "field_name",
        "description": "",
        "args": [],
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "String",
            "ofType": null
          }
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "UserError",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "INPUT_OBJECT",
      "name": "CreateLikeInput",
      "description": "",
      "fields": null,
      "inputFields": [{
        "name": "item_id",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "ID",
            "ofType": null
          }
        },
        "defaultValue": null
      }, {
        "name": "item_type",
        "description": "",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "ENUM",
            "name": "ACTION_ITEM_TYPE",
            "ofType": null
          }
        },
        "defaultValue": null
      }],
      "interfaces": null,
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "ENUM",
      "name": "ASSET_METRICS_SORT",
      "description": "",
      "fields": null,
      "inputFields": null,
      "interfaces": null,
      "enumValues": [{
        "name": "RESPECT",
        "description": "",
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "RespectActionSummary",
      "description": "",
      "fields": [{
        "name": "count",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "current_user",
        "description": "",
        "args": [],
        "type": {
          "kind": "OBJECT",
          "name": "RespectAction",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "ActionSummary",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }, {
      "kind": "OBJECT",
      "name": "RespectAssetActionSummary",
      "description": "",
      "fields": [{
        "name": "actionCount",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }, {
        "name": "actionableItemCount",
        "description": "",
        "args": [],
        "type": {
          "kind": "SCALAR",
          "name": "Int",
          "ofType": null
        },
        "isDeprecated": false,
        "deprecationReason": null
      }],
      "inputFields": null,
      "interfaces": [{
        "kind": "INTERFACE",
        "name": "AssetActionSummary",
        "ofType": null
      }],
      "enumValues": null,
      "possibleTypes": null
    }],
    "directives": [{
      "name": "skip",
      "description": "Directs the executor to skip this field or fragment when the `if` argument is true.",
      "locations": [
        "FIELD",
        "FRAGMENT_SPREAD",
        "INLINE_FRAGMENT"
      ],
      "args": [{
        "name": "if",
        "description": "Skipped when true.",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Boolean",
            "ofType": null
          }
        },
        "defaultValue": null
      }]
    }, {
      "name": "include",
      "description": "Directs the executor to include this field or fragment only when the `if` argument is true.",
      "locations": [
        "FIELD",
        "FRAGMENT_SPREAD",
        "INLINE_FRAGMENT"
      ],
      "args": [{
        "name": "if",
        "description": "Included when true.",
        "type": {
          "kind": "NON_NULL",
          "name": null,
          "ofType": {
            "kind": "SCALAR",
            "name": "Boolean",
            "ofType": null
          }
        },
        "defaultValue": null
      }]
    }, {
      "name": "deprecated",
      "description": "Marks an element of a GraphQL schema as no longer supported.",
      "locations": [
        "FIELD_DEFINITION",
        "ENUM_VALUE"
      ],
      "args": [{
        "name": "reason",
        "description": "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted in [Markdown](https://daringfireball.net/projects/markdown/).",
        "type": {
          "kind": "SCALAR",
          "name": "String",
          "ofType": null
        },
        "defaultValue": "\"No longer supported\""
      }]
    }]
  }
};
