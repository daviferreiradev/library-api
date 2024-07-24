import { DataSource } from 'typeorm';
import env from '@config/env';
import * as path from 'node:path';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const options: PostgresConnectionOptions = {
  type: 'postgres',
  host: env().database.host,
  port: env().database.port,
  username: env().database.user,
  password: env().database.password,
  database: env().database.name,
  synchronize: false,
  logging: ['error'],
  entities: [
    path.join(__dirname, '..', '..', 'shared', 'entities', '*.entity.{ts,js}'),
  ],
  migrations: [
    path.join(
      __dirname,
      '..',
      '..',
      'shared',
      'infra',
      'typeorm',
      'migrations',
      '*{.js,.ts}',
    ),
  ],
  // subscribers: [
  //   path.join(
  //     __dirname,
  //     '..',
  //     '..',
  //     'shared',
  //     'entities',
  //     'subscribers',
  //     '*.entity.subscriber.{ts,js}',
  //   ),
  // ],
};

export const dataSource = new DataSource({ ...options });