import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { TaskStatus } from "./task-status.enum";

// L'entity represente notre une table en BDD
@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}
