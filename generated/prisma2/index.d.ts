
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Rol
 * 
 */
export type Rol = $Result.DefaultSelection<Prisma.$RolPayload>
/**
 * Model RolAsignado
 * 
 */
export type RolAsignado = $Result.DefaultSelection<Prisma.$RolAsignadoPayload>
/**
 * Model Provincia
 * 
 */
export type Provincia = $Result.DefaultSelection<Prisma.$ProvinciaPayload>
/**
 * Model Legion
 * 
 */
export type Legion = $Result.DefaultSelection<Prisma.$LegionPayload>
/**
 * Model Gobernador
 * 
 */
export type Gobernador = $Result.DefaultSelection<Prisma.$GobernadorPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rol`: Exposes CRUD operations for the **Rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.RolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolAsignado`: Exposes CRUD operations for the **RolAsignado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolAsignados
    * const rolAsignados = await prisma.rolAsignado.findMany()
    * ```
    */
  get rolAsignado(): Prisma.RolAsignadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.provincia`: Exposes CRUD operations for the **Provincia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provincias
    * const provincias = await prisma.provincia.findMany()
    * ```
    */
  get provincia(): Prisma.ProvinciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.legion`: Exposes CRUD operations for the **Legion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Legions
    * const legions = await prisma.legion.findMany()
    * ```
    */
  get legion(): Prisma.LegionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gobernador`: Exposes CRUD operations for the **Gobernador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gobernadors
    * const gobernadors = await prisma.gobernador.findMany()
    * ```
    */
  get gobernador(): Prisma.GobernadorDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Usuario: 'Usuario',
    Rol: 'Rol',
    RolAsignado: 'RolAsignado',
    Provincia: 'Provincia',
    Legion: 'Legion',
    Gobernador: 'Gobernador'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "rol" | "rolAsignado" | "provincia" | "legion" | "gobernador"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Rol: {
        payload: Prisma.$RolPayload<ExtArgs>
        fields: Prisma.RolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findFirst: {
            args: Prisma.RolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findMany: {
            args: Prisma.RolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          create: {
            args: Prisma.RolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          createMany: {
            args: Prisma.RolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          delete: {
            args: Prisma.RolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          update: {
            args: Prisma.RolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          deleteMany: {
            args: Prisma.RolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          upsert: {
            args: Prisma.RolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.RolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      RolAsignado: {
        payload: Prisma.$RolAsignadoPayload<ExtArgs>
        fields: Prisma.RolAsignadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolAsignadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolAsignadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolAsignadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolAsignadoPayload>
          }
          findFirst: {
            args: Prisma.RolAsignadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolAsignadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolAsignadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolAsignadoPayload>
          }
          findMany: {
            args: Prisma.RolAsignadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolAsignadoPayload>[]
          }
          create: {
            args: Prisma.RolAsignadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolAsignadoPayload>
          }
          createMany: {
            args: Prisma.RolAsignadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolAsignadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolAsignadoPayload>[]
          }
          delete: {
            args: Prisma.RolAsignadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolAsignadoPayload>
          }
          update: {
            args: Prisma.RolAsignadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolAsignadoPayload>
          }
          deleteMany: {
            args: Prisma.RolAsignadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolAsignadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolAsignadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolAsignadoPayload>[]
          }
          upsert: {
            args: Prisma.RolAsignadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolAsignadoPayload>
          }
          aggregate: {
            args: Prisma.RolAsignadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolAsignado>
          }
          groupBy: {
            args: Prisma.RolAsignadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolAsignadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolAsignadoCountArgs<ExtArgs>
            result: $Utils.Optional<RolAsignadoCountAggregateOutputType> | number
          }
        }
      }
      Provincia: {
        payload: Prisma.$ProvinciaPayload<ExtArgs>
        fields: Prisma.ProvinciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProvinciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProvinciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>
          }
          findFirst: {
            args: Prisma.ProvinciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProvinciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>
          }
          findMany: {
            args: Prisma.ProvinciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>[]
          }
          create: {
            args: Prisma.ProvinciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>
          }
          createMany: {
            args: Prisma.ProvinciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProvinciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>[]
          }
          delete: {
            args: Prisma.ProvinciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>
          }
          update: {
            args: Prisma.ProvinciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>
          }
          deleteMany: {
            args: Prisma.ProvinciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProvinciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProvinciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>[]
          }
          upsert: {
            args: Prisma.ProvinciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>
          }
          aggregate: {
            args: Prisma.ProvinciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvincia>
          }
          groupBy: {
            args: Prisma.ProvinciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvinciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProvinciaCountArgs<ExtArgs>
            result: $Utils.Optional<ProvinciaCountAggregateOutputType> | number
          }
        }
      }
      Legion: {
        payload: Prisma.$LegionPayload<ExtArgs>
        fields: Prisma.LegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegionPayload>
          }
          findFirst: {
            args: Prisma.LegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegionPayload>
          }
          findMany: {
            args: Prisma.LegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegionPayload>[]
          }
          create: {
            args: Prisma.LegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegionPayload>
          }
          createMany: {
            args: Prisma.LegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LegionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegionPayload>[]
          }
          delete: {
            args: Prisma.LegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegionPayload>
          }
          update: {
            args: Prisma.LegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegionPayload>
          }
          deleteMany: {
            args: Prisma.LegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LegionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegionPayload>[]
          }
          upsert: {
            args: Prisma.LegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegionPayload>
          }
          aggregate: {
            args: Prisma.LegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLegion>
          }
          groupBy: {
            args: Prisma.LegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<LegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.LegionCountArgs<ExtArgs>
            result: $Utils.Optional<LegionCountAggregateOutputType> | number
          }
        }
      }
      Gobernador: {
        payload: Prisma.$GobernadorPayload<ExtArgs>
        fields: Prisma.GobernadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GobernadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GobernadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GobernadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GobernadorPayload>
          }
          findFirst: {
            args: Prisma.GobernadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GobernadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GobernadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GobernadorPayload>
          }
          findMany: {
            args: Prisma.GobernadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GobernadorPayload>[]
          }
          create: {
            args: Prisma.GobernadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GobernadorPayload>
          }
          createMany: {
            args: Prisma.GobernadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GobernadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GobernadorPayload>[]
          }
          delete: {
            args: Prisma.GobernadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GobernadorPayload>
          }
          update: {
            args: Prisma.GobernadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GobernadorPayload>
          }
          deleteMany: {
            args: Prisma.GobernadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GobernadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GobernadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GobernadorPayload>[]
          }
          upsert: {
            args: Prisma.GobernadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GobernadorPayload>
          }
          aggregate: {
            args: Prisma.GobernadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGobernador>
          }
          groupBy: {
            args: Prisma.GobernadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<GobernadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.GobernadorCountArgs<ExtArgs>
            result: $Utils.Optional<GobernadorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    rol?: RolOmit
    rolAsignado?: RolAsignadoOmit
    provincia?: ProvinciaOmit
    legion?: LegionOmit
    gobernador?: GobernadorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    rolesAsignados: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolesAsignados?: boolean | UsuarioCountOutputTypeCountRolesAsignadosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRolesAsignadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolAsignadoWhereInput
  }


  /**
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    rolesAsignados: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolesAsignados?: boolean | RolCountOutputTypeCountRolesAsignadosArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountRolesAsignadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolAsignadoWhereInput
  }


  /**
   * Count Type ProvinciaCountOutputType
   */

  export type ProvinciaCountOutputType = {
    legiones: number
  }

  export type ProvinciaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legiones?: boolean | ProvinciaCountOutputTypeCountLegionesArgs
  }

  // Custom InputTypes
  /**
   * ProvinciaCountOutputType without action
   */
  export type ProvinciaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvinciaCountOutputType
     */
    select?: ProvinciaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvinciaCountOutputType without action
   */
  export type ProvinciaCountOutputTypeCountLegionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    contrasena: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    contrasena: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    contrasena: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    contrasena?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    contrasena?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    contrasena?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    contrasena: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    contrasena?: boolean
    rolesAsignados?: boolean | Usuario$rolesAsignadosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    contrasena?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    contrasena?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    contrasena?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "contrasena", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolesAsignados?: boolean | Usuario$rolesAsignadosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      rolesAsignados: Prisma.$RolAsignadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      contrasena: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rolesAsignados<T extends Usuario$rolesAsignadosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$rolesAsignadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolAsignadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly contrasena: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.rolesAsignados
   */
  export type Usuario$rolesAsignadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolAsignado
     */
    select?: RolAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolAsignado
     */
    omit?: RolAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolAsignadoInclude<ExtArgs> | null
    where?: RolAsignadoWhereInput
    orderBy?: RolAsignadoOrderByWithRelationInput | RolAsignadoOrderByWithRelationInput[]
    cursor?: RolAsignadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolAsignadoScalarFieldEnum | RolAsignadoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolAvgAggregateOutputType = {
    id: number | null
  }

  export type RolSumAggregateOutputType = {
    id: number | null
  }

  export type RolMinAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type RolMaxAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type RolCountAggregateOutputType = {
    id: number
    descripcion: number
    _all: number
  }


  export type RolAvgAggregateInputType = {
    id?: true
  }

  export type RolSumAggregateInputType = {
    id?: true
  }

  export type RolMinAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type RolMaxAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type RolCountAggregateInputType = {
    id?: true
    descripcion?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rol to aggregate.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type RolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolWhereInput
    orderBy?: RolOrderByWithAggregationInput | RolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: RolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _avg?: RolAvgAggregateInputType
    _sum?: RolSumAggregateInputType
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id: number
    descripcion: string
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends RolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type RolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descripcion?: boolean
    rolesAsignados?: boolean | Rol$rolesAsignadosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>

  export type RolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectScalar = {
    id?: boolean
    descripcion?: boolean
  }

  export type RolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descripcion", ExtArgs["result"]["rol"]>
  export type RolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolesAsignados?: boolean | Rol$rolesAsignadosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rol"
    objects: {
      rolesAsignados: Prisma.$RolAsignadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descripcion: string
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type RolGetPayload<S extends boolean | null | undefined | RolDefaultArgs> = $Result.GetResult<Prisma.$RolPayload, S>

  type RolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface RolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rol'], meta: { name: 'Rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {RolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolFindUniqueArgs>(args: SelectSubset<T, RolFindUniqueArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolFindUniqueOrThrowArgs>(args: SelectSubset<T, RolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolFindFirstArgs>(args?: SelectSubset<T, RolFindFirstArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolFindFirstOrThrowArgs>(args?: SelectSubset<T, RolFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolWithIdOnly = await prisma.rol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolFindManyArgs>(args?: SelectSubset<T, RolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {RolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends RolCreateArgs>(args: SelectSubset<T, RolCreateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {RolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolCreateManyArgs>(args?: SelectSubset<T, RolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rols and returns the data saved in the database.
     * @param {RolCreateManyAndReturnArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolCreateManyAndReturnArgs>(args?: SelectSubset<T, RolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rol.
     * @param {RolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends RolDeleteArgs>(args: SelectSubset<T, RolDeleteArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {RolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolUpdateArgs>(args: SelectSubset<T, RolUpdateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {RolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolDeleteManyArgs>(args?: SelectSubset<T, RolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolUpdateManyArgs>(args: SelectSubset<T, RolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols and returns the data updated in the database.
     * @param {RolUpdateManyAndReturnArgs} args - Arguments to update many Rols.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolUpdateManyAndReturnArgs>(args: SelectSubset<T, RolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rol.
     * @param {RolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends RolUpsertArgs>(args: SelectSubset<T, RolUpsertArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends RolCountArgs>(
      args?: Subset<T, RolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolGroupByArgs} args - Group by arguments.
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
      T extends RolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolGroupByArgs['orderBy'] }
        : { orderBy?: RolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rol model
   */
  readonly fields: RolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rolesAsignados<T extends Rol$rolesAsignadosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$rolesAsignadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolAsignadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rol model
   */
  interface RolFieldRefs {
    readonly id: FieldRef<"Rol", 'Int'>
    readonly descripcion: FieldRef<"Rol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rol findUnique
   */
  export type RolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findUniqueOrThrow
   */
  export type RolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findFirst
   */
  export type RolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findFirstOrThrow
   */
  export type RolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findMany
   */
  export type RolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rols to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol create
   */
  export type RolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to create a Rol.
     */
    data: XOR<RolCreateInput, RolUncheckedCreateInput>
  }

  /**
   * Rol createMany
   */
  export type RolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol createManyAndReturn
   */
  export type RolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol update
   */
  export type RolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to update a Rol.
     */
    data: XOR<RolUpdateInput, RolUncheckedUpdateInput>
    /**
     * Choose, which Rol to update.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol updateMany
   */
  export type RolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol updateManyAndReturn
   */
  export type RolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol upsert
   */
  export type RolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The filter to search for the Rol to update in case it exists.
     */
    where: RolWhereUniqueInput
    /**
     * In case the Rol found by the `where` argument doesn't exist, create a new Rol with this data.
     */
    create: XOR<RolCreateInput, RolUncheckedCreateInput>
    /**
     * In case the Rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolUpdateInput, RolUncheckedUpdateInput>
  }

  /**
   * Rol delete
   */
  export type RolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter which Rol to delete.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol deleteMany
   */
  export type RolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rols to delete
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to delete.
     */
    limit?: number
  }

  /**
   * Rol.rolesAsignados
   */
  export type Rol$rolesAsignadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolAsignado
     */
    select?: RolAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolAsignado
     */
    omit?: RolAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolAsignadoInclude<ExtArgs> | null
    where?: RolAsignadoWhereInput
    orderBy?: RolAsignadoOrderByWithRelationInput | RolAsignadoOrderByWithRelationInput[]
    cursor?: RolAsignadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolAsignadoScalarFieldEnum | RolAsignadoScalarFieldEnum[]
  }

  /**
   * Rol without action
   */
  export type RolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
  }


  /**
   * Model RolAsignado
   */

  export type AggregateRolAsignado = {
    _count: RolAsignadoCountAggregateOutputType | null
    _avg: RolAsignadoAvgAggregateOutputType | null
    _sum: RolAsignadoSumAggregateOutputType | null
    _min: RolAsignadoMinAggregateOutputType | null
    _max: RolAsignadoMaxAggregateOutputType | null
  }

  export type RolAsignadoAvgAggregateOutputType = {
    idra: number | null
    usuarioId: number | null
    rolId: number | null
  }

  export type RolAsignadoSumAggregateOutputType = {
    idra: number | null
    usuarioId: number | null
    rolId: number | null
  }

  export type RolAsignadoMinAggregateOutputType = {
    idra: number | null
    usuarioId: number | null
    rolId: number | null
  }

  export type RolAsignadoMaxAggregateOutputType = {
    idra: number | null
    usuarioId: number | null
    rolId: number | null
  }

  export type RolAsignadoCountAggregateOutputType = {
    idra: number
    usuarioId: number
    rolId: number
    _all: number
  }


  export type RolAsignadoAvgAggregateInputType = {
    idra?: true
    usuarioId?: true
    rolId?: true
  }

  export type RolAsignadoSumAggregateInputType = {
    idra?: true
    usuarioId?: true
    rolId?: true
  }

  export type RolAsignadoMinAggregateInputType = {
    idra?: true
    usuarioId?: true
    rolId?: true
  }

  export type RolAsignadoMaxAggregateInputType = {
    idra?: true
    usuarioId?: true
    rolId?: true
  }

  export type RolAsignadoCountAggregateInputType = {
    idra?: true
    usuarioId?: true
    rolId?: true
    _all?: true
  }

  export type RolAsignadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolAsignado to aggregate.
     */
    where?: RolAsignadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolAsignados to fetch.
     */
    orderBy?: RolAsignadoOrderByWithRelationInput | RolAsignadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolAsignadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolAsignados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolAsignados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolAsignados
    **/
    _count?: true | RolAsignadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAsignadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolAsignadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolAsignadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolAsignadoMaxAggregateInputType
  }

  export type GetRolAsignadoAggregateType<T extends RolAsignadoAggregateArgs> = {
        [P in keyof T & keyof AggregateRolAsignado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolAsignado[P]>
      : GetScalarType<T[P], AggregateRolAsignado[P]>
  }




  export type RolAsignadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolAsignadoWhereInput
    orderBy?: RolAsignadoOrderByWithAggregationInput | RolAsignadoOrderByWithAggregationInput[]
    by: RolAsignadoScalarFieldEnum[] | RolAsignadoScalarFieldEnum
    having?: RolAsignadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolAsignadoCountAggregateInputType | true
    _avg?: RolAsignadoAvgAggregateInputType
    _sum?: RolAsignadoSumAggregateInputType
    _min?: RolAsignadoMinAggregateInputType
    _max?: RolAsignadoMaxAggregateInputType
  }

  export type RolAsignadoGroupByOutputType = {
    idra: number
    usuarioId: number
    rolId: number
    _count: RolAsignadoCountAggregateOutputType | null
    _avg: RolAsignadoAvgAggregateOutputType | null
    _sum: RolAsignadoSumAggregateOutputType | null
    _min: RolAsignadoMinAggregateOutputType | null
    _max: RolAsignadoMaxAggregateOutputType | null
  }

  type GetRolAsignadoGroupByPayload<T extends RolAsignadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolAsignadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolAsignadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolAsignadoGroupByOutputType[P]>
            : GetScalarType<T[P], RolAsignadoGroupByOutputType[P]>
        }
      >
    >


  export type RolAsignadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idra?: boolean
    usuarioId?: boolean
    rolId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolAsignado"]>

  export type RolAsignadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idra?: boolean
    usuarioId?: boolean
    rolId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolAsignado"]>

  export type RolAsignadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idra?: boolean
    usuarioId?: boolean
    rolId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolAsignado"]>

  export type RolAsignadoSelectScalar = {
    idra?: boolean
    usuarioId?: boolean
    rolId?: boolean
  }

  export type RolAsignadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idra" | "usuarioId" | "rolId", ExtArgs["result"]["rolAsignado"]>
  export type RolAsignadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }
  export type RolAsignadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }
  export type RolAsignadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }

  export type $RolAsignadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolAsignado"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      rol: Prisma.$RolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idra: number
      usuarioId: number
      rolId: number
    }, ExtArgs["result"]["rolAsignado"]>
    composites: {}
  }

  type RolAsignadoGetPayload<S extends boolean | null | undefined | RolAsignadoDefaultArgs> = $Result.GetResult<Prisma.$RolAsignadoPayload, S>

  type RolAsignadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolAsignadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolAsignadoCountAggregateInputType | true
    }

  export interface RolAsignadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolAsignado'], meta: { name: 'RolAsignado' } }
    /**
     * Find zero or one RolAsignado that matches the filter.
     * @param {RolAsignadoFindUniqueArgs} args - Arguments to find a RolAsignado
     * @example
     * // Get one RolAsignado
     * const rolAsignado = await prisma.rolAsignado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolAsignadoFindUniqueArgs>(args: SelectSubset<T, RolAsignadoFindUniqueArgs<ExtArgs>>): Prisma__RolAsignadoClient<$Result.GetResult<Prisma.$RolAsignadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolAsignado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolAsignadoFindUniqueOrThrowArgs} args - Arguments to find a RolAsignado
     * @example
     * // Get one RolAsignado
     * const rolAsignado = await prisma.rolAsignado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolAsignadoFindUniqueOrThrowArgs>(args: SelectSubset<T, RolAsignadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolAsignadoClient<$Result.GetResult<Prisma.$RolAsignadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolAsignado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAsignadoFindFirstArgs} args - Arguments to find a RolAsignado
     * @example
     * // Get one RolAsignado
     * const rolAsignado = await prisma.rolAsignado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolAsignadoFindFirstArgs>(args?: SelectSubset<T, RolAsignadoFindFirstArgs<ExtArgs>>): Prisma__RolAsignadoClient<$Result.GetResult<Prisma.$RolAsignadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolAsignado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAsignadoFindFirstOrThrowArgs} args - Arguments to find a RolAsignado
     * @example
     * // Get one RolAsignado
     * const rolAsignado = await prisma.rolAsignado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolAsignadoFindFirstOrThrowArgs>(args?: SelectSubset<T, RolAsignadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolAsignadoClient<$Result.GetResult<Prisma.$RolAsignadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolAsignados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAsignadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolAsignados
     * const rolAsignados = await prisma.rolAsignado.findMany()
     * 
     * // Get first 10 RolAsignados
     * const rolAsignados = await prisma.rolAsignado.findMany({ take: 10 })
     * 
     * // Only select the `idra`
     * const rolAsignadoWithIdraOnly = await prisma.rolAsignado.findMany({ select: { idra: true } })
     * 
     */
    findMany<T extends RolAsignadoFindManyArgs>(args?: SelectSubset<T, RolAsignadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolAsignadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolAsignado.
     * @param {RolAsignadoCreateArgs} args - Arguments to create a RolAsignado.
     * @example
     * // Create one RolAsignado
     * const RolAsignado = await prisma.rolAsignado.create({
     *   data: {
     *     // ... data to create a RolAsignado
     *   }
     * })
     * 
     */
    create<T extends RolAsignadoCreateArgs>(args: SelectSubset<T, RolAsignadoCreateArgs<ExtArgs>>): Prisma__RolAsignadoClient<$Result.GetResult<Prisma.$RolAsignadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolAsignados.
     * @param {RolAsignadoCreateManyArgs} args - Arguments to create many RolAsignados.
     * @example
     * // Create many RolAsignados
     * const rolAsignado = await prisma.rolAsignado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolAsignadoCreateManyArgs>(args?: SelectSubset<T, RolAsignadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolAsignados and returns the data saved in the database.
     * @param {RolAsignadoCreateManyAndReturnArgs} args - Arguments to create many RolAsignados.
     * @example
     * // Create many RolAsignados
     * const rolAsignado = await prisma.rolAsignado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolAsignados and only return the `idra`
     * const rolAsignadoWithIdraOnly = await prisma.rolAsignado.createManyAndReturn({
     *   select: { idra: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolAsignadoCreateManyAndReturnArgs>(args?: SelectSubset<T, RolAsignadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolAsignadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RolAsignado.
     * @param {RolAsignadoDeleteArgs} args - Arguments to delete one RolAsignado.
     * @example
     * // Delete one RolAsignado
     * const RolAsignado = await prisma.rolAsignado.delete({
     *   where: {
     *     // ... filter to delete one RolAsignado
     *   }
     * })
     * 
     */
    delete<T extends RolAsignadoDeleteArgs>(args: SelectSubset<T, RolAsignadoDeleteArgs<ExtArgs>>): Prisma__RolAsignadoClient<$Result.GetResult<Prisma.$RolAsignadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolAsignado.
     * @param {RolAsignadoUpdateArgs} args - Arguments to update one RolAsignado.
     * @example
     * // Update one RolAsignado
     * const rolAsignado = await prisma.rolAsignado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolAsignadoUpdateArgs>(args: SelectSubset<T, RolAsignadoUpdateArgs<ExtArgs>>): Prisma__RolAsignadoClient<$Result.GetResult<Prisma.$RolAsignadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolAsignados.
     * @param {RolAsignadoDeleteManyArgs} args - Arguments to filter RolAsignados to delete.
     * @example
     * // Delete a few RolAsignados
     * const { count } = await prisma.rolAsignado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolAsignadoDeleteManyArgs>(args?: SelectSubset<T, RolAsignadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolAsignados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAsignadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolAsignados
     * const rolAsignado = await prisma.rolAsignado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolAsignadoUpdateManyArgs>(args: SelectSubset<T, RolAsignadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolAsignados and returns the data updated in the database.
     * @param {RolAsignadoUpdateManyAndReturnArgs} args - Arguments to update many RolAsignados.
     * @example
     * // Update many RolAsignados
     * const rolAsignado = await prisma.rolAsignado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RolAsignados and only return the `idra`
     * const rolAsignadoWithIdraOnly = await prisma.rolAsignado.updateManyAndReturn({
     *   select: { idra: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolAsignadoUpdateManyAndReturnArgs>(args: SelectSubset<T, RolAsignadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolAsignadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RolAsignado.
     * @param {RolAsignadoUpsertArgs} args - Arguments to update or create a RolAsignado.
     * @example
     * // Update or create a RolAsignado
     * const rolAsignado = await prisma.rolAsignado.upsert({
     *   create: {
     *     // ... data to create a RolAsignado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolAsignado we want to update
     *   }
     * })
     */
    upsert<T extends RolAsignadoUpsertArgs>(args: SelectSubset<T, RolAsignadoUpsertArgs<ExtArgs>>): Prisma__RolAsignadoClient<$Result.GetResult<Prisma.$RolAsignadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolAsignados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAsignadoCountArgs} args - Arguments to filter RolAsignados to count.
     * @example
     * // Count the number of RolAsignados
     * const count = await prisma.rolAsignado.count({
     *   where: {
     *     // ... the filter for the RolAsignados we want to count
     *   }
     * })
    **/
    count<T extends RolAsignadoCountArgs>(
      args?: Subset<T, RolAsignadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolAsignadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolAsignado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAsignadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolAsignadoAggregateArgs>(args: Subset<T, RolAsignadoAggregateArgs>): Prisma.PrismaPromise<GetRolAsignadoAggregateType<T>>

    /**
     * Group by RolAsignado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAsignadoGroupByArgs} args - Group by arguments.
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
      T extends RolAsignadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolAsignadoGroupByArgs['orderBy'] }
        : { orderBy?: RolAsignadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolAsignadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolAsignadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolAsignado model
   */
  readonly fields: RolAsignadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolAsignado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolAsignadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RolAsignado model
   */
  interface RolAsignadoFieldRefs {
    readonly idra: FieldRef<"RolAsignado", 'Int'>
    readonly usuarioId: FieldRef<"RolAsignado", 'Int'>
    readonly rolId: FieldRef<"RolAsignado", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RolAsignado findUnique
   */
  export type RolAsignadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolAsignado
     */
    select?: RolAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolAsignado
     */
    omit?: RolAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolAsignadoInclude<ExtArgs> | null
    /**
     * Filter, which RolAsignado to fetch.
     */
    where: RolAsignadoWhereUniqueInput
  }

  /**
   * RolAsignado findUniqueOrThrow
   */
  export type RolAsignadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolAsignado
     */
    select?: RolAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolAsignado
     */
    omit?: RolAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolAsignadoInclude<ExtArgs> | null
    /**
     * Filter, which RolAsignado to fetch.
     */
    where: RolAsignadoWhereUniqueInput
  }

  /**
   * RolAsignado findFirst
   */
  export type RolAsignadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolAsignado
     */
    select?: RolAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolAsignado
     */
    omit?: RolAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolAsignadoInclude<ExtArgs> | null
    /**
     * Filter, which RolAsignado to fetch.
     */
    where?: RolAsignadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolAsignados to fetch.
     */
    orderBy?: RolAsignadoOrderByWithRelationInput | RolAsignadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolAsignados.
     */
    cursor?: RolAsignadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolAsignados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolAsignados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolAsignados.
     */
    distinct?: RolAsignadoScalarFieldEnum | RolAsignadoScalarFieldEnum[]
  }

  /**
   * RolAsignado findFirstOrThrow
   */
  export type RolAsignadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolAsignado
     */
    select?: RolAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolAsignado
     */
    omit?: RolAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolAsignadoInclude<ExtArgs> | null
    /**
     * Filter, which RolAsignado to fetch.
     */
    where?: RolAsignadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolAsignados to fetch.
     */
    orderBy?: RolAsignadoOrderByWithRelationInput | RolAsignadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolAsignados.
     */
    cursor?: RolAsignadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolAsignados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolAsignados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolAsignados.
     */
    distinct?: RolAsignadoScalarFieldEnum | RolAsignadoScalarFieldEnum[]
  }

  /**
   * RolAsignado findMany
   */
  export type RolAsignadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolAsignado
     */
    select?: RolAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolAsignado
     */
    omit?: RolAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolAsignadoInclude<ExtArgs> | null
    /**
     * Filter, which RolAsignados to fetch.
     */
    where?: RolAsignadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolAsignados to fetch.
     */
    orderBy?: RolAsignadoOrderByWithRelationInput | RolAsignadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolAsignados.
     */
    cursor?: RolAsignadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolAsignados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolAsignados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolAsignados.
     */
    distinct?: RolAsignadoScalarFieldEnum | RolAsignadoScalarFieldEnum[]
  }

  /**
   * RolAsignado create
   */
  export type RolAsignadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolAsignado
     */
    select?: RolAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolAsignado
     */
    omit?: RolAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolAsignadoInclude<ExtArgs> | null
    /**
     * The data needed to create a RolAsignado.
     */
    data: XOR<RolAsignadoCreateInput, RolAsignadoUncheckedCreateInput>
  }

  /**
   * RolAsignado createMany
   */
  export type RolAsignadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolAsignados.
     */
    data: RolAsignadoCreateManyInput | RolAsignadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolAsignado createManyAndReturn
   */
  export type RolAsignadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolAsignado
     */
    select?: RolAsignadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolAsignado
     */
    omit?: RolAsignadoOmit<ExtArgs> | null
    /**
     * The data used to create many RolAsignados.
     */
    data: RolAsignadoCreateManyInput | RolAsignadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolAsignadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolAsignado update
   */
  export type RolAsignadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolAsignado
     */
    select?: RolAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolAsignado
     */
    omit?: RolAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolAsignadoInclude<ExtArgs> | null
    /**
     * The data needed to update a RolAsignado.
     */
    data: XOR<RolAsignadoUpdateInput, RolAsignadoUncheckedUpdateInput>
    /**
     * Choose, which RolAsignado to update.
     */
    where: RolAsignadoWhereUniqueInput
  }

  /**
   * RolAsignado updateMany
   */
  export type RolAsignadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolAsignados.
     */
    data: XOR<RolAsignadoUpdateManyMutationInput, RolAsignadoUncheckedUpdateManyInput>
    /**
     * Filter which RolAsignados to update
     */
    where?: RolAsignadoWhereInput
    /**
     * Limit how many RolAsignados to update.
     */
    limit?: number
  }

  /**
   * RolAsignado updateManyAndReturn
   */
  export type RolAsignadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolAsignado
     */
    select?: RolAsignadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolAsignado
     */
    omit?: RolAsignadoOmit<ExtArgs> | null
    /**
     * The data used to update RolAsignados.
     */
    data: XOR<RolAsignadoUpdateManyMutationInput, RolAsignadoUncheckedUpdateManyInput>
    /**
     * Filter which RolAsignados to update
     */
    where?: RolAsignadoWhereInput
    /**
     * Limit how many RolAsignados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolAsignadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolAsignado upsert
   */
  export type RolAsignadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolAsignado
     */
    select?: RolAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolAsignado
     */
    omit?: RolAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolAsignadoInclude<ExtArgs> | null
    /**
     * The filter to search for the RolAsignado to update in case it exists.
     */
    where: RolAsignadoWhereUniqueInput
    /**
     * In case the RolAsignado found by the `where` argument doesn't exist, create a new RolAsignado with this data.
     */
    create: XOR<RolAsignadoCreateInput, RolAsignadoUncheckedCreateInput>
    /**
     * In case the RolAsignado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolAsignadoUpdateInput, RolAsignadoUncheckedUpdateInput>
  }

  /**
   * RolAsignado delete
   */
  export type RolAsignadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolAsignado
     */
    select?: RolAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolAsignado
     */
    omit?: RolAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolAsignadoInclude<ExtArgs> | null
    /**
     * Filter which RolAsignado to delete.
     */
    where: RolAsignadoWhereUniqueInput
  }

  /**
   * RolAsignado deleteMany
   */
  export type RolAsignadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolAsignados to delete
     */
    where?: RolAsignadoWhereInput
    /**
     * Limit how many RolAsignados to delete.
     */
    limit?: number
  }

  /**
   * RolAsignado without action
   */
  export type RolAsignadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolAsignado
     */
    select?: RolAsignadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolAsignado
     */
    omit?: RolAsignadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolAsignadoInclude<ExtArgs> | null
  }


  /**
   * Model Provincia
   */

  export type AggregateProvincia = {
    _count: ProvinciaCountAggregateOutputType | null
    _avg: ProvinciaAvgAggregateOutputType | null
    _sum: ProvinciaSumAggregateOutputType | null
    _min: ProvinciaMinAggregateOutputType | null
    _max: ProvinciaMaxAggregateOutputType | null
  }

  export type ProvinciaAvgAggregateOutputType = {
    id: number | null
    lealtad: number | null
    prosperidadEconomica: number | null
    impuestos: number | null
    conflictosInternos: number | null
    riesgoRebelion: number | null
  }

  export type ProvinciaSumAggregateOutputType = {
    id: number | null
    lealtad: number | null
    prosperidadEconomica: number | null
    impuestos: number | null
    conflictosInternos: number | null
    riesgoRebelion: number | null
  }

  export type ProvinciaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    lealtad: number | null
    prosperidadEconomica: number | null
    impuestos: number | null
    conflictosInternos: number | null
    riesgoRebelion: number | null
  }

  export type ProvinciaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    lealtad: number | null
    prosperidadEconomica: number | null
    impuestos: number | null
    conflictosInternos: number | null
    riesgoRebelion: number | null
  }

  export type ProvinciaCountAggregateOutputType = {
    id: number
    nombre: number
    lealtad: number
    prosperidadEconomica: number
    impuestos: number
    conflictosInternos: number
    riesgoRebelion: number
    _all: number
  }


  export type ProvinciaAvgAggregateInputType = {
    id?: true
    lealtad?: true
    prosperidadEconomica?: true
    impuestos?: true
    conflictosInternos?: true
    riesgoRebelion?: true
  }

  export type ProvinciaSumAggregateInputType = {
    id?: true
    lealtad?: true
    prosperidadEconomica?: true
    impuestos?: true
    conflictosInternos?: true
    riesgoRebelion?: true
  }

  export type ProvinciaMinAggregateInputType = {
    id?: true
    nombre?: true
    lealtad?: true
    prosperidadEconomica?: true
    impuestos?: true
    conflictosInternos?: true
    riesgoRebelion?: true
  }

  export type ProvinciaMaxAggregateInputType = {
    id?: true
    nombre?: true
    lealtad?: true
    prosperidadEconomica?: true
    impuestos?: true
    conflictosInternos?: true
    riesgoRebelion?: true
  }

  export type ProvinciaCountAggregateInputType = {
    id?: true
    nombre?: true
    lealtad?: true
    prosperidadEconomica?: true
    impuestos?: true
    conflictosInternos?: true
    riesgoRebelion?: true
    _all?: true
  }

  export type ProvinciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provincia to aggregate.
     */
    where?: ProvinciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provincias to fetch.
     */
    orderBy?: ProvinciaOrderByWithRelationInput | ProvinciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProvinciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provincias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provincias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Provincias
    **/
    _count?: true | ProvinciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvinciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvinciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvinciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvinciaMaxAggregateInputType
  }

  export type GetProvinciaAggregateType<T extends ProvinciaAggregateArgs> = {
        [P in keyof T & keyof AggregateProvincia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvincia[P]>
      : GetScalarType<T[P], AggregateProvincia[P]>
  }




  export type ProvinciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProvinciaWhereInput
    orderBy?: ProvinciaOrderByWithAggregationInput | ProvinciaOrderByWithAggregationInput[]
    by: ProvinciaScalarFieldEnum[] | ProvinciaScalarFieldEnum
    having?: ProvinciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvinciaCountAggregateInputType | true
    _avg?: ProvinciaAvgAggregateInputType
    _sum?: ProvinciaSumAggregateInputType
    _min?: ProvinciaMinAggregateInputType
    _max?: ProvinciaMaxAggregateInputType
  }

  export type ProvinciaGroupByOutputType = {
    id: number
    nombre: string
    lealtad: number
    prosperidadEconomica: number
    impuestos: number
    conflictosInternos: number
    riesgoRebelion: number
    _count: ProvinciaCountAggregateOutputType | null
    _avg: ProvinciaAvgAggregateOutputType | null
    _sum: ProvinciaSumAggregateOutputType | null
    _min: ProvinciaMinAggregateOutputType | null
    _max: ProvinciaMaxAggregateOutputType | null
  }

  type GetProvinciaGroupByPayload<T extends ProvinciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvinciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvinciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvinciaGroupByOutputType[P]>
            : GetScalarType<T[P], ProvinciaGroupByOutputType[P]>
        }
      >
    >


  export type ProvinciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    lealtad?: boolean
    prosperidadEconomica?: boolean
    impuestos?: boolean
    conflictosInternos?: boolean
    riesgoRebelion?: boolean
    legiones?: boolean | Provincia$legionesArgs<ExtArgs>
    gobernador?: boolean | Provincia$gobernadorArgs<ExtArgs>
    _count?: boolean | ProvinciaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provincia"]>

  export type ProvinciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    lealtad?: boolean
    prosperidadEconomica?: boolean
    impuestos?: boolean
    conflictosInternos?: boolean
    riesgoRebelion?: boolean
  }, ExtArgs["result"]["provincia"]>

  export type ProvinciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    lealtad?: boolean
    prosperidadEconomica?: boolean
    impuestos?: boolean
    conflictosInternos?: boolean
    riesgoRebelion?: boolean
  }, ExtArgs["result"]["provincia"]>

  export type ProvinciaSelectScalar = {
    id?: boolean
    nombre?: boolean
    lealtad?: boolean
    prosperidadEconomica?: boolean
    impuestos?: boolean
    conflictosInternos?: boolean
    riesgoRebelion?: boolean
  }

  export type ProvinciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "lealtad" | "prosperidadEconomica" | "impuestos" | "conflictosInternos" | "riesgoRebelion", ExtArgs["result"]["provincia"]>
  export type ProvinciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legiones?: boolean | Provincia$legionesArgs<ExtArgs>
    gobernador?: boolean | Provincia$gobernadorArgs<ExtArgs>
    _count?: boolean | ProvinciaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProvinciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProvinciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProvinciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Provincia"
    objects: {
      legiones: Prisma.$LegionPayload<ExtArgs>[]
      gobernador: Prisma.$GobernadorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      lealtad: number
      prosperidadEconomica: number
      impuestos: number
      conflictosInternos: number
      riesgoRebelion: number
    }, ExtArgs["result"]["provincia"]>
    composites: {}
  }

  type ProvinciaGetPayload<S extends boolean | null | undefined | ProvinciaDefaultArgs> = $Result.GetResult<Prisma.$ProvinciaPayload, S>

  type ProvinciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProvinciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvinciaCountAggregateInputType | true
    }

  export interface ProvinciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Provincia'], meta: { name: 'Provincia' } }
    /**
     * Find zero or one Provincia that matches the filter.
     * @param {ProvinciaFindUniqueArgs} args - Arguments to find a Provincia
     * @example
     * // Get one Provincia
     * const provincia = await prisma.provincia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProvinciaFindUniqueArgs>(args: SelectSubset<T, ProvinciaFindUniqueArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Provincia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProvinciaFindUniqueOrThrowArgs} args - Arguments to find a Provincia
     * @example
     * // Get one Provincia
     * const provincia = await prisma.provincia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProvinciaFindUniqueOrThrowArgs>(args: SelectSubset<T, ProvinciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provincia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaFindFirstArgs} args - Arguments to find a Provincia
     * @example
     * // Get one Provincia
     * const provincia = await prisma.provincia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProvinciaFindFirstArgs>(args?: SelectSubset<T, ProvinciaFindFirstArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provincia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaFindFirstOrThrowArgs} args - Arguments to find a Provincia
     * @example
     * // Get one Provincia
     * const provincia = await prisma.provincia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProvinciaFindFirstOrThrowArgs>(args?: SelectSubset<T, ProvinciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Provincias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provincias
     * const provincias = await prisma.provincia.findMany()
     * 
     * // Get first 10 Provincias
     * const provincias = await prisma.provincia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provinciaWithIdOnly = await prisma.provincia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProvinciaFindManyArgs>(args?: SelectSubset<T, ProvinciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Provincia.
     * @param {ProvinciaCreateArgs} args - Arguments to create a Provincia.
     * @example
     * // Create one Provincia
     * const Provincia = await prisma.provincia.create({
     *   data: {
     *     // ... data to create a Provincia
     *   }
     * })
     * 
     */
    create<T extends ProvinciaCreateArgs>(args: SelectSubset<T, ProvinciaCreateArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Provincias.
     * @param {ProvinciaCreateManyArgs} args - Arguments to create many Provincias.
     * @example
     * // Create many Provincias
     * const provincia = await prisma.provincia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProvinciaCreateManyArgs>(args?: SelectSubset<T, ProvinciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Provincias and returns the data saved in the database.
     * @param {ProvinciaCreateManyAndReturnArgs} args - Arguments to create many Provincias.
     * @example
     * // Create many Provincias
     * const provincia = await prisma.provincia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Provincias and only return the `id`
     * const provinciaWithIdOnly = await prisma.provincia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProvinciaCreateManyAndReturnArgs>(args?: SelectSubset<T, ProvinciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Provincia.
     * @param {ProvinciaDeleteArgs} args - Arguments to delete one Provincia.
     * @example
     * // Delete one Provincia
     * const Provincia = await prisma.provincia.delete({
     *   where: {
     *     // ... filter to delete one Provincia
     *   }
     * })
     * 
     */
    delete<T extends ProvinciaDeleteArgs>(args: SelectSubset<T, ProvinciaDeleteArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Provincia.
     * @param {ProvinciaUpdateArgs} args - Arguments to update one Provincia.
     * @example
     * // Update one Provincia
     * const provincia = await prisma.provincia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProvinciaUpdateArgs>(args: SelectSubset<T, ProvinciaUpdateArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Provincias.
     * @param {ProvinciaDeleteManyArgs} args - Arguments to filter Provincias to delete.
     * @example
     * // Delete a few Provincias
     * const { count } = await prisma.provincia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProvinciaDeleteManyArgs>(args?: SelectSubset<T, ProvinciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provincias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provincias
     * const provincia = await prisma.provincia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProvinciaUpdateManyArgs>(args: SelectSubset<T, ProvinciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provincias and returns the data updated in the database.
     * @param {ProvinciaUpdateManyAndReturnArgs} args - Arguments to update many Provincias.
     * @example
     * // Update many Provincias
     * const provincia = await prisma.provincia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Provincias and only return the `id`
     * const provinciaWithIdOnly = await prisma.provincia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProvinciaUpdateManyAndReturnArgs>(args: SelectSubset<T, ProvinciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Provincia.
     * @param {ProvinciaUpsertArgs} args - Arguments to update or create a Provincia.
     * @example
     * // Update or create a Provincia
     * const provincia = await prisma.provincia.upsert({
     *   create: {
     *     // ... data to create a Provincia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provincia we want to update
     *   }
     * })
     */
    upsert<T extends ProvinciaUpsertArgs>(args: SelectSubset<T, ProvinciaUpsertArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Provincias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaCountArgs} args - Arguments to filter Provincias to count.
     * @example
     * // Count the number of Provincias
     * const count = await prisma.provincia.count({
     *   where: {
     *     // ... the filter for the Provincias we want to count
     *   }
     * })
    **/
    count<T extends ProvinciaCountArgs>(
      args?: Subset<T, ProvinciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvinciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provincia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProvinciaAggregateArgs>(args: Subset<T, ProvinciaAggregateArgs>): Prisma.PrismaPromise<GetProvinciaAggregateType<T>>

    /**
     * Group by Provincia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaGroupByArgs} args - Group by arguments.
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
      T extends ProvinciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProvinciaGroupByArgs['orderBy'] }
        : { orderBy?: ProvinciaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProvinciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvinciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Provincia model
   */
  readonly fields: ProvinciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Provincia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProvinciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    legiones<T extends Provincia$legionesArgs<ExtArgs> = {}>(args?: Subset<T, Provincia$legionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gobernador<T extends Provincia$gobernadorArgs<ExtArgs> = {}>(args?: Subset<T, Provincia$gobernadorArgs<ExtArgs>>): Prisma__GobernadorClient<$Result.GetResult<Prisma.$GobernadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Provincia model
   */
  interface ProvinciaFieldRefs {
    readonly id: FieldRef<"Provincia", 'Int'>
    readonly nombre: FieldRef<"Provincia", 'String'>
    readonly lealtad: FieldRef<"Provincia", 'Int'>
    readonly prosperidadEconomica: FieldRef<"Provincia", 'Int'>
    readonly impuestos: FieldRef<"Provincia", 'Int'>
    readonly conflictosInternos: FieldRef<"Provincia", 'Int'>
    readonly riesgoRebelion: FieldRef<"Provincia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Provincia findUnique
   */
  export type ProvinciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * Filter, which Provincia to fetch.
     */
    where: ProvinciaWhereUniqueInput
  }

  /**
   * Provincia findUniqueOrThrow
   */
  export type ProvinciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * Filter, which Provincia to fetch.
     */
    where: ProvinciaWhereUniqueInput
  }

  /**
   * Provincia findFirst
   */
  export type ProvinciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * Filter, which Provincia to fetch.
     */
    where?: ProvinciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provincias to fetch.
     */
    orderBy?: ProvinciaOrderByWithRelationInput | ProvinciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provincias.
     */
    cursor?: ProvinciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provincias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provincias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provincias.
     */
    distinct?: ProvinciaScalarFieldEnum | ProvinciaScalarFieldEnum[]
  }

  /**
   * Provincia findFirstOrThrow
   */
  export type ProvinciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * Filter, which Provincia to fetch.
     */
    where?: ProvinciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provincias to fetch.
     */
    orderBy?: ProvinciaOrderByWithRelationInput | ProvinciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provincias.
     */
    cursor?: ProvinciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provincias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provincias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provincias.
     */
    distinct?: ProvinciaScalarFieldEnum | ProvinciaScalarFieldEnum[]
  }

  /**
   * Provincia findMany
   */
  export type ProvinciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * Filter, which Provincias to fetch.
     */
    where?: ProvinciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provincias to fetch.
     */
    orderBy?: ProvinciaOrderByWithRelationInput | ProvinciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Provincias.
     */
    cursor?: ProvinciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provincias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provincias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provincias.
     */
    distinct?: ProvinciaScalarFieldEnum | ProvinciaScalarFieldEnum[]
  }

  /**
   * Provincia create
   */
  export type ProvinciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Provincia.
     */
    data: XOR<ProvinciaCreateInput, ProvinciaUncheckedCreateInput>
  }

  /**
   * Provincia createMany
   */
  export type ProvinciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Provincias.
     */
    data: ProvinciaCreateManyInput | ProvinciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provincia createManyAndReturn
   */
  export type ProvinciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * The data used to create many Provincias.
     */
    data: ProvinciaCreateManyInput | ProvinciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provincia update
   */
  export type ProvinciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Provincia.
     */
    data: XOR<ProvinciaUpdateInput, ProvinciaUncheckedUpdateInput>
    /**
     * Choose, which Provincia to update.
     */
    where: ProvinciaWhereUniqueInput
  }

  /**
   * Provincia updateMany
   */
  export type ProvinciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Provincias.
     */
    data: XOR<ProvinciaUpdateManyMutationInput, ProvinciaUncheckedUpdateManyInput>
    /**
     * Filter which Provincias to update
     */
    where?: ProvinciaWhereInput
    /**
     * Limit how many Provincias to update.
     */
    limit?: number
  }

  /**
   * Provincia updateManyAndReturn
   */
  export type ProvinciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * The data used to update Provincias.
     */
    data: XOR<ProvinciaUpdateManyMutationInput, ProvinciaUncheckedUpdateManyInput>
    /**
     * Filter which Provincias to update
     */
    where?: ProvinciaWhereInput
    /**
     * Limit how many Provincias to update.
     */
    limit?: number
  }

  /**
   * Provincia upsert
   */
  export type ProvinciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Provincia to update in case it exists.
     */
    where: ProvinciaWhereUniqueInput
    /**
     * In case the Provincia found by the `where` argument doesn't exist, create a new Provincia with this data.
     */
    create: XOR<ProvinciaCreateInput, ProvinciaUncheckedCreateInput>
    /**
     * In case the Provincia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProvinciaUpdateInput, ProvinciaUncheckedUpdateInput>
  }

  /**
   * Provincia delete
   */
  export type ProvinciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * Filter which Provincia to delete.
     */
    where: ProvinciaWhereUniqueInput
  }

  /**
   * Provincia deleteMany
   */
  export type ProvinciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provincias to delete
     */
    where?: ProvinciaWhereInput
    /**
     * Limit how many Provincias to delete.
     */
    limit?: number
  }

  /**
   * Provincia.legiones
   */
  export type Provincia$legionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legion
     */
    select?: LegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legion
     */
    omit?: LegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegionInclude<ExtArgs> | null
    where?: LegionWhereInput
    orderBy?: LegionOrderByWithRelationInput | LegionOrderByWithRelationInput[]
    cursor?: LegionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LegionScalarFieldEnum | LegionScalarFieldEnum[]
  }

  /**
   * Provincia.gobernador
   */
  export type Provincia$gobernadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gobernador
     */
    select?: GobernadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gobernador
     */
    omit?: GobernadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GobernadorInclude<ExtArgs> | null
    where?: GobernadorWhereInput
  }

  /**
   * Provincia without action
   */
  export type ProvinciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
  }


  /**
   * Model Legion
   */

  export type AggregateLegion = {
    _count: LegionCountAggregateOutputType | null
    _avg: LegionAvgAggregateOutputType | null
    _sum: LegionSumAggregateOutputType | null
    _min: LegionMinAggregateOutputType | null
    _max: LegionMaxAggregateOutputType | null
  }

  export type LegionAvgAggregateOutputType = {
    id: number | null
    numeroSoldados: number | null
    experiencia: number | null
    moral: number | null
    provinciaId: number | null
  }

  export type LegionSumAggregateOutputType = {
    id: number | null
    numeroSoldados: number | null
    experiencia: number | null
    moral: number | null
    provinciaId: number | null
  }

  export type LegionMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    numeroSoldados: number | null
    experiencia: number | null
    moral: number | null
    estado: string | null
    provinciaId: number | null
  }

  export type LegionMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    numeroSoldados: number | null
    experiencia: number | null
    moral: number | null
    estado: string | null
    provinciaId: number | null
  }

  export type LegionCountAggregateOutputType = {
    id: number
    nombre: number
    numeroSoldados: number
    experiencia: number
    moral: number
    estado: number
    provinciaId: number
    _all: number
  }


  export type LegionAvgAggregateInputType = {
    id?: true
    numeroSoldados?: true
    experiencia?: true
    moral?: true
    provinciaId?: true
  }

  export type LegionSumAggregateInputType = {
    id?: true
    numeroSoldados?: true
    experiencia?: true
    moral?: true
    provinciaId?: true
  }

  export type LegionMinAggregateInputType = {
    id?: true
    nombre?: true
    numeroSoldados?: true
    experiencia?: true
    moral?: true
    estado?: true
    provinciaId?: true
  }

  export type LegionMaxAggregateInputType = {
    id?: true
    nombre?: true
    numeroSoldados?: true
    experiencia?: true
    moral?: true
    estado?: true
    provinciaId?: true
  }

  export type LegionCountAggregateInputType = {
    id?: true
    nombre?: true
    numeroSoldados?: true
    experiencia?: true
    moral?: true
    estado?: true
    provinciaId?: true
    _all?: true
  }

  export type LegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Legion to aggregate.
     */
    where?: LegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legions to fetch.
     */
    orderBy?: LegionOrderByWithRelationInput | LegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Legions
    **/
    _count?: true | LegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LegionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LegionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegionMaxAggregateInputType
  }

  export type GetLegionAggregateType<T extends LegionAggregateArgs> = {
        [P in keyof T & keyof AggregateLegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegion[P]>
      : GetScalarType<T[P], AggregateLegion[P]>
  }




  export type LegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegionWhereInput
    orderBy?: LegionOrderByWithAggregationInput | LegionOrderByWithAggregationInput[]
    by: LegionScalarFieldEnum[] | LegionScalarFieldEnum
    having?: LegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegionCountAggregateInputType | true
    _avg?: LegionAvgAggregateInputType
    _sum?: LegionSumAggregateInputType
    _min?: LegionMinAggregateInputType
    _max?: LegionMaxAggregateInputType
  }

  export type LegionGroupByOutputType = {
    id: number
    nombre: string
    numeroSoldados: number
    experiencia: number
    moral: number
    estado: string
    provinciaId: number | null
    _count: LegionCountAggregateOutputType | null
    _avg: LegionAvgAggregateOutputType | null
    _sum: LegionSumAggregateOutputType | null
    _min: LegionMinAggregateOutputType | null
    _max: LegionMaxAggregateOutputType | null
  }

  type GetLegionGroupByPayload<T extends LegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LegionGroupByOutputType[P]>
            : GetScalarType<T[P], LegionGroupByOutputType[P]>
        }
      >
    >


  export type LegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    numeroSoldados?: boolean
    experiencia?: boolean
    moral?: boolean
    estado?: boolean
    provinciaId?: boolean
    provincia?: boolean | Legion$provinciaArgs<ExtArgs>
  }, ExtArgs["result"]["legion"]>

  export type LegionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    numeroSoldados?: boolean
    experiencia?: boolean
    moral?: boolean
    estado?: boolean
    provinciaId?: boolean
    provincia?: boolean | Legion$provinciaArgs<ExtArgs>
  }, ExtArgs["result"]["legion"]>

  export type LegionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    numeroSoldados?: boolean
    experiencia?: boolean
    moral?: boolean
    estado?: boolean
    provinciaId?: boolean
    provincia?: boolean | Legion$provinciaArgs<ExtArgs>
  }, ExtArgs["result"]["legion"]>

  export type LegionSelectScalar = {
    id?: boolean
    nombre?: boolean
    numeroSoldados?: boolean
    experiencia?: boolean
    moral?: boolean
    estado?: boolean
    provinciaId?: boolean
  }

  export type LegionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "numeroSoldados" | "experiencia" | "moral" | "estado" | "provinciaId", ExtArgs["result"]["legion"]>
  export type LegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provincia?: boolean | Legion$provinciaArgs<ExtArgs>
  }
  export type LegionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provincia?: boolean | Legion$provinciaArgs<ExtArgs>
  }
  export type LegionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provincia?: boolean | Legion$provinciaArgs<ExtArgs>
  }

  export type $LegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Legion"
    objects: {
      provincia: Prisma.$ProvinciaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      numeroSoldados: number
      experiencia: number
      moral: number
      estado: string
      provinciaId: number | null
    }, ExtArgs["result"]["legion"]>
    composites: {}
  }

  type LegionGetPayload<S extends boolean | null | undefined | LegionDefaultArgs> = $Result.GetResult<Prisma.$LegionPayload, S>

  type LegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LegionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LegionCountAggregateInputType | true
    }

  export interface LegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Legion'], meta: { name: 'Legion' } }
    /**
     * Find zero or one Legion that matches the filter.
     * @param {LegionFindUniqueArgs} args - Arguments to find a Legion
     * @example
     * // Get one Legion
     * const legion = await prisma.legion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LegionFindUniqueArgs>(args: SelectSubset<T, LegionFindUniqueArgs<ExtArgs>>): Prisma__LegionClient<$Result.GetResult<Prisma.$LegionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Legion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LegionFindUniqueOrThrowArgs} args - Arguments to find a Legion
     * @example
     * // Get one Legion
     * const legion = await prisma.legion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LegionFindUniqueOrThrowArgs>(args: SelectSubset<T, LegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LegionClient<$Result.GetResult<Prisma.$LegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Legion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegionFindFirstArgs} args - Arguments to find a Legion
     * @example
     * // Get one Legion
     * const legion = await prisma.legion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LegionFindFirstArgs>(args?: SelectSubset<T, LegionFindFirstArgs<ExtArgs>>): Prisma__LegionClient<$Result.GetResult<Prisma.$LegionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Legion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegionFindFirstOrThrowArgs} args - Arguments to find a Legion
     * @example
     * // Get one Legion
     * const legion = await prisma.legion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LegionFindFirstOrThrowArgs>(args?: SelectSubset<T, LegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__LegionClient<$Result.GetResult<Prisma.$LegionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Legions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Legions
     * const legions = await prisma.legion.findMany()
     * 
     * // Get first 10 Legions
     * const legions = await prisma.legion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legionWithIdOnly = await prisma.legion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LegionFindManyArgs>(args?: SelectSubset<T, LegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Legion.
     * @param {LegionCreateArgs} args - Arguments to create a Legion.
     * @example
     * // Create one Legion
     * const Legion = await prisma.legion.create({
     *   data: {
     *     // ... data to create a Legion
     *   }
     * })
     * 
     */
    create<T extends LegionCreateArgs>(args: SelectSubset<T, LegionCreateArgs<ExtArgs>>): Prisma__LegionClient<$Result.GetResult<Prisma.$LegionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Legions.
     * @param {LegionCreateManyArgs} args - Arguments to create many Legions.
     * @example
     * // Create many Legions
     * const legion = await prisma.legion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LegionCreateManyArgs>(args?: SelectSubset<T, LegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Legions and returns the data saved in the database.
     * @param {LegionCreateManyAndReturnArgs} args - Arguments to create many Legions.
     * @example
     * // Create many Legions
     * const legion = await prisma.legion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Legions and only return the `id`
     * const legionWithIdOnly = await prisma.legion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LegionCreateManyAndReturnArgs>(args?: SelectSubset<T, LegionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Legion.
     * @param {LegionDeleteArgs} args - Arguments to delete one Legion.
     * @example
     * // Delete one Legion
     * const Legion = await prisma.legion.delete({
     *   where: {
     *     // ... filter to delete one Legion
     *   }
     * })
     * 
     */
    delete<T extends LegionDeleteArgs>(args: SelectSubset<T, LegionDeleteArgs<ExtArgs>>): Prisma__LegionClient<$Result.GetResult<Prisma.$LegionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Legion.
     * @param {LegionUpdateArgs} args - Arguments to update one Legion.
     * @example
     * // Update one Legion
     * const legion = await prisma.legion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LegionUpdateArgs>(args: SelectSubset<T, LegionUpdateArgs<ExtArgs>>): Prisma__LegionClient<$Result.GetResult<Prisma.$LegionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Legions.
     * @param {LegionDeleteManyArgs} args - Arguments to filter Legions to delete.
     * @example
     * // Delete a few Legions
     * const { count } = await prisma.legion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LegionDeleteManyArgs>(args?: SelectSubset<T, LegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Legions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Legions
     * const legion = await prisma.legion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LegionUpdateManyArgs>(args: SelectSubset<T, LegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Legions and returns the data updated in the database.
     * @param {LegionUpdateManyAndReturnArgs} args - Arguments to update many Legions.
     * @example
     * // Update many Legions
     * const legion = await prisma.legion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Legions and only return the `id`
     * const legionWithIdOnly = await prisma.legion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LegionUpdateManyAndReturnArgs>(args: SelectSubset<T, LegionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Legion.
     * @param {LegionUpsertArgs} args - Arguments to update or create a Legion.
     * @example
     * // Update or create a Legion
     * const legion = await prisma.legion.upsert({
     *   create: {
     *     // ... data to create a Legion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Legion we want to update
     *   }
     * })
     */
    upsert<T extends LegionUpsertArgs>(args: SelectSubset<T, LegionUpsertArgs<ExtArgs>>): Prisma__LegionClient<$Result.GetResult<Prisma.$LegionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Legions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegionCountArgs} args - Arguments to filter Legions to count.
     * @example
     * // Count the number of Legions
     * const count = await prisma.legion.count({
     *   where: {
     *     // ... the filter for the Legions we want to count
     *   }
     * })
    **/
    count<T extends LegionCountArgs>(
      args?: Subset<T, LegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Legion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LegionAggregateArgs>(args: Subset<T, LegionAggregateArgs>): Prisma.PrismaPromise<GetLegionAggregateType<T>>

    /**
     * Group by Legion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegionGroupByArgs} args - Group by arguments.
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
      T extends LegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LegionGroupByArgs['orderBy'] }
        : { orderBy?: LegionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Legion model
   */
  readonly fields: LegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Legion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provincia<T extends Legion$provinciaArgs<ExtArgs> = {}>(args?: Subset<T, Legion$provinciaArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Legion model
   */
  interface LegionFieldRefs {
    readonly id: FieldRef<"Legion", 'Int'>
    readonly nombre: FieldRef<"Legion", 'String'>
    readonly numeroSoldados: FieldRef<"Legion", 'Int'>
    readonly experiencia: FieldRef<"Legion", 'Int'>
    readonly moral: FieldRef<"Legion", 'Int'>
    readonly estado: FieldRef<"Legion", 'String'>
    readonly provinciaId: FieldRef<"Legion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Legion findUnique
   */
  export type LegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legion
     */
    select?: LegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legion
     */
    omit?: LegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegionInclude<ExtArgs> | null
    /**
     * Filter, which Legion to fetch.
     */
    where: LegionWhereUniqueInput
  }

  /**
   * Legion findUniqueOrThrow
   */
  export type LegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legion
     */
    select?: LegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legion
     */
    omit?: LegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegionInclude<ExtArgs> | null
    /**
     * Filter, which Legion to fetch.
     */
    where: LegionWhereUniqueInput
  }

  /**
   * Legion findFirst
   */
  export type LegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legion
     */
    select?: LegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legion
     */
    omit?: LegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegionInclude<ExtArgs> | null
    /**
     * Filter, which Legion to fetch.
     */
    where?: LegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legions to fetch.
     */
    orderBy?: LegionOrderByWithRelationInput | LegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Legions.
     */
    cursor?: LegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Legions.
     */
    distinct?: LegionScalarFieldEnum | LegionScalarFieldEnum[]
  }

  /**
   * Legion findFirstOrThrow
   */
  export type LegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legion
     */
    select?: LegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legion
     */
    omit?: LegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegionInclude<ExtArgs> | null
    /**
     * Filter, which Legion to fetch.
     */
    where?: LegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legions to fetch.
     */
    orderBy?: LegionOrderByWithRelationInput | LegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Legions.
     */
    cursor?: LegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Legions.
     */
    distinct?: LegionScalarFieldEnum | LegionScalarFieldEnum[]
  }

  /**
   * Legion findMany
   */
  export type LegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legion
     */
    select?: LegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legion
     */
    omit?: LegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegionInclude<ExtArgs> | null
    /**
     * Filter, which Legions to fetch.
     */
    where?: LegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legions to fetch.
     */
    orderBy?: LegionOrderByWithRelationInput | LegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Legions.
     */
    cursor?: LegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Legions.
     */
    distinct?: LegionScalarFieldEnum | LegionScalarFieldEnum[]
  }

  /**
   * Legion create
   */
  export type LegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legion
     */
    select?: LegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legion
     */
    omit?: LegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegionInclude<ExtArgs> | null
    /**
     * The data needed to create a Legion.
     */
    data: XOR<LegionCreateInput, LegionUncheckedCreateInput>
  }

  /**
   * Legion createMany
   */
  export type LegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Legions.
     */
    data: LegionCreateManyInput | LegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Legion createManyAndReturn
   */
  export type LegionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legion
     */
    select?: LegionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Legion
     */
    omit?: LegionOmit<ExtArgs> | null
    /**
     * The data used to create many Legions.
     */
    data: LegionCreateManyInput | LegionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Legion update
   */
  export type LegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legion
     */
    select?: LegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legion
     */
    omit?: LegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegionInclude<ExtArgs> | null
    /**
     * The data needed to update a Legion.
     */
    data: XOR<LegionUpdateInput, LegionUncheckedUpdateInput>
    /**
     * Choose, which Legion to update.
     */
    where: LegionWhereUniqueInput
  }

  /**
   * Legion updateMany
   */
  export type LegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Legions.
     */
    data: XOR<LegionUpdateManyMutationInput, LegionUncheckedUpdateManyInput>
    /**
     * Filter which Legions to update
     */
    where?: LegionWhereInput
    /**
     * Limit how many Legions to update.
     */
    limit?: number
  }

  /**
   * Legion updateManyAndReturn
   */
  export type LegionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legion
     */
    select?: LegionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Legion
     */
    omit?: LegionOmit<ExtArgs> | null
    /**
     * The data used to update Legions.
     */
    data: XOR<LegionUpdateManyMutationInput, LegionUncheckedUpdateManyInput>
    /**
     * Filter which Legions to update
     */
    where?: LegionWhereInput
    /**
     * Limit how many Legions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Legion upsert
   */
  export type LegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legion
     */
    select?: LegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legion
     */
    omit?: LegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegionInclude<ExtArgs> | null
    /**
     * The filter to search for the Legion to update in case it exists.
     */
    where: LegionWhereUniqueInput
    /**
     * In case the Legion found by the `where` argument doesn't exist, create a new Legion with this data.
     */
    create: XOR<LegionCreateInput, LegionUncheckedCreateInput>
    /**
     * In case the Legion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LegionUpdateInput, LegionUncheckedUpdateInput>
  }

  /**
   * Legion delete
   */
  export type LegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legion
     */
    select?: LegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legion
     */
    omit?: LegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegionInclude<ExtArgs> | null
    /**
     * Filter which Legion to delete.
     */
    where: LegionWhereUniqueInput
  }

  /**
   * Legion deleteMany
   */
  export type LegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Legions to delete
     */
    where?: LegionWhereInput
    /**
     * Limit how many Legions to delete.
     */
    limit?: number
  }

  /**
   * Legion.provincia
   */
  export type Legion$provinciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    where?: ProvinciaWhereInput
  }

  /**
   * Legion without action
   */
  export type LegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legion
     */
    select?: LegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Legion
     */
    omit?: LegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegionInclude<ExtArgs> | null
  }


  /**
   * Model Gobernador
   */

  export type AggregateGobernador = {
    _count: GobernadorCountAggregateOutputType | null
    _avg: GobernadorAvgAggregateOutputType | null
    _sum: GobernadorSumAggregateOutputType | null
    _min: GobernadorMinAggregateOutputType | null
    _max: GobernadorMaxAggregateOutputType | null
  }

  export type GobernadorAvgAggregateOutputType = {
    id: number | null
    edad: number | null
    nivelCompetencia: number | null
    nivelCorrupcion: number | null
    tiempoCargo: number | null
    provinciaId: number | null
  }

  export type GobernadorSumAggregateOutputType = {
    id: number | null
    edad: number | null
    nivelCompetencia: number | null
    nivelCorrupcion: number | null
    tiempoCargo: number | null
    provinciaId: number | null
  }

  export type GobernadorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    edad: number | null
    nivelCompetencia: number | null
    nivelCorrupcion: number | null
    tiempoCargo: number | null
    provinciaId: number | null
  }

  export type GobernadorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    edad: number | null
    nivelCompetencia: number | null
    nivelCorrupcion: number | null
    tiempoCargo: number | null
    provinciaId: number | null
  }

  export type GobernadorCountAggregateOutputType = {
    id: number
    nombre: number
    edad: number
    nivelCompetencia: number
    nivelCorrupcion: number
    tiempoCargo: number
    provinciaId: number
    _all: number
  }


  export type GobernadorAvgAggregateInputType = {
    id?: true
    edad?: true
    nivelCompetencia?: true
    nivelCorrupcion?: true
    tiempoCargo?: true
    provinciaId?: true
  }

  export type GobernadorSumAggregateInputType = {
    id?: true
    edad?: true
    nivelCompetencia?: true
    nivelCorrupcion?: true
    tiempoCargo?: true
    provinciaId?: true
  }

  export type GobernadorMinAggregateInputType = {
    id?: true
    nombre?: true
    edad?: true
    nivelCompetencia?: true
    nivelCorrupcion?: true
    tiempoCargo?: true
    provinciaId?: true
  }

  export type GobernadorMaxAggregateInputType = {
    id?: true
    nombre?: true
    edad?: true
    nivelCompetencia?: true
    nivelCorrupcion?: true
    tiempoCargo?: true
    provinciaId?: true
  }

  export type GobernadorCountAggregateInputType = {
    id?: true
    nombre?: true
    edad?: true
    nivelCompetencia?: true
    nivelCorrupcion?: true
    tiempoCargo?: true
    provinciaId?: true
    _all?: true
  }

  export type GobernadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gobernador to aggregate.
     */
    where?: GobernadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gobernadors to fetch.
     */
    orderBy?: GobernadorOrderByWithRelationInput | GobernadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GobernadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gobernadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gobernadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gobernadors
    **/
    _count?: true | GobernadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GobernadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GobernadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GobernadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GobernadorMaxAggregateInputType
  }

  export type GetGobernadorAggregateType<T extends GobernadorAggregateArgs> = {
        [P in keyof T & keyof AggregateGobernador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGobernador[P]>
      : GetScalarType<T[P], AggregateGobernador[P]>
  }




  export type GobernadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GobernadorWhereInput
    orderBy?: GobernadorOrderByWithAggregationInput | GobernadorOrderByWithAggregationInput[]
    by: GobernadorScalarFieldEnum[] | GobernadorScalarFieldEnum
    having?: GobernadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GobernadorCountAggregateInputType | true
    _avg?: GobernadorAvgAggregateInputType
    _sum?: GobernadorSumAggregateInputType
    _min?: GobernadorMinAggregateInputType
    _max?: GobernadorMaxAggregateInputType
  }

  export type GobernadorGroupByOutputType = {
    id: number
    nombre: string
    edad: number
    nivelCompetencia: number
    nivelCorrupcion: number
    tiempoCargo: number
    provinciaId: number | null
    _count: GobernadorCountAggregateOutputType | null
    _avg: GobernadorAvgAggregateOutputType | null
    _sum: GobernadorSumAggregateOutputType | null
    _min: GobernadorMinAggregateOutputType | null
    _max: GobernadorMaxAggregateOutputType | null
  }

  type GetGobernadorGroupByPayload<T extends GobernadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GobernadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GobernadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GobernadorGroupByOutputType[P]>
            : GetScalarType<T[P], GobernadorGroupByOutputType[P]>
        }
      >
    >


  export type GobernadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    edad?: boolean
    nivelCompetencia?: boolean
    nivelCorrupcion?: boolean
    tiempoCargo?: boolean
    provinciaId?: boolean
    provincia?: boolean | Gobernador$provinciaArgs<ExtArgs>
  }, ExtArgs["result"]["gobernador"]>

  export type GobernadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    edad?: boolean
    nivelCompetencia?: boolean
    nivelCorrupcion?: boolean
    tiempoCargo?: boolean
    provinciaId?: boolean
    provincia?: boolean | Gobernador$provinciaArgs<ExtArgs>
  }, ExtArgs["result"]["gobernador"]>

  export type GobernadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    edad?: boolean
    nivelCompetencia?: boolean
    nivelCorrupcion?: boolean
    tiempoCargo?: boolean
    provinciaId?: boolean
    provincia?: boolean | Gobernador$provinciaArgs<ExtArgs>
  }, ExtArgs["result"]["gobernador"]>

  export type GobernadorSelectScalar = {
    id?: boolean
    nombre?: boolean
    edad?: boolean
    nivelCompetencia?: boolean
    nivelCorrupcion?: boolean
    tiempoCargo?: boolean
    provinciaId?: boolean
  }

  export type GobernadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "edad" | "nivelCompetencia" | "nivelCorrupcion" | "tiempoCargo" | "provinciaId", ExtArgs["result"]["gobernador"]>
  export type GobernadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provincia?: boolean | Gobernador$provinciaArgs<ExtArgs>
  }
  export type GobernadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provincia?: boolean | Gobernador$provinciaArgs<ExtArgs>
  }
  export type GobernadorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provincia?: boolean | Gobernador$provinciaArgs<ExtArgs>
  }

  export type $GobernadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gobernador"
    objects: {
      provincia: Prisma.$ProvinciaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      edad: number
      nivelCompetencia: number
      nivelCorrupcion: number
      tiempoCargo: number
      provinciaId: number | null
    }, ExtArgs["result"]["gobernador"]>
    composites: {}
  }

  type GobernadorGetPayload<S extends boolean | null | undefined | GobernadorDefaultArgs> = $Result.GetResult<Prisma.$GobernadorPayload, S>

  type GobernadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GobernadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GobernadorCountAggregateInputType | true
    }

  export interface GobernadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gobernador'], meta: { name: 'Gobernador' } }
    /**
     * Find zero or one Gobernador that matches the filter.
     * @param {GobernadorFindUniqueArgs} args - Arguments to find a Gobernador
     * @example
     * // Get one Gobernador
     * const gobernador = await prisma.gobernador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GobernadorFindUniqueArgs>(args: SelectSubset<T, GobernadorFindUniqueArgs<ExtArgs>>): Prisma__GobernadorClient<$Result.GetResult<Prisma.$GobernadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gobernador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GobernadorFindUniqueOrThrowArgs} args - Arguments to find a Gobernador
     * @example
     * // Get one Gobernador
     * const gobernador = await prisma.gobernador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GobernadorFindUniqueOrThrowArgs>(args: SelectSubset<T, GobernadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GobernadorClient<$Result.GetResult<Prisma.$GobernadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gobernador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GobernadorFindFirstArgs} args - Arguments to find a Gobernador
     * @example
     * // Get one Gobernador
     * const gobernador = await prisma.gobernador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GobernadorFindFirstArgs>(args?: SelectSubset<T, GobernadorFindFirstArgs<ExtArgs>>): Prisma__GobernadorClient<$Result.GetResult<Prisma.$GobernadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gobernador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GobernadorFindFirstOrThrowArgs} args - Arguments to find a Gobernador
     * @example
     * // Get one Gobernador
     * const gobernador = await prisma.gobernador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GobernadorFindFirstOrThrowArgs>(args?: SelectSubset<T, GobernadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__GobernadorClient<$Result.GetResult<Prisma.$GobernadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gobernadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GobernadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gobernadors
     * const gobernadors = await prisma.gobernador.findMany()
     * 
     * // Get first 10 Gobernadors
     * const gobernadors = await prisma.gobernador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gobernadorWithIdOnly = await prisma.gobernador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GobernadorFindManyArgs>(args?: SelectSubset<T, GobernadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GobernadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gobernador.
     * @param {GobernadorCreateArgs} args - Arguments to create a Gobernador.
     * @example
     * // Create one Gobernador
     * const Gobernador = await prisma.gobernador.create({
     *   data: {
     *     // ... data to create a Gobernador
     *   }
     * })
     * 
     */
    create<T extends GobernadorCreateArgs>(args: SelectSubset<T, GobernadorCreateArgs<ExtArgs>>): Prisma__GobernadorClient<$Result.GetResult<Prisma.$GobernadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gobernadors.
     * @param {GobernadorCreateManyArgs} args - Arguments to create many Gobernadors.
     * @example
     * // Create many Gobernadors
     * const gobernador = await prisma.gobernador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GobernadorCreateManyArgs>(args?: SelectSubset<T, GobernadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gobernadors and returns the data saved in the database.
     * @param {GobernadorCreateManyAndReturnArgs} args - Arguments to create many Gobernadors.
     * @example
     * // Create many Gobernadors
     * const gobernador = await prisma.gobernador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gobernadors and only return the `id`
     * const gobernadorWithIdOnly = await prisma.gobernador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GobernadorCreateManyAndReturnArgs>(args?: SelectSubset<T, GobernadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GobernadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gobernador.
     * @param {GobernadorDeleteArgs} args - Arguments to delete one Gobernador.
     * @example
     * // Delete one Gobernador
     * const Gobernador = await prisma.gobernador.delete({
     *   where: {
     *     // ... filter to delete one Gobernador
     *   }
     * })
     * 
     */
    delete<T extends GobernadorDeleteArgs>(args: SelectSubset<T, GobernadorDeleteArgs<ExtArgs>>): Prisma__GobernadorClient<$Result.GetResult<Prisma.$GobernadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gobernador.
     * @param {GobernadorUpdateArgs} args - Arguments to update one Gobernador.
     * @example
     * // Update one Gobernador
     * const gobernador = await prisma.gobernador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GobernadorUpdateArgs>(args: SelectSubset<T, GobernadorUpdateArgs<ExtArgs>>): Prisma__GobernadorClient<$Result.GetResult<Prisma.$GobernadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gobernadors.
     * @param {GobernadorDeleteManyArgs} args - Arguments to filter Gobernadors to delete.
     * @example
     * // Delete a few Gobernadors
     * const { count } = await prisma.gobernador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GobernadorDeleteManyArgs>(args?: SelectSubset<T, GobernadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gobernadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GobernadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gobernadors
     * const gobernador = await prisma.gobernador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GobernadorUpdateManyArgs>(args: SelectSubset<T, GobernadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gobernadors and returns the data updated in the database.
     * @param {GobernadorUpdateManyAndReturnArgs} args - Arguments to update many Gobernadors.
     * @example
     * // Update many Gobernadors
     * const gobernador = await prisma.gobernador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gobernadors and only return the `id`
     * const gobernadorWithIdOnly = await prisma.gobernador.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GobernadorUpdateManyAndReturnArgs>(args: SelectSubset<T, GobernadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GobernadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gobernador.
     * @param {GobernadorUpsertArgs} args - Arguments to update or create a Gobernador.
     * @example
     * // Update or create a Gobernador
     * const gobernador = await prisma.gobernador.upsert({
     *   create: {
     *     // ... data to create a Gobernador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gobernador we want to update
     *   }
     * })
     */
    upsert<T extends GobernadorUpsertArgs>(args: SelectSubset<T, GobernadorUpsertArgs<ExtArgs>>): Prisma__GobernadorClient<$Result.GetResult<Prisma.$GobernadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gobernadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GobernadorCountArgs} args - Arguments to filter Gobernadors to count.
     * @example
     * // Count the number of Gobernadors
     * const count = await prisma.gobernador.count({
     *   where: {
     *     // ... the filter for the Gobernadors we want to count
     *   }
     * })
    **/
    count<T extends GobernadorCountArgs>(
      args?: Subset<T, GobernadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GobernadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gobernador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GobernadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GobernadorAggregateArgs>(args: Subset<T, GobernadorAggregateArgs>): Prisma.PrismaPromise<GetGobernadorAggregateType<T>>

    /**
     * Group by Gobernador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GobernadorGroupByArgs} args - Group by arguments.
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
      T extends GobernadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GobernadorGroupByArgs['orderBy'] }
        : { orderBy?: GobernadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GobernadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGobernadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gobernador model
   */
  readonly fields: GobernadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gobernador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GobernadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provincia<T extends Gobernador$provinciaArgs<ExtArgs> = {}>(args?: Subset<T, Gobernador$provinciaArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gobernador model
   */
  interface GobernadorFieldRefs {
    readonly id: FieldRef<"Gobernador", 'Int'>
    readonly nombre: FieldRef<"Gobernador", 'String'>
    readonly edad: FieldRef<"Gobernador", 'Int'>
    readonly nivelCompetencia: FieldRef<"Gobernador", 'Int'>
    readonly nivelCorrupcion: FieldRef<"Gobernador", 'Int'>
    readonly tiempoCargo: FieldRef<"Gobernador", 'Int'>
    readonly provinciaId: FieldRef<"Gobernador", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Gobernador findUnique
   */
  export type GobernadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gobernador
     */
    select?: GobernadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gobernador
     */
    omit?: GobernadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GobernadorInclude<ExtArgs> | null
    /**
     * Filter, which Gobernador to fetch.
     */
    where: GobernadorWhereUniqueInput
  }

  /**
   * Gobernador findUniqueOrThrow
   */
  export type GobernadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gobernador
     */
    select?: GobernadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gobernador
     */
    omit?: GobernadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GobernadorInclude<ExtArgs> | null
    /**
     * Filter, which Gobernador to fetch.
     */
    where: GobernadorWhereUniqueInput
  }

  /**
   * Gobernador findFirst
   */
  export type GobernadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gobernador
     */
    select?: GobernadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gobernador
     */
    omit?: GobernadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GobernadorInclude<ExtArgs> | null
    /**
     * Filter, which Gobernador to fetch.
     */
    where?: GobernadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gobernadors to fetch.
     */
    orderBy?: GobernadorOrderByWithRelationInput | GobernadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gobernadors.
     */
    cursor?: GobernadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gobernadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gobernadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gobernadors.
     */
    distinct?: GobernadorScalarFieldEnum | GobernadorScalarFieldEnum[]
  }

  /**
   * Gobernador findFirstOrThrow
   */
  export type GobernadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gobernador
     */
    select?: GobernadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gobernador
     */
    omit?: GobernadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GobernadorInclude<ExtArgs> | null
    /**
     * Filter, which Gobernador to fetch.
     */
    where?: GobernadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gobernadors to fetch.
     */
    orderBy?: GobernadorOrderByWithRelationInput | GobernadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gobernadors.
     */
    cursor?: GobernadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gobernadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gobernadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gobernadors.
     */
    distinct?: GobernadorScalarFieldEnum | GobernadorScalarFieldEnum[]
  }

  /**
   * Gobernador findMany
   */
  export type GobernadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gobernador
     */
    select?: GobernadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gobernador
     */
    omit?: GobernadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GobernadorInclude<ExtArgs> | null
    /**
     * Filter, which Gobernadors to fetch.
     */
    where?: GobernadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gobernadors to fetch.
     */
    orderBy?: GobernadorOrderByWithRelationInput | GobernadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gobernadors.
     */
    cursor?: GobernadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gobernadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gobernadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gobernadors.
     */
    distinct?: GobernadorScalarFieldEnum | GobernadorScalarFieldEnum[]
  }

  /**
   * Gobernador create
   */
  export type GobernadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gobernador
     */
    select?: GobernadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gobernador
     */
    omit?: GobernadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GobernadorInclude<ExtArgs> | null
    /**
     * The data needed to create a Gobernador.
     */
    data: XOR<GobernadorCreateInput, GobernadorUncheckedCreateInput>
  }

  /**
   * Gobernador createMany
   */
  export type GobernadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gobernadors.
     */
    data: GobernadorCreateManyInput | GobernadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gobernador createManyAndReturn
   */
  export type GobernadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gobernador
     */
    select?: GobernadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gobernador
     */
    omit?: GobernadorOmit<ExtArgs> | null
    /**
     * The data used to create many Gobernadors.
     */
    data: GobernadorCreateManyInput | GobernadorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GobernadorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gobernador update
   */
  export type GobernadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gobernador
     */
    select?: GobernadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gobernador
     */
    omit?: GobernadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GobernadorInclude<ExtArgs> | null
    /**
     * The data needed to update a Gobernador.
     */
    data: XOR<GobernadorUpdateInput, GobernadorUncheckedUpdateInput>
    /**
     * Choose, which Gobernador to update.
     */
    where: GobernadorWhereUniqueInput
  }

  /**
   * Gobernador updateMany
   */
  export type GobernadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gobernadors.
     */
    data: XOR<GobernadorUpdateManyMutationInput, GobernadorUncheckedUpdateManyInput>
    /**
     * Filter which Gobernadors to update
     */
    where?: GobernadorWhereInput
    /**
     * Limit how many Gobernadors to update.
     */
    limit?: number
  }

  /**
   * Gobernador updateManyAndReturn
   */
  export type GobernadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gobernador
     */
    select?: GobernadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gobernador
     */
    omit?: GobernadorOmit<ExtArgs> | null
    /**
     * The data used to update Gobernadors.
     */
    data: XOR<GobernadorUpdateManyMutationInput, GobernadorUncheckedUpdateManyInput>
    /**
     * Filter which Gobernadors to update
     */
    where?: GobernadorWhereInput
    /**
     * Limit how many Gobernadors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GobernadorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gobernador upsert
   */
  export type GobernadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gobernador
     */
    select?: GobernadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gobernador
     */
    omit?: GobernadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GobernadorInclude<ExtArgs> | null
    /**
     * The filter to search for the Gobernador to update in case it exists.
     */
    where: GobernadorWhereUniqueInput
    /**
     * In case the Gobernador found by the `where` argument doesn't exist, create a new Gobernador with this data.
     */
    create: XOR<GobernadorCreateInput, GobernadorUncheckedCreateInput>
    /**
     * In case the Gobernador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GobernadorUpdateInput, GobernadorUncheckedUpdateInput>
  }

  /**
   * Gobernador delete
   */
  export type GobernadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gobernador
     */
    select?: GobernadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gobernador
     */
    omit?: GobernadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GobernadorInclude<ExtArgs> | null
    /**
     * Filter which Gobernador to delete.
     */
    where: GobernadorWhereUniqueInput
  }

  /**
   * Gobernador deleteMany
   */
  export type GobernadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gobernadors to delete
     */
    where?: GobernadorWhereInput
    /**
     * Limit how many Gobernadors to delete.
     */
    limit?: number
  }

  /**
   * Gobernador.provincia
   */
  export type Gobernador$provinciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    where?: ProvinciaWhereInput
  }

  /**
   * Gobernador without action
   */
  export type GobernadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gobernador
     */
    select?: GobernadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gobernador
     */
    omit?: GobernadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GobernadorInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    contrasena: 'contrasena'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const RolScalarFieldEnum: {
    id: 'id',
    descripcion: 'descripcion'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const RolAsignadoScalarFieldEnum: {
    idra: 'idra',
    usuarioId: 'usuarioId',
    rolId: 'rolId'
  };

  export type RolAsignadoScalarFieldEnum = (typeof RolAsignadoScalarFieldEnum)[keyof typeof RolAsignadoScalarFieldEnum]


  export const ProvinciaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    lealtad: 'lealtad',
    prosperidadEconomica: 'prosperidadEconomica',
    impuestos: 'impuestos',
    conflictosInternos: 'conflictosInternos',
    riesgoRebelion: 'riesgoRebelion'
  };

  export type ProvinciaScalarFieldEnum = (typeof ProvinciaScalarFieldEnum)[keyof typeof ProvinciaScalarFieldEnum]


  export const LegionScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    numeroSoldados: 'numeroSoldados',
    experiencia: 'experiencia',
    moral: 'moral',
    estado: 'estado',
    provinciaId: 'provinciaId'
  };

  export type LegionScalarFieldEnum = (typeof LegionScalarFieldEnum)[keyof typeof LegionScalarFieldEnum]


  export const GobernadorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    edad: 'edad',
    nivelCompetencia: 'nivelCompetencia',
    nivelCorrupcion: 'nivelCorrupcion',
    tiempoCargo: 'tiempoCargo',
    provinciaId: 'provinciaId'
  };

  export type GobernadorScalarFieldEnum = (typeof GobernadorScalarFieldEnum)[keyof typeof GobernadorScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    rolesAsignados?: RolAsignadoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    contrasena?: SortOrder
    rolesAsignados?: RolAsignadoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    rolesAsignados?: RolAsignadoListRelationFilter
  }, "id">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    contrasena?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    contrasena?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type RolWhereInput = {
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    id?: IntFilter<"Rol"> | number
    descripcion?: StringFilter<"Rol"> | string
    rolesAsignados?: RolAsignadoListRelationFilter
  }

  export type RolOrderByWithRelationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    rolesAsignados?: RolAsignadoOrderByRelationAggregateInput
  }

  export type RolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    descripcion?: string
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    rolesAsignados?: RolAsignadoListRelationFilter
  }, "id" | "descripcion">

  export type RolOrderByWithAggregationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    _count?: RolCountOrderByAggregateInput
    _avg?: RolAvgOrderByAggregateInput
    _max?: RolMaxOrderByAggregateInput
    _min?: RolMinOrderByAggregateInput
    _sum?: RolSumOrderByAggregateInput
  }

  export type RolScalarWhereWithAggregatesInput = {
    AND?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    OR?: RolScalarWhereWithAggregatesInput[]
    NOT?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rol"> | number
    descripcion?: StringWithAggregatesFilter<"Rol"> | string
  }

  export type RolAsignadoWhereInput = {
    AND?: RolAsignadoWhereInput | RolAsignadoWhereInput[]
    OR?: RolAsignadoWhereInput[]
    NOT?: RolAsignadoWhereInput | RolAsignadoWhereInput[]
    idra?: IntFilter<"RolAsignado"> | number
    usuarioId?: IntFilter<"RolAsignado"> | number
    rolId?: IntFilter<"RolAsignado"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
  }

  export type RolAsignadoOrderByWithRelationInput = {
    idra?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    rol?: RolOrderByWithRelationInput
  }

  export type RolAsignadoWhereUniqueInput = Prisma.AtLeast<{
    idra?: number
    usuarioId_rolId?: RolAsignadoUsuarioIdRolIdCompoundUniqueInput
    AND?: RolAsignadoWhereInput | RolAsignadoWhereInput[]
    OR?: RolAsignadoWhereInput[]
    NOT?: RolAsignadoWhereInput | RolAsignadoWhereInput[]
    usuarioId?: IntFilter<"RolAsignado"> | number
    rolId?: IntFilter<"RolAsignado"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
  }, "idra" | "usuarioId_rolId">

  export type RolAsignadoOrderByWithAggregationInput = {
    idra?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
    _count?: RolAsignadoCountOrderByAggregateInput
    _avg?: RolAsignadoAvgOrderByAggregateInput
    _max?: RolAsignadoMaxOrderByAggregateInput
    _min?: RolAsignadoMinOrderByAggregateInput
    _sum?: RolAsignadoSumOrderByAggregateInput
  }

  export type RolAsignadoScalarWhereWithAggregatesInput = {
    AND?: RolAsignadoScalarWhereWithAggregatesInput | RolAsignadoScalarWhereWithAggregatesInput[]
    OR?: RolAsignadoScalarWhereWithAggregatesInput[]
    NOT?: RolAsignadoScalarWhereWithAggregatesInput | RolAsignadoScalarWhereWithAggregatesInput[]
    idra?: IntWithAggregatesFilter<"RolAsignado"> | number
    usuarioId?: IntWithAggregatesFilter<"RolAsignado"> | number
    rolId?: IntWithAggregatesFilter<"RolAsignado"> | number
  }

  export type ProvinciaWhereInput = {
    AND?: ProvinciaWhereInput | ProvinciaWhereInput[]
    OR?: ProvinciaWhereInput[]
    NOT?: ProvinciaWhereInput | ProvinciaWhereInput[]
    id?: IntFilter<"Provincia"> | number
    nombre?: StringFilter<"Provincia"> | string
    lealtad?: IntFilter<"Provincia"> | number
    prosperidadEconomica?: IntFilter<"Provincia"> | number
    impuestos?: IntFilter<"Provincia"> | number
    conflictosInternos?: IntFilter<"Provincia"> | number
    riesgoRebelion?: IntFilter<"Provincia"> | number
    legiones?: LegionListRelationFilter
    gobernador?: XOR<GobernadorNullableScalarRelationFilter, GobernadorWhereInput> | null
  }

  export type ProvinciaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    lealtad?: SortOrder
    prosperidadEconomica?: SortOrder
    impuestos?: SortOrder
    conflictosInternos?: SortOrder
    riesgoRebelion?: SortOrder
    legiones?: LegionOrderByRelationAggregateInput
    gobernador?: GobernadorOrderByWithRelationInput
  }

  export type ProvinciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: ProvinciaWhereInput | ProvinciaWhereInput[]
    OR?: ProvinciaWhereInput[]
    NOT?: ProvinciaWhereInput | ProvinciaWhereInput[]
    lealtad?: IntFilter<"Provincia"> | number
    prosperidadEconomica?: IntFilter<"Provincia"> | number
    impuestos?: IntFilter<"Provincia"> | number
    conflictosInternos?: IntFilter<"Provincia"> | number
    riesgoRebelion?: IntFilter<"Provincia"> | number
    legiones?: LegionListRelationFilter
    gobernador?: XOR<GobernadorNullableScalarRelationFilter, GobernadorWhereInput> | null
  }, "id" | "nombre">

  export type ProvinciaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    lealtad?: SortOrder
    prosperidadEconomica?: SortOrder
    impuestos?: SortOrder
    conflictosInternos?: SortOrder
    riesgoRebelion?: SortOrder
    _count?: ProvinciaCountOrderByAggregateInput
    _avg?: ProvinciaAvgOrderByAggregateInput
    _max?: ProvinciaMaxOrderByAggregateInput
    _min?: ProvinciaMinOrderByAggregateInput
    _sum?: ProvinciaSumOrderByAggregateInput
  }

  export type ProvinciaScalarWhereWithAggregatesInput = {
    AND?: ProvinciaScalarWhereWithAggregatesInput | ProvinciaScalarWhereWithAggregatesInput[]
    OR?: ProvinciaScalarWhereWithAggregatesInput[]
    NOT?: ProvinciaScalarWhereWithAggregatesInput | ProvinciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Provincia"> | number
    nombre?: StringWithAggregatesFilter<"Provincia"> | string
    lealtad?: IntWithAggregatesFilter<"Provincia"> | number
    prosperidadEconomica?: IntWithAggregatesFilter<"Provincia"> | number
    impuestos?: IntWithAggregatesFilter<"Provincia"> | number
    conflictosInternos?: IntWithAggregatesFilter<"Provincia"> | number
    riesgoRebelion?: IntWithAggregatesFilter<"Provincia"> | number
  }

  export type LegionWhereInput = {
    AND?: LegionWhereInput | LegionWhereInput[]
    OR?: LegionWhereInput[]
    NOT?: LegionWhereInput | LegionWhereInput[]
    id?: IntFilter<"Legion"> | number
    nombre?: StringFilter<"Legion"> | string
    numeroSoldados?: IntFilter<"Legion"> | number
    experiencia?: IntFilter<"Legion"> | number
    moral?: IntFilter<"Legion"> | number
    estado?: StringFilter<"Legion"> | string
    provinciaId?: IntNullableFilter<"Legion"> | number | null
    provincia?: XOR<ProvinciaNullableScalarRelationFilter, ProvinciaWhereInput> | null
  }

  export type LegionOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    numeroSoldados?: SortOrder
    experiencia?: SortOrder
    moral?: SortOrder
    estado?: SortOrder
    provinciaId?: SortOrderInput | SortOrder
    provincia?: ProvinciaOrderByWithRelationInput
  }

  export type LegionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: LegionWhereInput | LegionWhereInput[]
    OR?: LegionWhereInput[]
    NOT?: LegionWhereInput | LegionWhereInput[]
    numeroSoldados?: IntFilter<"Legion"> | number
    experiencia?: IntFilter<"Legion"> | number
    moral?: IntFilter<"Legion"> | number
    estado?: StringFilter<"Legion"> | string
    provinciaId?: IntNullableFilter<"Legion"> | number | null
    provincia?: XOR<ProvinciaNullableScalarRelationFilter, ProvinciaWhereInput> | null
  }, "id" | "nombre">

  export type LegionOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    numeroSoldados?: SortOrder
    experiencia?: SortOrder
    moral?: SortOrder
    estado?: SortOrder
    provinciaId?: SortOrderInput | SortOrder
    _count?: LegionCountOrderByAggregateInput
    _avg?: LegionAvgOrderByAggregateInput
    _max?: LegionMaxOrderByAggregateInput
    _min?: LegionMinOrderByAggregateInput
    _sum?: LegionSumOrderByAggregateInput
  }

  export type LegionScalarWhereWithAggregatesInput = {
    AND?: LegionScalarWhereWithAggregatesInput | LegionScalarWhereWithAggregatesInput[]
    OR?: LegionScalarWhereWithAggregatesInput[]
    NOT?: LegionScalarWhereWithAggregatesInput | LegionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Legion"> | number
    nombre?: StringWithAggregatesFilter<"Legion"> | string
    numeroSoldados?: IntWithAggregatesFilter<"Legion"> | number
    experiencia?: IntWithAggregatesFilter<"Legion"> | number
    moral?: IntWithAggregatesFilter<"Legion"> | number
    estado?: StringWithAggregatesFilter<"Legion"> | string
    provinciaId?: IntNullableWithAggregatesFilter<"Legion"> | number | null
  }

  export type GobernadorWhereInput = {
    AND?: GobernadorWhereInput | GobernadorWhereInput[]
    OR?: GobernadorWhereInput[]
    NOT?: GobernadorWhereInput | GobernadorWhereInput[]
    id?: IntFilter<"Gobernador"> | number
    nombre?: StringFilter<"Gobernador"> | string
    edad?: IntFilter<"Gobernador"> | number
    nivelCompetencia?: IntFilter<"Gobernador"> | number
    nivelCorrupcion?: IntFilter<"Gobernador"> | number
    tiempoCargo?: IntFilter<"Gobernador"> | number
    provinciaId?: IntNullableFilter<"Gobernador"> | number | null
    provincia?: XOR<ProvinciaNullableScalarRelationFilter, ProvinciaWhereInput> | null
  }

  export type GobernadorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    edad?: SortOrder
    nivelCompetencia?: SortOrder
    nivelCorrupcion?: SortOrder
    tiempoCargo?: SortOrder
    provinciaId?: SortOrderInput | SortOrder
    provincia?: ProvinciaOrderByWithRelationInput
  }

  export type GobernadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    provinciaId?: number
    AND?: GobernadorWhereInput | GobernadorWhereInput[]
    OR?: GobernadorWhereInput[]
    NOT?: GobernadorWhereInput | GobernadorWhereInput[]
    nombre?: StringFilter<"Gobernador"> | string
    edad?: IntFilter<"Gobernador"> | number
    nivelCompetencia?: IntFilter<"Gobernador"> | number
    nivelCorrupcion?: IntFilter<"Gobernador"> | number
    tiempoCargo?: IntFilter<"Gobernador"> | number
    provincia?: XOR<ProvinciaNullableScalarRelationFilter, ProvinciaWhereInput> | null
  }, "id" | "provinciaId">

  export type GobernadorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    edad?: SortOrder
    nivelCompetencia?: SortOrder
    nivelCorrupcion?: SortOrder
    tiempoCargo?: SortOrder
    provinciaId?: SortOrderInput | SortOrder
    _count?: GobernadorCountOrderByAggregateInput
    _avg?: GobernadorAvgOrderByAggregateInput
    _max?: GobernadorMaxOrderByAggregateInput
    _min?: GobernadorMinOrderByAggregateInput
    _sum?: GobernadorSumOrderByAggregateInput
  }

  export type GobernadorScalarWhereWithAggregatesInput = {
    AND?: GobernadorScalarWhereWithAggregatesInput | GobernadorScalarWhereWithAggregatesInput[]
    OR?: GobernadorScalarWhereWithAggregatesInput[]
    NOT?: GobernadorScalarWhereWithAggregatesInput | GobernadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gobernador"> | number
    nombre?: StringWithAggregatesFilter<"Gobernador"> | string
    edad?: IntWithAggregatesFilter<"Gobernador"> | number
    nivelCompetencia?: IntWithAggregatesFilter<"Gobernador"> | number
    nivelCorrupcion?: IntWithAggregatesFilter<"Gobernador"> | number
    tiempoCargo?: IntWithAggregatesFilter<"Gobernador"> | number
    provinciaId?: IntNullableWithAggregatesFilter<"Gobernador"> | number | null
  }

  export type UsuarioCreateInput = {
    nombre: string
    contrasena: string
    rolesAsignados?: RolAsignadoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    contrasena: string
    rolesAsignados?: RolAsignadoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rolesAsignados?: RolAsignadoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rolesAsignados?: RolAsignadoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    contrasena: string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
  }

  export type RolCreateInput = {
    descripcion: string
    rolesAsignados?: RolAsignadoCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateInput = {
    id?: number
    descripcion: string
    rolesAsignados?: RolAsignadoUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolUpdateInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    rolesAsignados?: RolAsignadoUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    rolesAsignados?: RolAsignadoUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolCreateManyInput = {
    id?: number
    descripcion: string
  }

  export type RolUpdateManyMutationInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type RolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type RolAsignadoCreateInput = {
    usuario: UsuarioCreateNestedOneWithoutRolesAsignadosInput
    rol: RolCreateNestedOneWithoutRolesAsignadosInput
  }

  export type RolAsignadoUncheckedCreateInput = {
    idra?: number
    usuarioId: number
    rolId: number
  }

  export type RolAsignadoUpdateInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutRolesAsignadosNestedInput
    rol?: RolUpdateOneRequiredWithoutRolesAsignadosNestedInput
  }

  export type RolAsignadoUncheckedUpdateInput = {
    idra?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type RolAsignadoCreateManyInput = {
    idra?: number
    usuarioId: number
    rolId: number
  }

  export type RolAsignadoUpdateManyMutationInput = {

  }

  export type RolAsignadoUncheckedUpdateManyInput = {
    idra?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type ProvinciaCreateInput = {
    nombre: string
    lealtad: number
    prosperidadEconomica: number
    impuestos: number
    conflictosInternos: number
    riesgoRebelion: number
    legiones?: LegionCreateNestedManyWithoutProvinciaInput
    gobernador?: GobernadorCreateNestedOneWithoutProvinciaInput
  }

  export type ProvinciaUncheckedCreateInput = {
    id?: number
    nombre: string
    lealtad: number
    prosperidadEconomica: number
    impuestos: number
    conflictosInternos: number
    riesgoRebelion: number
    legiones?: LegionUncheckedCreateNestedManyWithoutProvinciaInput
    gobernador?: GobernadorUncheckedCreateNestedOneWithoutProvinciaInput
  }

  export type ProvinciaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    lealtad?: IntFieldUpdateOperationsInput | number
    prosperidadEconomica?: IntFieldUpdateOperationsInput | number
    impuestos?: IntFieldUpdateOperationsInput | number
    conflictosInternos?: IntFieldUpdateOperationsInput | number
    riesgoRebelion?: IntFieldUpdateOperationsInput | number
    legiones?: LegionUpdateManyWithoutProvinciaNestedInput
    gobernador?: GobernadorUpdateOneWithoutProvinciaNestedInput
  }

  export type ProvinciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    lealtad?: IntFieldUpdateOperationsInput | number
    prosperidadEconomica?: IntFieldUpdateOperationsInput | number
    impuestos?: IntFieldUpdateOperationsInput | number
    conflictosInternos?: IntFieldUpdateOperationsInput | number
    riesgoRebelion?: IntFieldUpdateOperationsInput | number
    legiones?: LegionUncheckedUpdateManyWithoutProvinciaNestedInput
    gobernador?: GobernadorUncheckedUpdateOneWithoutProvinciaNestedInput
  }

  export type ProvinciaCreateManyInput = {
    id?: number
    nombre: string
    lealtad: number
    prosperidadEconomica: number
    impuestos: number
    conflictosInternos: number
    riesgoRebelion: number
  }

  export type ProvinciaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    lealtad?: IntFieldUpdateOperationsInput | number
    prosperidadEconomica?: IntFieldUpdateOperationsInput | number
    impuestos?: IntFieldUpdateOperationsInput | number
    conflictosInternos?: IntFieldUpdateOperationsInput | number
    riesgoRebelion?: IntFieldUpdateOperationsInput | number
  }

  export type ProvinciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    lealtad?: IntFieldUpdateOperationsInput | number
    prosperidadEconomica?: IntFieldUpdateOperationsInput | number
    impuestos?: IntFieldUpdateOperationsInput | number
    conflictosInternos?: IntFieldUpdateOperationsInput | number
    riesgoRebelion?: IntFieldUpdateOperationsInput | number
  }

  export type LegionCreateInput = {
    nombre: string
    numeroSoldados: number
    experiencia: number
    moral: number
    estado: string
    provincia?: ProvinciaCreateNestedOneWithoutLegionesInput
  }

  export type LegionUncheckedCreateInput = {
    id?: number
    nombre: string
    numeroSoldados: number
    experiencia: number
    moral: number
    estado: string
    provinciaId?: number | null
  }

  export type LegionUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    numeroSoldados?: IntFieldUpdateOperationsInput | number
    experiencia?: IntFieldUpdateOperationsInput | number
    moral?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    provincia?: ProvinciaUpdateOneWithoutLegionesNestedInput
  }

  export type LegionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    numeroSoldados?: IntFieldUpdateOperationsInput | number
    experiencia?: IntFieldUpdateOperationsInput | number
    moral?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    provinciaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LegionCreateManyInput = {
    id?: number
    nombre: string
    numeroSoldados: number
    experiencia: number
    moral: number
    estado: string
    provinciaId?: number | null
  }

  export type LegionUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    numeroSoldados?: IntFieldUpdateOperationsInput | number
    experiencia?: IntFieldUpdateOperationsInput | number
    moral?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type LegionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    numeroSoldados?: IntFieldUpdateOperationsInput | number
    experiencia?: IntFieldUpdateOperationsInput | number
    moral?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    provinciaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GobernadorCreateInput = {
    nombre: string
    edad: number
    nivelCompetencia: number
    nivelCorrupcion: number
    tiempoCargo: number
    provincia?: ProvinciaCreateNestedOneWithoutGobernadorInput
  }

  export type GobernadorUncheckedCreateInput = {
    id?: number
    nombre: string
    edad: number
    nivelCompetencia: number
    nivelCorrupcion: number
    tiempoCargo: number
    provinciaId?: number | null
  }

  export type GobernadorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nivelCompetencia?: IntFieldUpdateOperationsInput | number
    nivelCorrupcion?: IntFieldUpdateOperationsInput | number
    tiempoCargo?: IntFieldUpdateOperationsInput | number
    provincia?: ProvinciaUpdateOneWithoutGobernadorNestedInput
  }

  export type GobernadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nivelCompetencia?: IntFieldUpdateOperationsInput | number
    nivelCorrupcion?: IntFieldUpdateOperationsInput | number
    tiempoCargo?: IntFieldUpdateOperationsInput | number
    provinciaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GobernadorCreateManyInput = {
    id?: number
    nombre: string
    edad: number
    nivelCompetencia: number
    nivelCorrupcion: number
    tiempoCargo: number
    provinciaId?: number | null
  }

  export type GobernadorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nivelCompetencia?: IntFieldUpdateOperationsInput | number
    nivelCorrupcion?: IntFieldUpdateOperationsInput | number
    tiempoCargo?: IntFieldUpdateOperationsInput | number
  }

  export type GobernadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nivelCompetencia?: IntFieldUpdateOperationsInput | number
    nivelCorrupcion?: IntFieldUpdateOperationsInput | number
    tiempoCargo?: IntFieldUpdateOperationsInput | number
    provinciaId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type RolAsignadoListRelationFilter = {
    every?: RolAsignadoWhereInput
    some?: RolAsignadoWhereInput
    none?: RolAsignadoWhereInput
  }

  export type RolAsignadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    contrasena?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    contrasena?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    contrasena?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type RolCountOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type RolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolMaxOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type RolMinOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type RolSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type RolScalarRelationFilter = {
    is?: RolWhereInput
    isNot?: RolWhereInput
  }

  export type RolAsignadoUsuarioIdRolIdCompoundUniqueInput = {
    usuarioId: number
    rolId: number
  }

  export type RolAsignadoCountOrderByAggregateInput = {
    idra?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
  }

  export type RolAsignadoAvgOrderByAggregateInput = {
    idra?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
  }

  export type RolAsignadoMaxOrderByAggregateInput = {
    idra?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
  }

  export type RolAsignadoMinOrderByAggregateInput = {
    idra?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
  }

  export type RolAsignadoSumOrderByAggregateInput = {
    idra?: SortOrder
    usuarioId?: SortOrder
    rolId?: SortOrder
  }

  export type LegionListRelationFilter = {
    every?: LegionWhereInput
    some?: LegionWhereInput
    none?: LegionWhereInput
  }

  export type GobernadorNullableScalarRelationFilter = {
    is?: GobernadorWhereInput | null
    isNot?: GobernadorWhereInput | null
  }

  export type LegionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProvinciaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    lealtad?: SortOrder
    prosperidadEconomica?: SortOrder
    impuestos?: SortOrder
    conflictosInternos?: SortOrder
    riesgoRebelion?: SortOrder
  }

  export type ProvinciaAvgOrderByAggregateInput = {
    id?: SortOrder
    lealtad?: SortOrder
    prosperidadEconomica?: SortOrder
    impuestos?: SortOrder
    conflictosInternos?: SortOrder
    riesgoRebelion?: SortOrder
  }

  export type ProvinciaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    lealtad?: SortOrder
    prosperidadEconomica?: SortOrder
    impuestos?: SortOrder
    conflictosInternos?: SortOrder
    riesgoRebelion?: SortOrder
  }

  export type ProvinciaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    lealtad?: SortOrder
    prosperidadEconomica?: SortOrder
    impuestos?: SortOrder
    conflictosInternos?: SortOrder
    riesgoRebelion?: SortOrder
  }

  export type ProvinciaSumOrderByAggregateInput = {
    id?: SortOrder
    lealtad?: SortOrder
    prosperidadEconomica?: SortOrder
    impuestos?: SortOrder
    conflictosInternos?: SortOrder
    riesgoRebelion?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProvinciaNullableScalarRelationFilter = {
    is?: ProvinciaWhereInput | null
    isNot?: ProvinciaWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LegionCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    numeroSoldados?: SortOrder
    experiencia?: SortOrder
    moral?: SortOrder
    estado?: SortOrder
    provinciaId?: SortOrder
  }

  export type LegionAvgOrderByAggregateInput = {
    id?: SortOrder
    numeroSoldados?: SortOrder
    experiencia?: SortOrder
    moral?: SortOrder
    provinciaId?: SortOrder
  }

  export type LegionMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    numeroSoldados?: SortOrder
    experiencia?: SortOrder
    moral?: SortOrder
    estado?: SortOrder
    provinciaId?: SortOrder
  }

  export type LegionMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    numeroSoldados?: SortOrder
    experiencia?: SortOrder
    moral?: SortOrder
    estado?: SortOrder
    provinciaId?: SortOrder
  }

  export type LegionSumOrderByAggregateInput = {
    id?: SortOrder
    numeroSoldados?: SortOrder
    experiencia?: SortOrder
    moral?: SortOrder
    provinciaId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type GobernadorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    edad?: SortOrder
    nivelCompetencia?: SortOrder
    nivelCorrupcion?: SortOrder
    tiempoCargo?: SortOrder
    provinciaId?: SortOrder
  }

  export type GobernadorAvgOrderByAggregateInput = {
    id?: SortOrder
    edad?: SortOrder
    nivelCompetencia?: SortOrder
    nivelCorrupcion?: SortOrder
    tiempoCargo?: SortOrder
    provinciaId?: SortOrder
  }

  export type GobernadorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    edad?: SortOrder
    nivelCompetencia?: SortOrder
    nivelCorrupcion?: SortOrder
    tiempoCargo?: SortOrder
    provinciaId?: SortOrder
  }

  export type GobernadorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    edad?: SortOrder
    nivelCompetencia?: SortOrder
    nivelCorrupcion?: SortOrder
    tiempoCargo?: SortOrder
    provinciaId?: SortOrder
  }

  export type GobernadorSumOrderByAggregateInput = {
    id?: SortOrder
    edad?: SortOrder
    nivelCompetencia?: SortOrder
    nivelCorrupcion?: SortOrder
    tiempoCargo?: SortOrder
    provinciaId?: SortOrder
  }

  export type RolAsignadoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RolAsignadoCreateWithoutUsuarioInput, RolAsignadoUncheckedCreateWithoutUsuarioInput> | RolAsignadoCreateWithoutUsuarioInput[] | RolAsignadoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RolAsignadoCreateOrConnectWithoutUsuarioInput | RolAsignadoCreateOrConnectWithoutUsuarioInput[]
    createMany?: RolAsignadoCreateManyUsuarioInputEnvelope
    connect?: RolAsignadoWhereUniqueInput | RolAsignadoWhereUniqueInput[]
  }

  export type RolAsignadoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RolAsignadoCreateWithoutUsuarioInput, RolAsignadoUncheckedCreateWithoutUsuarioInput> | RolAsignadoCreateWithoutUsuarioInput[] | RolAsignadoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RolAsignadoCreateOrConnectWithoutUsuarioInput | RolAsignadoCreateOrConnectWithoutUsuarioInput[]
    createMany?: RolAsignadoCreateManyUsuarioInputEnvelope
    connect?: RolAsignadoWhereUniqueInput | RolAsignadoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RolAsignadoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RolAsignadoCreateWithoutUsuarioInput, RolAsignadoUncheckedCreateWithoutUsuarioInput> | RolAsignadoCreateWithoutUsuarioInput[] | RolAsignadoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RolAsignadoCreateOrConnectWithoutUsuarioInput | RolAsignadoCreateOrConnectWithoutUsuarioInput[]
    upsert?: RolAsignadoUpsertWithWhereUniqueWithoutUsuarioInput | RolAsignadoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RolAsignadoCreateManyUsuarioInputEnvelope
    set?: RolAsignadoWhereUniqueInput | RolAsignadoWhereUniqueInput[]
    disconnect?: RolAsignadoWhereUniqueInput | RolAsignadoWhereUniqueInput[]
    delete?: RolAsignadoWhereUniqueInput | RolAsignadoWhereUniqueInput[]
    connect?: RolAsignadoWhereUniqueInput | RolAsignadoWhereUniqueInput[]
    update?: RolAsignadoUpdateWithWhereUniqueWithoutUsuarioInput | RolAsignadoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RolAsignadoUpdateManyWithWhereWithoutUsuarioInput | RolAsignadoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RolAsignadoScalarWhereInput | RolAsignadoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RolAsignadoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RolAsignadoCreateWithoutUsuarioInput, RolAsignadoUncheckedCreateWithoutUsuarioInput> | RolAsignadoCreateWithoutUsuarioInput[] | RolAsignadoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RolAsignadoCreateOrConnectWithoutUsuarioInput | RolAsignadoCreateOrConnectWithoutUsuarioInput[]
    upsert?: RolAsignadoUpsertWithWhereUniqueWithoutUsuarioInput | RolAsignadoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RolAsignadoCreateManyUsuarioInputEnvelope
    set?: RolAsignadoWhereUniqueInput | RolAsignadoWhereUniqueInput[]
    disconnect?: RolAsignadoWhereUniqueInput | RolAsignadoWhereUniqueInput[]
    delete?: RolAsignadoWhereUniqueInput | RolAsignadoWhereUniqueInput[]
    connect?: RolAsignadoWhereUniqueInput | RolAsignadoWhereUniqueInput[]
    update?: RolAsignadoUpdateWithWhereUniqueWithoutUsuarioInput | RolAsignadoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RolAsignadoUpdateManyWithWhereWithoutUsuarioInput | RolAsignadoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RolAsignadoScalarWhereInput | RolAsignadoScalarWhereInput[]
  }

  export type RolAsignadoCreateNestedManyWithoutRolInput = {
    create?: XOR<RolAsignadoCreateWithoutRolInput, RolAsignadoUncheckedCreateWithoutRolInput> | RolAsignadoCreateWithoutRolInput[] | RolAsignadoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolAsignadoCreateOrConnectWithoutRolInput | RolAsignadoCreateOrConnectWithoutRolInput[]
    createMany?: RolAsignadoCreateManyRolInputEnvelope
    connect?: RolAsignadoWhereUniqueInput | RolAsignadoWhereUniqueInput[]
  }

  export type RolAsignadoUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<RolAsignadoCreateWithoutRolInput, RolAsignadoUncheckedCreateWithoutRolInput> | RolAsignadoCreateWithoutRolInput[] | RolAsignadoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolAsignadoCreateOrConnectWithoutRolInput | RolAsignadoCreateOrConnectWithoutRolInput[]
    createMany?: RolAsignadoCreateManyRolInputEnvelope
    connect?: RolAsignadoWhereUniqueInput | RolAsignadoWhereUniqueInput[]
  }

  export type RolAsignadoUpdateManyWithoutRolNestedInput = {
    create?: XOR<RolAsignadoCreateWithoutRolInput, RolAsignadoUncheckedCreateWithoutRolInput> | RolAsignadoCreateWithoutRolInput[] | RolAsignadoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolAsignadoCreateOrConnectWithoutRolInput | RolAsignadoCreateOrConnectWithoutRolInput[]
    upsert?: RolAsignadoUpsertWithWhereUniqueWithoutRolInput | RolAsignadoUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: RolAsignadoCreateManyRolInputEnvelope
    set?: RolAsignadoWhereUniqueInput | RolAsignadoWhereUniqueInput[]
    disconnect?: RolAsignadoWhereUniqueInput | RolAsignadoWhereUniqueInput[]
    delete?: RolAsignadoWhereUniqueInput | RolAsignadoWhereUniqueInput[]
    connect?: RolAsignadoWhereUniqueInput | RolAsignadoWhereUniqueInput[]
    update?: RolAsignadoUpdateWithWhereUniqueWithoutRolInput | RolAsignadoUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: RolAsignadoUpdateManyWithWhereWithoutRolInput | RolAsignadoUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: RolAsignadoScalarWhereInput | RolAsignadoScalarWhereInput[]
  }

  export type RolAsignadoUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<RolAsignadoCreateWithoutRolInput, RolAsignadoUncheckedCreateWithoutRolInput> | RolAsignadoCreateWithoutRolInput[] | RolAsignadoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolAsignadoCreateOrConnectWithoutRolInput | RolAsignadoCreateOrConnectWithoutRolInput[]
    upsert?: RolAsignadoUpsertWithWhereUniqueWithoutRolInput | RolAsignadoUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: RolAsignadoCreateManyRolInputEnvelope
    set?: RolAsignadoWhereUniqueInput | RolAsignadoWhereUniqueInput[]
    disconnect?: RolAsignadoWhereUniqueInput | RolAsignadoWhereUniqueInput[]
    delete?: RolAsignadoWhereUniqueInput | RolAsignadoWhereUniqueInput[]
    connect?: RolAsignadoWhereUniqueInput | RolAsignadoWhereUniqueInput[]
    update?: RolAsignadoUpdateWithWhereUniqueWithoutRolInput | RolAsignadoUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: RolAsignadoUpdateManyWithWhereWithoutRolInput | RolAsignadoUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: RolAsignadoScalarWhereInput | RolAsignadoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutRolesAsignadosInput = {
    create?: XOR<UsuarioCreateWithoutRolesAsignadosInput, UsuarioUncheckedCreateWithoutRolesAsignadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolesAsignadosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type RolCreateNestedOneWithoutRolesAsignadosInput = {
    create?: XOR<RolCreateWithoutRolesAsignadosInput, RolUncheckedCreateWithoutRolesAsignadosInput>
    connectOrCreate?: RolCreateOrConnectWithoutRolesAsignadosInput
    connect?: RolWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutRolesAsignadosNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolesAsignadosInput, UsuarioUncheckedCreateWithoutRolesAsignadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolesAsignadosInput
    upsert?: UsuarioUpsertWithoutRolesAsignadosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRolesAsignadosInput, UsuarioUpdateWithoutRolesAsignadosInput>, UsuarioUncheckedUpdateWithoutRolesAsignadosInput>
  }

  export type RolUpdateOneRequiredWithoutRolesAsignadosNestedInput = {
    create?: XOR<RolCreateWithoutRolesAsignadosInput, RolUncheckedCreateWithoutRolesAsignadosInput>
    connectOrCreate?: RolCreateOrConnectWithoutRolesAsignadosInput
    upsert?: RolUpsertWithoutRolesAsignadosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutRolesAsignadosInput, RolUpdateWithoutRolesAsignadosInput>, RolUncheckedUpdateWithoutRolesAsignadosInput>
  }

  export type LegionCreateNestedManyWithoutProvinciaInput = {
    create?: XOR<LegionCreateWithoutProvinciaInput, LegionUncheckedCreateWithoutProvinciaInput> | LegionCreateWithoutProvinciaInput[] | LegionUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: LegionCreateOrConnectWithoutProvinciaInput | LegionCreateOrConnectWithoutProvinciaInput[]
    createMany?: LegionCreateManyProvinciaInputEnvelope
    connect?: LegionWhereUniqueInput | LegionWhereUniqueInput[]
  }

  export type GobernadorCreateNestedOneWithoutProvinciaInput = {
    create?: XOR<GobernadorCreateWithoutProvinciaInput, GobernadorUncheckedCreateWithoutProvinciaInput>
    connectOrCreate?: GobernadorCreateOrConnectWithoutProvinciaInput
    connect?: GobernadorWhereUniqueInput
  }

  export type LegionUncheckedCreateNestedManyWithoutProvinciaInput = {
    create?: XOR<LegionCreateWithoutProvinciaInput, LegionUncheckedCreateWithoutProvinciaInput> | LegionCreateWithoutProvinciaInput[] | LegionUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: LegionCreateOrConnectWithoutProvinciaInput | LegionCreateOrConnectWithoutProvinciaInput[]
    createMany?: LegionCreateManyProvinciaInputEnvelope
    connect?: LegionWhereUniqueInput | LegionWhereUniqueInput[]
  }

  export type GobernadorUncheckedCreateNestedOneWithoutProvinciaInput = {
    create?: XOR<GobernadorCreateWithoutProvinciaInput, GobernadorUncheckedCreateWithoutProvinciaInput>
    connectOrCreate?: GobernadorCreateOrConnectWithoutProvinciaInput
    connect?: GobernadorWhereUniqueInput
  }

  export type LegionUpdateManyWithoutProvinciaNestedInput = {
    create?: XOR<LegionCreateWithoutProvinciaInput, LegionUncheckedCreateWithoutProvinciaInput> | LegionCreateWithoutProvinciaInput[] | LegionUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: LegionCreateOrConnectWithoutProvinciaInput | LegionCreateOrConnectWithoutProvinciaInput[]
    upsert?: LegionUpsertWithWhereUniqueWithoutProvinciaInput | LegionUpsertWithWhereUniqueWithoutProvinciaInput[]
    createMany?: LegionCreateManyProvinciaInputEnvelope
    set?: LegionWhereUniqueInput | LegionWhereUniqueInput[]
    disconnect?: LegionWhereUniqueInput | LegionWhereUniqueInput[]
    delete?: LegionWhereUniqueInput | LegionWhereUniqueInput[]
    connect?: LegionWhereUniqueInput | LegionWhereUniqueInput[]
    update?: LegionUpdateWithWhereUniqueWithoutProvinciaInput | LegionUpdateWithWhereUniqueWithoutProvinciaInput[]
    updateMany?: LegionUpdateManyWithWhereWithoutProvinciaInput | LegionUpdateManyWithWhereWithoutProvinciaInput[]
    deleteMany?: LegionScalarWhereInput | LegionScalarWhereInput[]
  }

  export type GobernadorUpdateOneWithoutProvinciaNestedInput = {
    create?: XOR<GobernadorCreateWithoutProvinciaInput, GobernadorUncheckedCreateWithoutProvinciaInput>
    connectOrCreate?: GobernadorCreateOrConnectWithoutProvinciaInput
    upsert?: GobernadorUpsertWithoutProvinciaInput
    disconnect?: GobernadorWhereInput | boolean
    delete?: GobernadorWhereInput | boolean
    connect?: GobernadorWhereUniqueInput
    update?: XOR<XOR<GobernadorUpdateToOneWithWhereWithoutProvinciaInput, GobernadorUpdateWithoutProvinciaInput>, GobernadorUncheckedUpdateWithoutProvinciaInput>
  }

  export type LegionUncheckedUpdateManyWithoutProvinciaNestedInput = {
    create?: XOR<LegionCreateWithoutProvinciaInput, LegionUncheckedCreateWithoutProvinciaInput> | LegionCreateWithoutProvinciaInput[] | LegionUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: LegionCreateOrConnectWithoutProvinciaInput | LegionCreateOrConnectWithoutProvinciaInput[]
    upsert?: LegionUpsertWithWhereUniqueWithoutProvinciaInput | LegionUpsertWithWhereUniqueWithoutProvinciaInput[]
    createMany?: LegionCreateManyProvinciaInputEnvelope
    set?: LegionWhereUniqueInput | LegionWhereUniqueInput[]
    disconnect?: LegionWhereUniqueInput | LegionWhereUniqueInput[]
    delete?: LegionWhereUniqueInput | LegionWhereUniqueInput[]
    connect?: LegionWhereUniqueInput | LegionWhereUniqueInput[]
    update?: LegionUpdateWithWhereUniqueWithoutProvinciaInput | LegionUpdateWithWhereUniqueWithoutProvinciaInput[]
    updateMany?: LegionUpdateManyWithWhereWithoutProvinciaInput | LegionUpdateManyWithWhereWithoutProvinciaInput[]
    deleteMany?: LegionScalarWhereInput | LegionScalarWhereInput[]
  }

  export type GobernadorUncheckedUpdateOneWithoutProvinciaNestedInput = {
    create?: XOR<GobernadorCreateWithoutProvinciaInput, GobernadorUncheckedCreateWithoutProvinciaInput>
    connectOrCreate?: GobernadorCreateOrConnectWithoutProvinciaInput
    upsert?: GobernadorUpsertWithoutProvinciaInput
    disconnect?: GobernadorWhereInput | boolean
    delete?: GobernadorWhereInput | boolean
    connect?: GobernadorWhereUniqueInput
    update?: XOR<XOR<GobernadorUpdateToOneWithWhereWithoutProvinciaInput, GobernadorUpdateWithoutProvinciaInput>, GobernadorUncheckedUpdateWithoutProvinciaInput>
  }

  export type ProvinciaCreateNestedOneWithoutLegionesInput = {
    create?: XOR<ProvinciaCreateWithoutLegionesInput, ProvinciaUncheckedCreateWithoutLegionesInput>
    connectOrCreate?: ProvinciaCreateOrConnectWithoutLegionesInput
    connect?: ProvinciaWhereUniqueInput
  }

  export type ProvinciaUpdateOneWithoutLegionesNestedInput = {
    create?: XOR<ProvinciaCreateWithoutLegionesInput, ProvinciaUncheckedCreateWithoutLegionesInput>
    connectOrCreate?: ProvinciaCreateOrConnectWithoutLegionesInput
    upsert?: ProvinciaUpsertWithoutLegionesInput
    disconnect?: ProvinciaWhereInput | boolean
    delete?: ProvinciaWhereInput | boolean
    connect?: ProvinciaWhereUniqueInput
    update?: XOR<XOR<ProvinciaUpdateToOneWithWhereWithoutLegionesInput, ProvinciaUpdateWithoutLegionesInput>, ProvinciaUncheckedUpdateWithoutLegionesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProvinciaCreateNestedOneWithoutGobernadorInput = {
    create?: XOR<ProvinciaCreateWithoutGobernadorInput, ProvinciaUncheckedCreateWithoutGobernadorInput>
    connectOrCreate?: ProvinciaCreateOrConnectWithoutGobernadorInput
    connect?: ProvinciaWhereUniqueInput
  }

  export type ProvinciaUpdateOneWithoutGobernadorNestedInput = {
    create?: XOR<ProvinciaCreateWithoutGobernadorInput, ProvinciaUncheckedCreateWithoutGobernadorInput>
    connectOrCreate?: ProvinciaCreateOrConnectWithoutGobernadorInput
    upsert?: ProvinciaUpsertWithoutGobernadorInput
    disconnect?: ProvinciaWhereInput | boolean
    delete?: ProvinciaWhereInput | boolean
    connect?: ProvinciaWhereUniqueInput
    update?: XOR<XOR<ProvinciaUpdateToOneWithWhereWithoutGobernadorInput, ProvinciaUpdateWithoutGobernadorInput>, ProvinciaUncheckedUpdateWithoutGobernadorInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RolAsignadoCreateWithoutUsuarioInput = {
    rol: RolCreateNestedOneWithoutRolesAsignadosInput
  }

  export type RolAsignadoUncheckedCreateWithoutUsuarioInput = {
    idra?: number
    rolId: number
  }

  export type RolAsignadoCreateOrConnectWithoutUsuarioInput = {
    where: RolAsignadoWhereUniqueInput
    create: XOR<RolAsignadoCreateWithoutUsuarioInput, RolAsignadoUncheckedCreateWithoutUsuarioInput>
  }

  export type RolAsignadoCreateManyUsuarioInputEnvelope = {
    data: RolAsignadoCreateManyUsuarioInput | RolAsignadoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type RolAsignadoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RolAsignadoWhereUniqueInput
    update: XOR<RolAsignadoUpdateWithoutUsuarioInput, RolAsignadoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RolAsignadoCreateWithoutUsuarioInput, RolAsignadoUncheckedCreateWithoutUsuarioInput>
  }

  export type RolAsignadoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RolAsignadoWhereUniqueInput
    data: XOR<RolAsignadoUpdateWithoutUsuarioInput, RolAsignadoUncheckedUpdateWithoutUsuarioInput>
  }

  export type RolAsignadoUpdateManyWithWhereWithoutUsuarioInput = {
    where: RolAsignadoScalarWhereInput
    data: XOR<RolAsignadoUpdateManyMutationInput, RolAsignadoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type RolAsignadoScalarWhereInput = {
    AND?: RolAsignadoScalarWhereInput | RolAsignadoScalarWhereInput[]
    OR?: RolAsignadoScalarWhereInput[]
    NOT?: RolAsignadoScalarWhereInput | RolAsignadoScalarWhereInput[]
    idra?: IntFilter<"RolAsignado"> | number
    usuarioId?: IntFilter<"RolAsignado"> | number
    rolId?: IntFilter<"RolAsignado"> | number
  }

  export type RolAsignadoCreateWithoutRolInput = {
    usuario: UsuarioCreateNestedOneWithoutRolesAsignadosInput
  }

  export type RolAsignadoUncheckedCreateWithoutRolInput = {
    idra?: number
    usuarioId: number
  }

  export type RolAsignadoCreateOrConnectWithoutRolInput = {
    where: RolAsignadoWhereUniqueInput
    create: XOR<RolAsignadoCreateWithoutRolInput, RolAsignadoUncheckedCreateWithoutRolInput>
  }

  export type RolAsignadoCreateManyRolInputEnvelope = {
    data: RolAsignadoCreateManyRolInput | RolAsignadoCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type RolAsignadoUpsertWithWhereUniqueWithoutRolInput = {
    where: RolAsignadoWhereUniqueInput
    update: XOR<RolAsignadoUpdateWithoutRolInput, RolAsignadoUncheckedUpdateWithoutRolInput>
    create: XOR<RolAsignadoCreateWithoutRolInput, RolAsignadoUncheckedCreateWithoutRolInput>
  }

  export type RolAsignadoUpdateWithWhereUniqueWithoutRolInput = {
    where: RolAsignadoWhereUniqueInput
    data: XOR<RolAsignadoUpdateWithoutRolInput, RolAsignadoUncheckedUpdateWithoutRolInput>
  }

  export type RolAsignadoUpdateManyWithWhereWithoutRolInput = {
    where: RolAsignadoScalarWhereInput
    data: XOR<RolAsignadoUpdateManyMutationInput, RolAsignadoUncheckedUpdateManyWithoutRolInput>
  }

  export type UsuarioCreateWithoutRolesAsignadosInput = {
    nombre: string
    contrasena: string
  }

  export type UsuarioUncheckedCreateWithoutRolesAsignadosInput = {
    id?: number
    nombre: string
    contrasena: string
  }

  export type UsuarioCreateOrConnectWithoutRolesAsignadosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRolesAsignadosInput, UsuarioUncheckedCreateWithoutRolesAsignadosInput>
  }

  export type RolCreateWithoutRolesAsignadosInput = {
    descripcion: string
  }

  export type RolUncheckedCreateWithoutRolesAsignadosInput = {
    id?: number
    descripcion: string
  }

  export type RolCreateOrConnectWithoutRolesAsignadosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutRolesAsignadosInput, RolUncheckedCreateWithoutRolesAsignadosInput>
  }

  export type UsuarioUpsertWithoutRolesAsignadosInput = {
    update: XOR<UsuarioUpdateWithoutRolesAsignadosInput, UsuarioUncheckedUpdateWithoutRolesAsignadosInput>
    create: XOR<UsuarioCreateWithoutRolesAsignadosInput, UsuarioUncheckedCreateWithoutRolesAsignadosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRolesAsignadosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRolesAsignadosInput, UsuarioUncheckedUpdateWithoutRolesAsignadosInput>
  }

  export type UsuarioUpdateWithoutRolesAsignadosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateWithoutRolesAsignadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
  }

  export type RolUpsertWithoutRolesAsignadosInput = {
    update: XOR<RolUpdateWithoutRolesAsignadosInput, RolUncheckedUpdateWithoutRolesAsignadosInput>
    create: XOR<RolCreateWithoutRolesAsignadosInput, RolUncheckedCreateWithoutRolesAsignadosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutRolesAsignadosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutRolesAsignadosInput, RolUncheckedUpdateWithoutRolesAsignadosInput>
  }

  export type RolUpdateWithoutRolesAsignadosInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type RolUncheckedUpdateWithoutRolesAsignadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type LegionCreateWithoutProvinciaInput = {
    nombre: string
    numeroSoldados: number
    experiencia: number
    moral: number
    estado: string
  }

  export type LegionUncheckedCreateWithoutProvinciaInput = {
    id?: number
    nombre: string
    numeroSoldados: number
    experiencia: number
    moral: number
    estado: string
  }

  export type LegionCreateOrConnectWithoutProvinciaInput = {
    where: LegionWhereUniqueInput
    create: XOR<LegionCreateWithoutProvinciaInput, LegionUncheckedCreateWithoutProvinciaInput>
  }

  export type LegionCreateManyProvinciaInputEnvelope = {
    data: LegionCreateManyProvinciaInput | LegionCreateManyProvinciaInput[]
    skipDuplicates?: boolean
  }

  export type GobernadorCreateWithoutProvinciaInput = {
    nombre: string
    edad: number
    nivelCompetencia: number
    nivelCorrupcion: number
    tiempoCargo: number
  }

  export type GobernadorUncheckedCreateWithoutProvinciaInput = {
    id?: number
    nombre: string
    edad: number
    nivelCompetencia: number
    nivelCorrupcion: number
    tiempoCargo: number
  }

  export type GobernadorCreateOrConnectWithoutProvinciaInput = {
    where: GobernadorWhereUniqueInput
    create: XOR<GobernadorCreateWithoutProvinciaInput, GobernadorUncheckedCreateWithoutProvinciaInput>
  }

  export type LegionUpsertWithWhereUniqueWithoutProvinciaInput = {
    where: LegionWhereUniqueInput
    update: XOR<LegionUpdateWithoutProvinciaInput, LegionUncheckedUpdateWithoutProvinciaInput>
    create: XOR<LegionCreateWithoutProvinciaInput, LegionUncheckedCreateWithoutProvinciaInput>
  }

  export type LegionUpdateWithWhereUniqueWithoutProvinciaInput = {
    where: LegionWhereUniqueInput
    data: XOR<LegionUpdateWithoutProvinciaInput, LegionUncheckedUpdateWithoutProvinciaInput>
  }

  export type LegionUpdateManyWithWhereWithoutProvinciaInput = {
    where: LegionScalarWhereInput
    data: XOR<LegionUpdateManyMutationInput, LegionUncheckedUpdateManyWithoutProvinciaInput>
  }

  export type LegionScalarWhereInput = {
    AND?: LegionScalarWhereInput | LegionScalarWhereInput[]
    OR?: LegionScalarWhereInput[]
    NOT?: LegionScalarWhereInput | LegionScalarWhereInput[]
    id?: IntFilter<"Legion"> | number
    nombre?: StringFilter<"Legion"> | string
    numeroSoldados?: IntFilter<"Legion"> | number
    experiencia?: IntFilter<"Legion"> | number
    moral?: IntFilter<"Legion"> | number
    estado?: StringFilter<"Legion"> | string
    provinciaId?: IntNullableFilter<"Legion"> | number | null
  }

  export type GobernadorUpsertWithoutProvinciaInput = {
    update: XOR<GobernadorUpdateWithoutProvinciaInput, GobernadorUncheckedUpdateWithoutProvinciaInput>
    create: XOR<GobernadorCreateWithoutProvinciaInput, GobernadorUncheckedCreateWithoutProvinciaInput>
    where?: GobernadorWhereInput
  }

  export type GobernadorUpdateToOneWithWhereWithoutProvinciaInput = {
    where?: GobernadorWhereInput
    data: XOR<GobernadorUpdateWithoutProvinciaInput, GobernadorUncheckedUpdateWithoutProvinciaInput>
  }

  export type GobernadorUpdateWithoutProvinciaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nivelCompetencia?: IntFieldUpdateOperationsInput | number
    nivelCorrupcion?: IntFieldUpdateOperationsInput | number
    tiempoCargo?: IntFieldUpdateOperationsInput | number
  }

  export type GobernadorUncheckedUpdateWithoutProvinciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    nivelCompetencia?: IntFieldUpdateOperationsInput | number
    nivelCorrupcion?: IntFieldUpdateOperationsInput | number
    tiempoCargo?: IntFieldUpdateOperationsInput | number
  }

  export type ProvinciaCreateWithoutLegionesInput = {
    nombre: string
    lealtad: number
    prosperidadEconomica: number
    impuestos: number
    conflictosInternos: number
    riesgoRebelion: number
    gobernador?: GobernadorCreateNestedOneWithoutProvinciaInput
  }

  export type ProvinciaUncheckedCreateWithoutLegionesInput = {
    id?: number
    nombre: string
    lealtad: number
    prosperidadEconomica: number
    impuestos: number
    conflictosInternos: number
    riesgoRebelion: number
    gobernador?: GobernadorUncheckedCreateNestedOneWithoutProvinciaInput
  }

  export type ProvinciaCreateOrConnectWithoutLegionesInput = {
    where: ProvinciaWhereUniqueInput
    create: XOR<ProvinciaCreateWithoutLegionesInput, ProvinciaUncheckedCreateWithoutLegionesInput>
  }

  export type ProvinciaUpsertWithoutLegionesInput = {
    update: XOR<ProvinciaUpdateWithoutLegionesInput, ProvinciaUncheckedUpdateWithoutLegionesInput>
    create: XOR<ProvinciaCreateWithoutLegionesInput, ProvinciaUncheckedCreateWithoutLegionesInput>
    where?: ProvinciaWhereInput
  }

  export type ProvinciaUpdateToOneWithWhereWithoutLegionesInput = {
    where?: ProvinciaWhereInput
    data: XOR<ProvinciaUpdateWithoutLegionesInput, ProvinciaUncheckedUpdateWithoutLegionesInput>
  }

  export type ProvinciaUpdateWithoutLegionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    lealtad?: IntFieldUpdateOperationsInput | number
    prosperidadEconomica?: IntFieldUpdateOperationsInput | number
    impuestos?: IntFieldUpdateOperationsInput | number
    conflictosInternos?: IntFieldUpdateOperationsInput | number
    riesgoRebelion?: IntFieldUpdateOperationsInput | number
    gobernador?: GobernadorUpdateOneWithoutProvinciaNestedInput
  }

  export type ProvinciaUncheckedUpdateWithoutLegionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    lealtad?: IntFieldUpdateOperationsInput | number
    prosperidadEconomica?: IntFieldUpdateOperationsInput | number
    impuestos?: IntFieldUpdateOperationsInput | number
    conflictosInternos?: IntFieldUpdateOperationsInput | number
    riesgoRebelion?: IntFieldUpdateOperationsInput | number
    gobernador?: GobernadorUncheckedUpdateOneWithoutProvinciaNestedInput
  }

  export type ProvinciaCreateWithoutGobernadorInput = {
    nombre: string
    lealtad: number
    prosperidadEconomica: number
    impuestos: number
    conflictosInternos: number
    riesgoRebelion: number
    legiones?: LegionCreateNestedManyWithoutProvinciaInput
  }

  export type ProvinciaUncheckedCreateWithoutGobernadorInput = {
    id?: number
    nombre: string
    lealtad: number
    prosperidadEconomica: number
    impuestos: number
    conflictosInternos: number
    riesgoRebelion: number
    legiones?: LegionUncheckedCreateNestedManyWithoutProvinciaInput
  }

  export type ProvinciaCreateOrConnectWithoutGobernadorInput = {
    where: ProvinciaWhereUniqueInput
    create: XOR<ProvinciaCreateWithoutGobernadorInput, ProvinciaUncheckedCreateWithoutGobernadorInput>
  }

  export type ProvinciaUpsertWithoutGobernadorInput = {
    update: XOR<ProvinciaUpdateWithoutGobernadorInput, ProvinciaUncheckedUpdateWithoutGobernadorInput>
    create: XOR<ProvinciaCreateWithoutGobernadorInput, ProvinciaUncheckedCreateWithoutGobernadorInput>
    where?: ProvinciaWhereInput
  }

  export type ProvinciaUpdateToOneWithWhereWithoutGobernadorInput = {
    where?: ProvinciaWhereInput
    data: XOR<ProvinciaUpdateWithoutGobernadorInput, ProvinciaUncheckedUpdateWithoutGobernadorInput>
  }

  export type ProvinciaUpdateWithoutGobernadorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    lealtad?: IntFieldUpdateOperationsInput | number
    prosperidadEconomica?: IntFieldUpdateOperationsInput | number
    impuestos?: IntFieldUpdateOperationsInput | number
    conflictosInternos?: IntFieldUpdateOperationsInput | number
    riesgoRebelion?: IntFieldUpdateOperationsInput | number
    legiones?: LegionUpdateManyWithoutProvinciaNestedInput
  }

  export type ProvinciaUncheckedUpdateWithoutGobernadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    lealtad?: IntFieldUpdateOperationsInput | number
    prosperidadEconomica?: IntFieldUpdateOperationsInput | number
    impuestos?: IntFieldUpdateOperationsInput | number
    conflictosInternos?: IntFieldUpdateOperationsInput | number
    riesgoRebelion?: IntFieldUpdateOperationsInput | number
    legiones?: LegionUncheckedUpdateManyWithoutProvinciaNestedInput
  }

  export type RolAsignadoCreateManyUsuarioInput = {
    idra?: number
    rolId: number
  }

  export type RolAsignadoUpdateWithoutUsuarioInput = {
    rol?: RolUpdateOneRequiredWithoutRolesAsignadosNestedInput
  }

  export type RolAsignadoUncheckedUpdateWithoutUsuarioInput = {
    idra?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type RolAsignadoUncheckedUpdateManyWithoutUsuarioInput = {
    idra?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type RolAsignadoCreateManyRolInput = {
    idra?: number
    usuarioId: number
  }

  export type RolAsignadoUpdateWithoutRolInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutRolesAsignadosNestedInput
  }

  export type RolAsignadoUncheckedUpdateWithoutRolInput = {
    idra?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type RolAsignadoUncheckedUpdateManyWithoutRolInput = {
    idra?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type LegionCreateManyProvinciaInput = {
    id?: number
    nombre: string
    numeroSoldados: number
    experiencia: number
    moral: number
    estado: string
  }

  export type LegionUpdateWithoutProvinciaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    numeroSoldados?: IntFieldUpdateOperationsInput | number
    experiencia?: IntFieldUpdateOperationsInput | number
    moral?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type LegionUncheckedUpdateWithoutProvinciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    numeroSoldados?: IntFieldUpdateOperationsInput | number
    experiencia?: IntFieldUpdateOperationsInput | number
    moral?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type LegionUncheckedUpdateManyWithoutProvinciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    numeroSoldados?: IntFieldUpdateOperationsInput | number
    experiencia?: IntFieldUpdateOperationsInput | number
    moral?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
  }



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