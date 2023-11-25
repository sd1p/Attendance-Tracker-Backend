
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  rollno: 'rollno',
  email: 'email',
  password: 'password',
  role: 'role',
  createdAt: 'createdAt'
};

exports.Prisma.ClassScalarFieldEnum = {
  id: 'id',
  sem: 'sem',
  subject: 'subject',
  userId: 'userId',
  start: 'start',
  duration: 'duration',
  createdAt: 'createdAt'
};

exports.Prisma.AttendenceScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  classId: 'classId',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  STUDENT: 'STUDENT',
  FACULTY: 'FACULTY'
};

exports.Prisma.ModelName = {
  User: 'User',
  Class: 'Class',
  Attendence: 'Attendence'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\VS_Code\\DBMS_Attendence_tracker_mini_project\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.6.0",
  "engineVersion": "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "cockroachdb",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgICBwcm92aWRlciA9ICJwcmlzbWEtY2xpZW50LWpzIgogICAgb3V0cHV0ICAgPSAiLi9nZW5lcmF0ZWQvY2xpZW50Igp9CgpkYXRhc291cmNlIGRiIHsKICAgIHByb3ZpZGVyID0gImNvY2tyb2FjaGRiIgogICAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIFVzZXIgewogICAgaWQgICAgICAgICBTdHJpbmcgICAgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQodXVpZCgpKQogICAgbmFtZSAgICAgICBTdHJpbmcKICAgIHJvbGxubyAgICAgU3RyaW5nPyAgICAgIEB1bmlxdWUKICAgIGVtYWlsICAgICAgU3RyaW5nPyAgICAgIEB1bmlxdWUKICAgIHBhc3N3b3JkICAgU3RyaW5nCiAgICByb2xlICAgICAgIFJvbGUgICAgICAgICBAZGVmYXVsdChTVFVERU5UKQogICAgY3JlYXRlZEF0ICBEYXRlVGltZSAgICAgQGRlZmF1bHQobm93KCkpCiAgICBDbGFzcyAgICAgIENsYXNzW10KICAgIEF0dGVuZGVuY2UgQXR0ZW5kZW5jZVtdCn0KCm1vZGVsIENsYXNzIHsKICAgIGlkICAgICAgICAgU3RyaW5nICAgICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KHV1aWQoKSkKICAgIHNlbSAgICAgICAgSW50CiAgICBzdWJqZWN0ICAgIFN0cmluZwogICAgdXNlcklkICAgICBTdHJpbmcgLy9mb3IgZmFjdWx0eQogICAgc3RhcnQgICAgICBEYXRlVGltZQogICAgZHVyYXRpb24gICBEYXRlVGltZQogICAgY3JlYXRlZEF0ICBEYXRlVGltZSAgICAgQGRlZmF1bHQobm93KCkpCiAgICB1c2VyICAgICAgIFVzZXIgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgICBBdHRlbmRlbmNlIEF0dGVuZGVuY2VbXQp9Cgptb2RlbCBBdHRlbmRlbmNlIHsKICAgIGlkICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogICAgdXNlcklkICAgIFN0cmluZyAgIEB1bmlxdWUKICAgIGNsYXNzSWQgICBTdHJpbmcKICAgIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKICAgIHVzZXIgICAgICBVc2VyICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgICBjbGFzcyAgICAgQ2xhc3MgICAgQHJlbGF0aW9uKGZpZWxkczogW2NsYXNzSWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKfQoKZW51bSBSb2xlIHsKICAgIFNUVURFTlQKICAgIEZBQ1VMVFkKfQoKLy8gZ2VuZXJhdG9yIGVyZCB7Ci8vICAgcHJvdmlkZXIgPSAicHJpc21hLWVyZC1nZW5lcmF0b3IiCi8vICAgdGhlbWUgPSAiZm9yZXN0IgovLyAgIGluY2x1ZGVSZWxhdGlvbkZyb21GaWVsZHMgPSB0cnVlCi8vICAgZGlzYWJsZUVtb2ppID0gdHJ1ZQovLyB9CgovLyBnZW5lcmF0b3IgZGJtbCB7Ci8vICAgcHJvdmlkZXIgPSAicHJpc21hLWRibWwtZ2VuZXJhdG9yIgovLyAgIG91dHB1dCA9ICIuL0VSRGRibWwiCi8vIH0K",
  "inlineSchemaHash": "b6dc5f6ea0f32a3ffcf0fa74094bd75cb2dbb65f501fc6b9aca8a982462aca35",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rollno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Role\",\"default\":\"STUDENT\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Class\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Class\",\"relationName\":\"ClassToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Attendence\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Attendence\",\"relationName\":\"AttendenceToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Class\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subject\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ClassToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Attendence\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Attendence\",\"relationName\":\"AttendenceToClass\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Attendence\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"classId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"AttendenceToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"class\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Class\",\"relationName\":\"AttendenceToClass\",\"relationFromFields\":[\"classId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Role\":{\"values\":[{\"name\":\"STUDENT\",\"dbName\":null},{\"name\":\"FACULTY\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

