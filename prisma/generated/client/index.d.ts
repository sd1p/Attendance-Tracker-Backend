
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model Attendence
 * 
 */
export type Attendence = $Result.DefaultSelection<Prisma.$AttendencePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  STUDENT: 'STUDENT',
  FACULTY: 'FACULTY'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs>;

  /**
   * `prisma.attendence`: Exposes CRUD operations for the **Attendence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendences
    * const attendences = await prisma.attendence.findMany()
    * ```
    */
  get attendence(): Prisma.AttendenceDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Class: 'Class',
    Attendence: 'Attendence'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'class' | 'attendence'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>,
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      Attendence: {
        payload: Prisma.$AttendencePayload<ExtArgs>
        fields: Prisma.AttendenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendenceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendenceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendencePayload>
          }
          findFirst: {
            args: Prisma.AttendenceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendenceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendencePayload>
          }
          findMany: {
            args: Prisma.AttendenceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendencePayload>[]
          }
          create: {
            args: Prisma.AttendenceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendencePayload>
          }
          createMany: {
            args: Prisma.AttendenceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AttendenceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendencePayload>
          }
          update: {
            args: Prisma.AttendenceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendencePayload>
          }
          deleteMany: {
            args: Prisma.AttendenceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AttendenceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AttendenceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendencePayload>
          }
          aggregate: {
            args: Prisma.AttendenceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAttendence>
          }
          groupBy: {
            args: Prisma.AttendenceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AttendenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendenceCountArgs<ExtArgs>,
            result: $Utils.Optional<AttendenceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Class: number
    Attendence: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Class?: boolean | UserCountOutputTypeCountClassArgs
    Attendence?: boolean | UserCountOutputTypeCountAttendenceArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendenceWhereInput
  }



  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    Attendence: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Attendence?: boolean | ClassCountOutputTypeCountAttendenceArgs
  }

  // Custom InputTypes

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountAttendenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendenceWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    rollno: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    rollno: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    rollno: number
    email: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    rollno?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    rollno?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    rollno?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    rollno: string | null
    email: string | null
    password: string
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rollno?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    Class?: boolean | User$ClassArgs<ExtArgs>
    Attendence?: boolean | User$AttendenceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    rollno?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Class?: boolean | User$ClassArgs<ExtArgs>
    Attendence?: boolean | User$AttendenceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Class: Prisma.$ClassPayload<ExtArgs>[]
      Attendence: Prisma.$AttendencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      rollno: string | null
      email: string | null
      password: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Class<T extends User$ClassArgs<ExtArgs> = {}>(args?: Subset<T, User$ClassArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'findMany'> | Null>;

    Attendence<T extends User$AttendenceArgs<ExtArgs> = {}>(args?: Subset<T, User$AttendenceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendencePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly rollno: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.Class
   */
  export type User$ClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }


  /**
   * User.Attendence
   */
  export type User$AttendenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendence
     */
    select?: AttendenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendenceInclude<ExtArgs> | null
    where?: AttendenceWhereInput
    orderBy?: AttendenceOrderByWithRelationInput | AttendenceOrderByWithRelationInput[]
    cursor?: AttendenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendenceScalarFieldEnum | AttendenceScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassAvgAggregateOutputType = {
    sem: number | null
  }

  export type ClassSumAggregateOutputType = {
    sem: number | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    sem: number | null
    subject: string | null
    userId: string | null
    start: Date | null
    duration: Date | null
    createdAt: Date | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    sem: number | null
    subject: string | null
    userId: string | null
    start: Date | null
    duration: Date | null
    createdAt: Date | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    sem: number
    subject: number
    userId: number
    start: number
    duration: number
    createdAt: number
    _all: number
  }


  export type ClassAvgAggregateInputType = {
    sem?: true
  }

  export type ClassSumAggregateInputType = {
    sem?: true
  }

  export type ClassMinAggregateInputType = {
    id?: true
    sem?: true
    subject?: true
    userId?: true
    start?: true
    duration?: true
    createdAt?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    sem?: true
    subject?: true
    userId?: true
    start?: true
    duration?: true
    createdAt?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    sem?: true
    subject?: true
    userId?: true
    start?: true
    duration?: true
    createdAt?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _avg?: ClassAvgAggregateInputType
    _sum?: ClassSumAggregateInputType
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: string
    sem: number
    subject: string
    userId: string
    start: Date
    duration: Date
    createdAt: Date
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sem?: boolean
    subject?: boolean
    userId?: boolean
    start?: boolean
    duration?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Attendence?: boolean | Class$AttendenceArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    sem?: boolean
    subject?: boolean
    userId?: boolean
    start?: boolean
    duration?: boolean
    createdAt?: boolean
  }

  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Attendence?: boolean | Class$AttendenceArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Attendence: Prisma.$AttendencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sem: number
      subject: string
      userId: string
      start: Date
      duration: Date
      createdAt: Date
    }, ExtArgs["result"]["class"]>
    composites: {}
  }


  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClassFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>
    ): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Class that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClassFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>
    ): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClassFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
    **/
    create<T extends ClassCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClassCreateArgs<ExtArgs>>
    ): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Classes.
     *     @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     *     @example
     *     // Create many Classes
     *     const class = await prisma.class.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClassCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
    **/
    delete<T extends ClassDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>
    ): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClassUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>
    ): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClassDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClassUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
    **/
    upsert<T extends ClassUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>
    ): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Attendence<T extends Class$AttendenceArgs<ExtArgs> = {}>(args?: Subset<T, Class$AttendenceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendencePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Class model
   */ 
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'String'>
    readonly sem: FieldRef<"Class", 'Int'>
    readonly subject: FieldRef<"Class", 'String'>
    readonly userId: FieldRef<"Class", 'String'>
    readonly start: FieldRef<"Class", 'DateTime'>
    readonly duration: FieldRef<"Class", 'DateTime'>
    readonly createdAt: FieldRef<"Class", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }


  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }


  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }


  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }


  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }


  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }


  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }


  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
  }


  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }


  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }


  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
  }


  /**
   * Class.Attendence
   */
  export type Class$AttendenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendence
     */
    select?: AttendenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendenceInclude<ExtArgs> | null
    where?: AttendenceWhereInput
    orderBy?: AttendenceOrderByWithRelationInput | AttendenceOrderByWithRelationInput[]
    cursor?: AttendenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendenceScalarFieldEnum | AttendenceScalarFieldEnum[]
  }


  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClassInclude<ExtArgs> | null
  }



  /**
   * Model Attendence
   */

  export type AggregateAttendence = {
    _count: AttendenceCountAggregateOutputType | null
    _min: AttendenceMinAggregateOutputType | null
    _max: AttendenceMaxAggregateOutputType | null
  }

  export type AttendenceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    classId: string | null
  }

  export type AttendenceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    classId: string | null
  }

  export type AttendenceCountAggregateOutputType = {
    id: number
    userId: number
    classId: number
    _all: number
  }


  export type AttendenceMinAggregateInputType = {
    id?: true
    userId?: true
    classId?: true
  }

  export type AttendenceMaxAggregateInputType = {
    id?: true
    userId?: true
    classId?: true
  }

  export type AttendenceCountAggregateInputType = {
    id?: true
    userId?: true
    classId?: true
    _all?: true
  }

  export type AttendenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendence to aggregate.
     */
    where?: AttendenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendences to fetch.
     */
    orderBy?: AttendenceOrderByWithRelationInput | AttendenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendences
    **/
    _count?: true | AttendenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendenceMaxAggregateInputType
  }

  export type GetAttendenceAggregateType<T extends AttendenceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendence[P]>
      : GetScalarType<T[P], AggregateAttendence[P]>
  }




  export type AttendenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendenceWhereInput
    orderBy?: AttendenceOrderByWithAggregationInput | AttendenceOrderByWithAggregationInput[]
    by: AttendenceScalarFieldEnum[] | AttendenceScalarFieldEnum
    having?: AttendenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendenceCountAggregateInputType | true
    _min?: AttendenceMinAggregateInputType
    _max?: AttendenceMaxAggregateInputType
  }

  export type AttendenceGroupByOutputType = {
    id: string
    userId: string
    classId: string
    _count: AttendenceCountAggregateOutputType | null
    _min: AttendenceMinAggregateOutputType | null
    _max: AttendenceMaxAggregateOutputType | null
  }

  type GetAttendenceGroupByPayload<T extends AttendenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendenceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendenceGroupByOutputType[P]>
        }
      >
    >


  export type AttendenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    classId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendence"]>

  export type AttendenceSelectScalar = {
    id?: boolean
    userId?: boolean
    classId?: boolean
  }

  export type AttendenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }


  export type $AttendencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendence"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      class: Prisma.$ClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      classId: string
    }, ExtArgs["result"]["attendence"]>
    composites: {}
  }


  type AttendenceGetPayload<S extends boolean | null | undefined | AttendenceDefaultArgs> = $Result.GetResult<Prisma.$AttendencePayload, S>

  type AttendenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttendenceFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AttendenceCountAggregateInputType | true
    }

  export interface AttendenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendence'], meta: { name: 'Attendence' } }
    /**
     * Find zero or one Attendence that matches the filter.
     * @param {AttendenceFindUniqueArgs} args - Arguments to find a Attendence
     * @example
     * // Get one Attendence
     * const attendence = await prisma.attendence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AttendenceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AttendenceFindUniqueArgs<ExtArgs>>
    ): Prisma__AttendenceClient<$Result.GetResult<Prisma.$AttendencePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Attendence that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AttendenceFindUniqueOrThrowArgs} args - Arguments to find a Attendence
     * @example
     * // Get one Attendence
     * const attendence = await prisma.attendence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AttendenceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendenceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AttendenceClient<$Result.GetResult<Prisma.$AttendencePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Attendence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendenceFindFirstArgs} args - Arguments to find a Attendence
     * @example
     * // Get one Attendence
     * const attendence = await prisma.attendence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AttendenceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendenceFindFirstArgs<ExtArgs>>
    ): Prisma__AttendenceClient<$Result.GetResult<Prisma.$AttendencePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Attendence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendenceFindFirstOrThrowArgs} args - Arguments to find a Attendence
     * @example
     * // Get one Attendence
     * const attendence = await prisma.attendence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AttendenceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendenceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AttendenceClient<$Result.GetResult<Prisma.$AttendencePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Attendences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendenceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendences
     * const attendences = await prisma.attendence.findMany()
     * 
     * // Get first 10 Attendences
     * const attendences = await prisma.attendence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendenceWithIdOnly = await prisma.attendence.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AttendenceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendenceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendencePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Attendence.
     * @param {AttendenceCreateArgs} args - Arguments to create a Attendence.
     * @example
     * // Create one Attendence
     * const Attendence = await prisma.attendence.create({
     *   data: {
     *     // ... data to create a Attendence
     *   }
     * })
     * 
    **/
    create<T extends AttendenceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AttendenceCreateArgs<ExtArgs>>
    ): Prisma__AttendenceClient<$Result.GetResult<Prisma.$AttendencePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Attendences.
     *     @param {AttendenceCreateManyArgs} args - Arguments to create many Attendences.
     *     @example
     *     // Create many Attendences
     *     const attendence = await prisma.attendence.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AttendenceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendenceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attendence.
     * @param {AttendenceDeleteArgs} args - Arguments to delete one Attendence.
     * @example
     * // Delete one Attendence
     * const Attendence = await prisma.attendence.delete({
     *   where: {
     *     // ... filter to delete one Attendence
     *   }
     * })
     * 
    **/
    delete<T extends AttendenceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AttendenceDeleteArgs<ExtArgs>>
    ): Prisma__AttendenceClient<$Result.GetResult<Prisma.$AttendencePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Attendence.
     * @param {AttendenceUpdateArgs} args - Arguments to update one Attendence.
     * @example
     * // Update one Attendence
     * const attendence = await prisma.attendence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AttendenceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AttendenceUpdateArgs<ExtArgs>>
    ): Prisma__AttendenceClient<$Result.GetResult<Prisma.$AttendencePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Attendences.
     * @param {AttendenceDeleteManyArgs} args - Arguments to filter Attendences to delete.
     * @example
     * // Delete a few Attendences
     * const { count } = await prisma.attendence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AttendenceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendenceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendences
     * const attendence = await prisma.attendence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AttendenceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AttendenceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendence.
     * @param {AttendenceUpsertArgs} args - Arguments to update or create a Attendence.
     * @example
     * // Update or create a Attendence
     * const attendence = await prisma.attendence.upsert({
     *   create: {
     *     // ... data to create a Attendence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendence we want to update
     *   }
     * })
    **/
    upsert<T extends AttendenceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AttendenceUpsertArgs<ExtArgs>>
    ): Prisma__AttendenceClient<$Result.GetResult<Prisma.$AttendencePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Attendences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendenceCountArgs} args - Arguments to filter Attendences to count.
     * @example
     * // Count the number of Attendences
     * const count = await prisma.attendence.count({
     *   where: {
     *     // ... the filter for the Attendences we want to count
     *   }
     * })
    **/
    count<T extends AttendenceCountArgs>(
      args?: Subset<T, AttendenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendenceAggregateArgs>(args: Subset<T, AttendenceAggregateArgs>): Prisma.PrismaPromise<GetAttendenceAggregateType<T>>

    /**
     * Group by Attendence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendenceGroupByArgs['orderBy'] }
        : { orderBy?: AttendenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendence model
   */
  readonly fields: AttendenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Attendence model
   */ 
  interface AttendenceFieldRefs {
    readonly id: FieldRef<"Attendence", 'String'>
    readonly userId: FieldRef<"Attendence", 'String'>
    readonly classId: FieldRef<"Attendence", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Attendence findUnique
   */
  export type AttendenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendence
     */
    select?: AttendenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendenceInclude<ExtArgs> | null
    /**
     * Filter, which Attendence to fetch.
     */
    where: AttendenceWhereUniqueInput
  }


  /**
   * Attendence findUniqueOrThrow
   */
  export type AttendenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendence
     */
    select?: AttendenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendenceInclude<ExtArgs> | null
    /**
     * Filter, which Attendence to fetch.
     */
    where: AttendenceWhereUniqueInput
  }


  /**
   * Attendence findFirst
   */
  export type AttendenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendence
     */
    select?: AttendenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendenceInclude<ExtArgs> | null
    /**
     * Filter, which Attendence to fetch.
     */
    where?: AttendenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendences to fetch.
     */
    orderBy?: AttendenceOrderByWithRelationInput | AttendenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendences.
     */
    cursor?: AttendenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendences.
     */
    distinct?: AttendenceScalarFieldEnum | AttendenceScalarFieldEnum[]
  }


  /**
   * Attendence findFirstOrThrow
   */
  export type AttendenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendence
     */
    select?: AttendenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendenceInclude<ExtArgs> | null
    /**
     * Filter, which Attendence to fetch.
     */
    where?: AttendenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendences to fetch.
     */
    orderBy?: AttendenceOrderByWithRelationInput | AttendenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendences.
     */
    cursor?: AttendenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendences.
     */
    distinct?: AttendenceScalarFieldEnum | AttendenceScalarFieldEnum[]
  }


  /**
   * Attendence findMany
   */
  export type AttendenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendence
     */
    select?: AttendenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendenceInclude<ExtArgs> | null
    /**
     * Filter, which Attendences to fetch.
     */
    where?: AttendenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendences to fetch.
     */
    orderBy?: AttendenceOrderByWithRelationInput | AttendenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendences.
     */
    cursor?: AttendenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendences.
     */
    skip?: number
    distinct?: AttendenceScalarFieldEnum | AttendenceScalarFieldEnum[]
  }


  /**
   * Attendence create
   */
  export type AttendenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendence
     */
    select?: AttendenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendence.
     */
    data: XOR<AttendenceCreateInput, AttendenceUncheckedCreateInput>
  }


  /**
   * Attendence createMany
   */
  export type AttendenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendences.
     */
    data: AttendenceCreateManyInput | AttendenceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Attendence update
   */
  export type AttendenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendence
     */
    select?: AttendenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendence.
     */
    data: XOR<AttendenceUpdateInput, AttendenceUncheckedUpdateInput>
    /**
     * Choose, which Attendence to update.
     */
    where: AttendenceWhereUniqueInput
  }


  /**
   * Attendence updateMany
   */
  export type AttendenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendences.
     */
    data: XOR<AttendenceUpdateManyMutationInput, AttendenceUncheckedUpdateManyInput>
    /**
     * Filter which Attendences to update
     */
    where?: AttendenceWhereInput
  }


  /**
   * Attendence upsert
   */
  export type AttendenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendence
     */
    select?: AttendenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendence to update in case it exists.
     */
    where: AttendenceWhereUniqueInput
    /**
     * In case the Attendence found by the `where` argument doesn't exist, create a new Attendence with this data.
     */
    create: XOR<AttendenceCreateInput, AttendenceUncheckedCreateInput>
    /**
     * In case the Attendence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendenceUpdateInput, AttendenceUncheckedUpdateInput>
  }


  /**
   * Attendence delete
   */
  export type AttendenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendence
     */
    select?: AttendenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendenceInclude<ExtArgs> | null
    /**
     * Filter which Attendence to delete.
     */
    where: AttendenceWhereUniqueInput
  }


  /**
   * Attendence deleteMany
   */
  export type AttendenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendences to delete
     */
    where?: AttendenceWhereInput
  }


  /**
   * Attendence without action
   */
  export type AttendenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendence
     */
    select?: AttendenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendenceInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    rollno: 'rollno',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    sem: 'sem',
    subject: 'subject',
    userId: 'userId',
    start: 'start',
    duration: 'duration',
    createdAt: 'createdAt'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const AttendenceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    classId: 'classId'
  };

  export type AttendenceScalarFieldEnum = (typeof AttendenceScalarFieldEnum)[keyof typeof AttendenceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    rollno?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    Class?: ClassListRelationFilter
    Attendence?: AttendenceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rollno?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    Class?: ClassOrderByRelationAggregateInput
    Attendence?: AttendenceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    rollno?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    Class?: ClassListRelationFilter
    Attendence?: AttendenceListRelationFilter
  }, "id" | "id" | "rollno" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    rollno?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    rollno?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: StringFilter<"Class"> | string
    sem?: IntFilter<"Class"> | number
    subject?: StringFilter<"Class"> | string
    userId?: StringFilter<"Class"> | string
    start?: DateTimeFilter<"Class"> | Date | string
    duration?: DateTimeFilter<"Class"> | Date | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    Attendence?: AttendenceListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    sem?: SortOrder
    subject?: SortOrder
    userId?: SortOrder
    start?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    Attendence?: AttendenceOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    sem?: IntFilter<"Class"> | number
    subject?: StringFilter<"Class"> | string
    userId?: StringFilter<"Class"> | string
    start?: DateTimeFilter<"Class"> | Date | string
    duration?: DateTimeFilter<"Class"> | Date | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    Attendence?: AttendenceListRelationFilter
  }, "id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    sem?: SortOrder
    subject?: SortOrder
    userId?: SortOrder
    start?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _avg?: ClassAvgOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
    _sum?: ClassSumOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Class"> | string
    sem?: IntWithAggregatesFilter<"Class"> | number
    subject?: StringWithAggregatesFilter<"Class"> | string
    userId?: StringWithAggregatesFilter<"Class"> | string
    start?: DateTimeWithAggregatesFilter<"Class"> | Date | string
    duration?: DateTimeWithAggregatesFilter<"Class"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Class"> | Date | string
  }

  export type AttendenceWhereInput = {
    AND?: AttendenceWhereInput | AttendenceWhereInput[]
    OR?: AttendenceWhereInput[]
    NOT?: AttendenceWhereInput | AttendenceWhereInput[]
    id?: StringFilter<"Attendence"> | string
    userId?: StringFilter<"Attendence"> | string
    classId?: StringFilter<"Attendence"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    class?: XOR<ClassRelationFilter, ClassWhereInput>
  }

  export type AttendenceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    classId?: SortOrder
    user?: UserOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
  }

  export type AttendenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendenceWhereInput | AttendenceWhereInput[]
    OR?: AttendenceWhereInput[]
    NOT?: AttendenceWhereInput | AttendenceWhereInput[]
    userId?: StringFilter<"Attendence"> | string
    classId?: StringFilter<"Attendence"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    class?: XOR<ClassRelationFilter, ClassWhereInput>
  }, "id">

  export type AttendenceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    classId?: SortOrder
    _count?: AttendenceCountOrderByAggregateInput
    _max?: AttendenceMaxOrderByAggregateInput
    _min?: AttendenceMinOrderByAggregateInput
  }

  export type AttendenceScalarWhereWithAggregatesInput = {
    AND?: AttendenceScalarWhereWithAggregatesInput | AttendenceScalarWhereWithAggregatesInput[]
    OR?: AttendenceScalarWhereWithAggregatesInput[]
    NOT?: AttendenceScalarWhereWithAggregatesInput | AttendenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendence"> | string
    userId?: StringWithAggregatesFilter<"Attendence"> | string
    classId?: StringWithAggregatesFilter<"Attendence"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    rollno?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    Class?: ClassCreateNestedManyWithoutUserInput
    Attendence?: AttendenceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    rollno?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    Class?: ClassUncheckedCreateNestedManyWithoutUserInput
    Attendence?: AttendenceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rollno?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Class?: ClassUpdateManyWithoutUserNestedInput
    Attendence?: AttendenceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rollno?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Class?: ClassUncheckedUpdateManyWithoutUserNestedInput
    Attendence?: AttendenceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    rollno?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rollno?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rollno?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassCreateInput = {
    id?: string
    sem: number
    subject: string
    start: Date | string
    duration: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutClassInput
    Attendence?: AttendenceCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    sem: number
    subject: string
    userId: string
    start: Date | string
    duration: Date | string
    createdAt?: Date | string
    Attendence?: AttendenceUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClassNestedInput
    Attendence?: AttendenceUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Attendence?: AttendenceUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: string
    sem: number
    subject: string
    userId: string
    start: Date | string
    duration: Date | string
    createdAt?: Date | string
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendenceCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutAttendenceInput
    class: ClassCreateNestedOneWithoutAttendenceInput
  }

  export type AttendenceUncheckedCreateInput = {
    id?: string
    userId: string
    classId: string
  }

  export type AttendenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAttendenceNestedInput
    class?: ClassUpdateOneRequiredWithoutAttendenceNestedInput
  }

  export type AttendenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendenceCreateManyInput = {
    id?: string
    userId: string
    classId: string
  }

  export type AttendenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AttendenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type AttendenceListRelationFilter = {
    every?: AttendenceWhereInput
    some?: AttendenceWhereInput
    none?: AttendenceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rollno?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rollno?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rollno?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    sem?: SortOrder
    subject?: SortOrder
    userId?: SortOrder
    start?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassAvgOrderByAggregateInput = {
    sem?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    sem?: SortOrder
    subject?: SortOrder
    userId?: SortOrder
    start?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    sem?: SortOrder
    subject?: SortOrder
    userId?: SortOrder
    start?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassSumOrderByAggregateInput = {
    sem?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ClassRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type AttendenceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    classId?: SortOrder
  }

  export type AttendenceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    classId?: SortOrder
  }

  export type AttendenceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    classId?: SortOrder
  }

  export type ClassCreateNestedManyWithoutUserInput = {
    create?: XOR<ClassCreateWithoutUserInput, ClassUncheckedCreateWithoutUserInput> | ClassCreateWithoutUserInput[] | ClassUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutUserInput | ClassCreateOrConnectWithoutUserInput[]
    createMany?: ClassCreateManyUserInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type AttendenceCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendenceCreateWithoutUserInput, AttendenceUncheckedCreateWithoutUserInput> | AttendenceCreateWithoutUserInput[] | AttendenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendenceCreateOrConnectWithoutUserInput | AttendenceCreateOrConnectWithoutUserInput[]
    createMany?: AttendenceCreateManyUserInputEnvelope
    connect?: AttendenceWhereUniqueInput | AttendenceWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClassCreateWithoutUserInput, ClassUncheckedCreateWithoutUserInput> | ClassCreateWithoutUserInput[] | ClassUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutUserInput | ClassCreateOrConnectWithoutUserInput[]
    createMany?: ClassCreateManyUserInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type AttendenceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendenceCreateWithoutUserInput, AttendenceUncheckedCreateWithoutUserInput> | AttendenceCreateWithoutUserInput[] | AttendenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendenceCreateOrConnectWithoutUserInput | AttendenceCreateOrConnectWithoutUserInput[]
    createMany?: AttendenceCreateManyUserInputEnvelope
    connect?: AttendenceWhereUniqueInput | AttendenceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClassUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClassCreateWithoutUserInput, ClassUncheckedCreateWithoutUserInput> | ClassCreateWithoutUserInput[] | ClassUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutUserInput | ClassCreateOrConnectWithoutUserInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutUserInput | ClassUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClassCreateManyUserInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutUserInput | ClassUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutUserInput | ClassUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type AttendenceUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendenceCreateWithoutUserInput, AttendenceUncheckedCreateWithoutUserInput> | AttendenceCreateWithoutUserInput[] | AttendenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendenceCreateOrConnectWithoutUserInput | AttendenceCreateOrConnectWithoutUserInput[]
    upsert?: AttendenceUpsertWithWhereUniqueWithoutUserInput | AttendenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendenceCreateManyUserInputEnvelope
    set?: AttendenceWhereUniqueInput | AttendenceWhereUniqueInput[]
    disconnect?: AttendenceWhereUniqueInput | AttendenceWhereUniqueInput[]
    delete?: AttendenceWhereUniqueInput | AttendenceWhereUniqueInput[]
    connect?: AttendenceWhereUniqueInput | AttendenceWhereUniqueInput[]
    update?: AttendenceUpdateWithWhereUniqueWithoutUserInput | AttendenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendenceUpdateManyWithWhereWithoutUserInput | AttendenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendenceScalarWhereInput | AttendenceScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClassCreateWithoutUserInput, ClassUncheckedCreateWithoutUserInput> | ClassCreateWithoutUserInput[] | ClassUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutUserInput | ClassCreateOrConnectWithoutUserInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutUserInput | ClassUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClassCreateManyUserInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutUserInput | ClassUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutUserInput | ClassUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type AttendenceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendenceCreateWithoutUserInput, AttendenceUncheckedCreateWithoutUserInput> | AttendenceCreateWithoutUserInput[] | AttendenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendenceCreateOrConnectWithoutUserInput | AttendenceCreateOrConnectWithoutUserInput[]
    upsert?: AttendenceUpsertWithWhereUniqueWithoutUserInput | AttendenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendenceCreateManyUserInputEnvelope
    set?: AttendenceWhereUniqueInput | AttendenceWhereUniqueInput[]
    disconnect?: AttendenceWhereUniqueInput | AttendenceWhereUniqueInput[]
    delete?: AttendenceWhereUniqueInput | AttendenceWhereUniqueInput[]
    connect?: AttendenceWhereUniqueInput | AttendenceWhereUniqueInput[]
    update?: AttendenceUpdateWithWhereUniqueWithoutUserInput | AttendenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendenceUpdateManyWithWhereWithoutUserInput | AttendenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendenceScalarWhereInput | AttendenceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClassInput = {
    create?: XOR<UserCreateWithoutClassInput, UserUncheckedCreateWithoutClassInput>
    connectOrCreate?: UserCreateOrConnectWithoutClassInput
    connect?: UserWhereUniqueInput
  }

  export type AttendenceCreateNestedManyWithoutClassInput = {
    create?: XOR<AttendenceCreateWithoutClassInput, AttendenceUncheckedCreateWithoutClassInput> | AttendenceCreateWithoutClassInput[] | AttendenceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendenceCreateOrConnectWithoutClassInput | AttendenceCreateOrConnectWithoutClassInput[]
    createMany?: AttendenceCreateManyClassInputEnvelope
    connect?: AttendenceWhereUniqueInput | AttendenceWhereUniqueInput[]
  }

  export type AttendenceUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<AttendenceCreateWithoutClassInput, AttendenceUncheckedCreateWithoutClassInput> | AttendenceCreateWithoutClassInput[] | AttendenceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendenceCreateOrConnectWithoutClassInput | AttendenceCreateOrConnectWithoutClassInput[]
    createMany?: AttendenceCreateManyClassInputEnvelope
    connect?: AttendenceWhereUniqueInput | AttendenceWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutClassNestedInput = {
    create?: XOR<UserCreateWithoutClassInput, UserUncheckedCreateWithoutClassInput>
    connectOrCreate?: UserCreateOrConnectWithoutClassInput
    upsert?: UserUpsertWithoutClassInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClassInput, UserUpdateWithoutClassInput>, UserUncheckedUpdateWithoutClassInput>
  }

  export type AttendenceUpdateManyWithoutClassNestedInput = {
    create?: XOR<AttendenceCreateWithoutClassInput, AttendenceUncheckedCreateWithoutClassInput> | AttendenceCreateWithoutClassInput[] | AttendenceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendenceCreateOrConnectWithoutClassInput | AttendenceCreateOrConnectWithoutClassInput[]
    upsert?: AttendenceUpsertWithWhereUniqueWithoutClassInput | AttendenceUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AttendenceCreateManyClassInputEnvelope
    set?: AttendenceWhereUniqueInput | AttendenceWhereUniqueInput[]
    disconnect?: AttendenceWhereUniqueInput | AttendenceWhereUniqueInput[]
    delete?: AttendenceWhereUniqueInput | AttendenceWhereUniqueInput[]
    connect?: AttendenceWhereUniqueInput | AttendenceWhereUniqueInput[]
    update?: AttendenceUpdateWithWhereUniqueWithoutClassInput | AttendenceUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AttendenceUpdateManyWithWhereWithoutClassInput | AttendenceUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AttendenceScalarWhereInput | AttendenceScalarWhereInput[]
  }

  export type AttendenceUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<AttendenceCreateWithoutClassInput, AttendenceUncheckedCreateWithoutClassInput> | AttendenceCreateWithoutClassInput[] | AttendenceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendenceCreateOrConnectWithoutClassInput | AttendenceCreateOrConnectWithoutClassInput[]
    upsert?: AttendenceUpsertWithWhereUniqueWithoutClassInput | AttendenceUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AttendenceCreateManyClassInputEnvelope
    set?: AttendenceWhereUniqueInput | AttendenceWhereUniqueInput[]
    disconnect?: AttendenceWhereUniqueInput | AttendenceWhereUniqueInput[]
    delete?: AttendenceWhereUniqueInput | AttendenceWhereUniqueInput[]
    connect?: AttendenceWhereUniqueInput | AttendenceWhereUniqueInput[]
    update?: AttendenceUpdateWithWhereUniqueWithoutClassInput | AttendenceUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AttendenceUpdateManyWithWhereWithoutClassInput | AttendenceUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AttendenceScalarWhereInput | AttendenceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAttendenceInput = {
    create?: XOR<UserCreateWithoutAttendenceInput, UserUncheckedCreateWithoutAttendenceInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendenceInput
    connect?: UserWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutAttendenceInput = {
    create?: XOR<ClassCreateWithoutAttendenceInput, ClassUncheckedCreateWithoutAttendenceInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAttendenceInput
    connect?: ClassWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAttendenceNestedInput = {
    create?: XOR<UserCreateWithoutAttendenceInput, UserUncheckedCreateWithoutAttendenceInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendenceInput
    upsert?: UserUpsertWithoutAttendenceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendenceInput, UserUpdateWithoutAttendenceInput>, UserUncheckedUpdateWithoutAttendenceInput>
  }

  export type ClassUpdateOneRequiredWithoutAttendenceNestedInput = {
    create?: XOR<ClassCreateWithoutAttendenceInput, ClassUncheckedCreateWithoutAttendenceInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAttendenceInput
    upsert?: ClassUpsertWithoutAttendenceInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutAttendenceInput, ClassUpdateWithoutAttendenceInput>, ClassUncheckedUpdateWithoutAttendenceInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ClassCreateWithoutUserInput = {
    id?: string
    sem: number
    subject: string
    start: Date | string
    duration: Date | string
    createdAt?: Date | string
    Attendence?: AttendenceCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutUserInput = {
    id?: string
    sem: number
    subject: string
    start: Date | string
    duration: Date | string
    createdAt?: Date | string
    Attendence?: AttendenceUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutUserInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutUserInput, ClassUncheckedCreateWithoutUserInput>
  }

  export type ClassCreateManyUserInputEnvelope = {
    data: ClassCreateManyUserInput | ClassCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AttendenceCreateWithoutUserInput = {
    id?: string
    class: ClassCreateNestedOneWithoutAttendenceInput
  }

  export type AttendenceUncheckedCreateWithoutUserInput = {
    id?: string
    classId: string
  }

  export type AttendenceCreateOrConnectWithoutUserInput = {
    where: AttendenceWhereUniqueInput
    create: XOR<AttendenceCreateWithoutUserInput, AttendenceUncheckedCreateWithoutUserInput>
  }

  export type AttendenceCreateManyUserInputEnvelope = {
    data: AttendenceCreateManyUserInput | AttendenceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithWhereUniqueWithoutUserInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutUserInput, ClassUncheckedUpdateWithoutUserInput>
    create: XOR<ClassCreateWithoutUserInput, ClassUncheckedCreateWithoutUserInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutUserInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutUserInput, ClassUncheckedUpdateWithoutUserInput>
  }

  export type ClassUpdateManyWithWhereWithoutUserInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutUserInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    id?: StringFilter<"Class"> | string
    sem?: IntFilter<"Class"> | number
    subject?: StringFilter<"Class"> | string
    userId?: StringFilter<"Class"> | string
    start?: DateTimeFilter<"Class"> | Date | string
    duration?: DateTimeFilter<"Class"> | Date | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
  }

  export type AttendenceUpsertWithWhereUniqueWithoutUserInput = {
    where: AttendenceWhereUniqueInput
    update: XOR<AttendenceUpdateWithoutUserInput, AttendenceUncheckedUpdateWithoutUserInput>
    create: XOR<AttendenceCreateWithoutUserInput, AttendenceUncheckedCreateWithoutUserInput>
  }

  export type AttendenceUpdateWithWhereUniqueWithoutUserInput = {
    where: AttendenceWhereUniqueInput
    data: XOR<AttendenceUpdateWithoutUserInput, AttendenceUncheckedUpdateWithoutUserInput>
  }

  export type AttendenceUpdateManyWithWhereWithoutUserInput = {
    where: AttendenceScalarWhereInput
    data: XOR<AttendenceUpdateManyMutationInput, AttendenceUncheckedUpdateManyWithoutUserInput>
  }

  export type AttendenceScalarWhereInput = {
    AND?: AttendenceScalarWhereInput | AttendenceScalarWhereInput[]
    OR?: AttendenceScalarWhereInput[]
    NOT?: AttendenceScalarWhereInput | AttendenceScalarWhereInput[]
    id?: StringFilter<"Attendence"> | string
    userId?: StringFilter<"Attendence"> | string
    classId?: StringFilter<"Attendence"> | string
  }

  export type UserCreateWithoutClassInput = {
    id?: string
    name: string
    rollno?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    Attendence?: AttendenceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClassInput = {
    id?: string
    name: string
    rollno?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    Attendence?: AttendenceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClassInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClassInput, UserUncheckedCreateWithoutClassInput>
  }

  export type AttendenceCreateWithoutClassInput = {
    id?: string
    user: UserCreateNestedOneWithoutAttendenceInput
  }

  export type AttendenceUncheckedCreateWithoutClassInput = {
    id?: string
    userId: string
  }

  export type AttendenceCreateOrConnectWithoutClassInput = {
    where: AttendenceWhereUniqueInput
    create: XOR<AttendenceCreateWithoutClassInput, AttendenceUncheckedCreateWithoutClassInput>
  }

  export type AttendenceCreateManyClassInputEnvelope = {
    data: AttendenceCreateManyClassInput | AttendenceCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClassInput = {
    update: XOR<UserUpdateWithoutClassInput, UserUncheckedUpdateWithoutClassInput>
    create: XOR<UserCreateWithoutClassInput, UserUncheckedCreateWithoutClassInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClassInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClassInput, UserUncheckedUpdateWithoutClassInput>
  }

  export type UserUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rollno?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Attendence?: AttendenceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rollno?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Attendence?: AttendenceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AttendenceUpsertWithWhereUniqueWithoutClassInput = {
    where: AttendenceWhereUniqueInput
    update: XOR<AttendenceUpdateWithoutClassInput, AttendenceUncheckedUpdateWithoutClassInput>
    create: XOR<AttendenceCreateWithoutClassInput, AttendenceUncheckedCreateWithoutClassInput>
  }

  export type AttendenceUpdateWithWhereUniqueWithoutClassInput = {
    where: AttendenceWhereUniqueInput
    data: XOR<AttendenceUpdateWithoutClassInput, AttendenceUncheckedUpdateWithoutClassInput>
  }

  export type AttendenceUpdateManyWithWhereWithoutClassInput = {
    where: AttendenceScalarWhereInput
    data: XOR<AttendenceUpdateManyMutationInput, AttendenceUncheckedUpdateManyWithoutClassInput>
  }

  export type UserCreateWithoutAttendenceInput = {
    id?: string
    name: string
    rollno?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    Class?: ClassCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAttendenceInput = {
    id?: string
    name: string
    rollno?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    Class?: ClassUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAttendenceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendenceInput, UserUncheckedCreateWithoutAttendenceInput>
  }

  export type ClassCreateWithoutAttendenceInput = {
    id?: string
    sem: number
    subject: string
    start: Date | string
    duration: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutAttendenceInput = {
    id?: string
    sem: number
    subject: string
    userId: string
    start: Date | string
    duration: Date | string
    createdAt?: Date | string
  }

  export type ClassCreateOrConnectWithoutAttendenceInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutAttendenceInput, ClassUncheckedCreateWithoutAttendenceInput>
  }

  export type UserUpsertWithoutAttendenceInput = {
    update: XOR<UserUpdateWithoutAttendenceInput, UserUncheckedUpdateWithoutAttendenceInput>
    create: XOR<UserCreateWithoutAttendenceInput, UserUncheckedCreateWithoutAttendenceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendenceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendenceInput, UserUncheckedUpdateWithoutAttendenceInput>
  }

  export type UserUpdateWithoutAttendenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rollno?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Class?: ClassUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rollno?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Class?: ClassUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClassUpsertWithoutAttendenceInput = {
    update: XOR<ClassUpdateWithoutAttendenceInput, ClassUncheckedUpdateWithoutAttendenceInput>
    create: XOR<ClassCreateWithoutAttendenceInput, ClassUncheckedCreateWithoutAttendenceInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutAttendenceInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutAttendenceInput, ClassUncheckedUpdateWithoutAttendenceInput>
  }

  export type ClassUpdateWithoutAttendenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutAttendenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassCreateManyUserInput = {
    id?: string
    sem: number
    subject: string
    start: Date | string
    duration: Date | string
    createdAt?: Date | string
  }

  export type AttendenceCreateManyUserInput = {
    id?: string
    classId: string
  }

  export type ClassUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Attendence?: AttendenceUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Attendence?: AttendenceUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    class?: ClassUpdateOneRequiredWithoutAttendenceNestedInput
  }

  export type AttendenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendenceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendenceCreateManyClassInput = {
    id?: string
    userId: string
  }

  export type AttendenceUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAttendenceNestedInput
  }

  export type AttendenceUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendenceUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClassCountOutputTypeDefaultArgs instead
     */
    export type ClassCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClassCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClassDefaultArgs instead
     */
    export type ClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClassDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttendenceDefaultArgs instead
     */
    export type AttendenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttendenceDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}