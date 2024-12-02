import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableLoans1721325441378 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'loans',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'loanDate',
            type: 'timestamp',
          },
          {
            name: 'returnDate',
            type: 'timestamp',
          },
          {
            name: 'dueDate',
            type: 'timestamp',
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'userId',
            type: 'int',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'loans',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('loans');
  }
}
