import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, DeleteDateColumn } from 'typeorm';
import MessageReaction from '@model/message-reaction';
import ReplyReaction from '@model/reply-reaction';
import { IsString } from 'class-validator';

@Entity({ name: 'reaction' })
export default class Reaction {
  @PrimaryGeneratedColumn()
  reactionId: number;

  @Column({ length: 100, unique: true })
  @IsString()
  title: string;

  @Column({ length: 10 })
  @IsString()
  emoji: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => MessageReaction, (messageReaction) => messageReaction.reaction)
  messageReactions: MessageReaction[];

  @OneToMany(() => ReplyReaction, (replyReaction) => replyReaction.reaction)
  replyReactions: ReplyReaction[];
}
