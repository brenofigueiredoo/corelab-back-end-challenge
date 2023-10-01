import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTypeColumnDate1696045677677 implements MigrationInterface {
    name = 'AlterTypeColumnDate1696045677677'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notes" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "notes" ADD "createdAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "notes" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "notes" ADD "updatedAt" date NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notes" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "notes" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "notes" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "notes" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
