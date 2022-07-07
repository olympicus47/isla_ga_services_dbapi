import { MikroOrmModuleOptions as Options } from '@mikro-orm/nestjs';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { LoadStrategy } from '@mikro-orm/core';
import 'dotenv/config';

const options: Options = {
  type: 'mysql',
  clientUrl: `${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  debug: true,
  loadStrategy: LoadStrategy.JOINED,
  // autoLoadEntities: true,
  highlighter: new SqlHighlighter(),
  metadataProvider: TsMorphMetadataProvider,
  registerRequestContext: false,
  migrations: {
    path: 'dist/migrations',
    pathTs: 'src/migrations',
  },
};

export default options;
