// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || "pokemonsearch",
      user: process.env.DB_USERNAME || "user",
      password: process.env.DB_PASSWORD || "user",
    },
    migrations: {
      directory: "./migrations",
      tableName: "knex_migrations",
    },
  },
  staging: {
    client: "pg",
    connection: {
      host: process.env.RENDER_DB_HOST || "dpg-chrfm0rhp8ud4n2opacg-a",
      user: process.env.RENDER_DB_USER || "user",
      password:
        process.env.RENDER_DB_PASSWORD || "I0VTHlppaD54WFgzwDvFCL5Ryh2ZMXeA",
      database: process.env.RENDER_DB_NAME || "pokemonsearch_dyfh",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./migrations",
      tableName: "knex_migrations",
    },
  },
  production: {
    client: "pg",
    connection: DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./migrations",
      tableName: "knex_migrations",
    },
  },
};

// require("dotenv").config({
//   path: "../.env",
// });
// // aaaa
// module.exports = {
//   client: "pg",
//   connection: {
//     host: process.env.DB_HOST || "127.0.0.1",
//     port: process.env.DB_PORT || 5432,
//     database: process.env.DB_NAME || "quotes",
//     user: process.env.DB_USERNAME || "dig",
//     password: process.env.DB_PASSWORD || "bekind",
//   },
//   migrations: {
//     tableName: "knex_migrations",
//   },
// };
