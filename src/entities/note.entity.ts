import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { User } from "./user.entity";

@Entity("notes")
export class Note {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  color: string;

  @Column({ default: false })
  is_favorite: boolean;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
