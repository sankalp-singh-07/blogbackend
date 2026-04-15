import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'

export default defineConfig({
  connection: 'pg',

  connections: {
    pg: {
      client: 'pg',
      connection: {
        host: env.get('DB_HOST'),
        port: env.get('DB_PORT') ? Number(env.get('DB_PORT')) : undefined,
        user: env.get('DB_USER'),
        password: env.get('DB_PASSWORD'),
        database: env.get('DB_NAME'),

        ssl: env.get('DB_SSL') ? { rejectUnauthorized: false } : false,
      },
    },
  },
})
