import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableUsers1721324997301 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'createdAt',
            type: 'bigint',
            isNullable: false,
            default: 'extract(epoch from now()) * 1000',
          },
          {
            name: 'updatedAt',
            type: 'bigint',
            isNullable: false,
            default: 'extract(epoch from now()) * 1000',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
