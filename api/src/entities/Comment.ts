import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'int' })
  itemId: number;

  @Column({ type: 'nvarchar', length: 30 })
  userName: string;

  @Column({ type: 'nvarchar', length: 255 })
  message: string;

  @CreateDateColumn() createdAt: Date;
}

export type AddCommentInput = Pick<Comment, 'itemId' | 'userName' | 'message'>;
