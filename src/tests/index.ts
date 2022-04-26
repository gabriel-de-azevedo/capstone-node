import { existsSync } from 'fs';
import { unlink } from 'fs/promises';
import path from 'path';
import { createConnection, getConnection } from 'typeorm';
import dbOptions from '../database/ormconfig';

class ConnectionTestJest {
  dbpath: string;
  constructor() {
    this.dbpath = path.join(__dirname, '../../dbTest.sqlite');
  }
  create = async () => {
    if (existsSync(this.dbpath)) {
      await unlink(this.dbpath);
    }
    await createConnection(dbOptions);
  };

  close = async () => {
    await getConnection('default').close();
    if (existsSync(this.dbpath)) {
      await unlink(this.dbpath);
    }
  };

  clear = async () => {
    const conn = getConnection('default');
    const entities = conn.entityMetadatas;

    entities.forEach(async (entiti) => {
      const repository = conn.getRepository(entiti.name);
      await repository.query(`DELETE FROM ${entiti.tableName}`);
    });
  };
}

export { ConnectionTestJest };
