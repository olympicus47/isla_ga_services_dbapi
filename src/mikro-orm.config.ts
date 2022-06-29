import { MikroOrmModuleOptions as Options } from '@mikro-orm/nestjs';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { LoadStrategy } from '@mikro-orm/core';
import 'dotenv/config';

const options: Options = {
  type: 'mysql',
  dbName: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  entities: [
    'dist/produse/Produs.entity.js',
    'dist/locatii/Locatie.entity.js',
    'dist/inventarProduse/InventarPerProdusPerLocatie.entity.js',
  ],
  entitiesTs: [
    'src/produse/Produs.entity.ts',
    'src/locatii/Locatie.entity.ts',
    'src/inventarProduse/InventarPerProdusPerLocatie.entity.ts',
  ],
  debug: true,
  loadStrategy: LoadStrategy.JOINED,
  highlighter: new SqlHighlighter(),
  metadataProvider: TsMorphMetadataProvider,
  registerRequestContext: false,
  migrations: {
    path: 'dist/migrations',
    pathTs: 'src/migrations',
  },
};

export default options;
