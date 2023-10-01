import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableNotes1696013132706 implements MigrationInterface {
    name = 'AlterTableNotes1696013132706'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notes" ALTER COLUMN "color" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notes" ALTER COLUMN "color" SET NOT NULL`);
    }

}
