import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'nvarchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  slug: string;

  @Column({ type: 'tinyint' })
  gamePart: number;

  @Column({ type: 'tinyint' })
  rank: number;

  @Column({ type: 'nvarchar', length: 500, nullable: true })
  description?: string;

  @Column({ type: 'smallint', nullable: true })
  price?: number;

  @Column({ type: 'smallint', nullable: true })
  statStrength?: number;

  @Column({ type: 'smallint', nullable: true })
  statWillpower?: number;

  @Column({ type: 'smallint', nullable: true })
  statArmor?: number;

  @Column({ type: 'smallint', nullable: true })
  statArmorBreak?: number;

  @Column({ type: 'smallint', nullable: true })
  talentAllRanks?: number;

  @Column({ type: 'smallint', nullable: true })
  talentStrength?: number;

  @Column({ type: 'smallint', nullable: true })
  talentWillpower?: number;

  @Column({ type: 'smallint', nullable: true })
  talentArmor?: number;

  @Column({ type: 'smallint', nullable: true })
  talentArmorBreak?: number;

  @Column({ type: 'smallint', nullable: true })
  talentExertion?: number;

  @Column({ type: 'smallint', nullable: true })
  perTurnArmor?: number;

  @Column({ type: 'smallint', nullable: true })
  perTurnWillpower?: number;

  @Column({ type: 'smallint', nullable: true })
  onRestArmor?: number;

  @Column({ type: 'smallint', nullable: true })
  onRestWillpower?: number;

  @Column({ type: 'smallint', nullable: true })
  perKillWillpower?: number;

  @Column({ type: 'smallint', nullable: true })
  aggro?: number;

  @Column({ type: 'smallint', nullable: true })
  chanceCrit?: number;

  @Column({ type: 'smallint', nullable: true })
  chanceDodge?: number;

  @Column({ type: 'smallint', nullable: true })
  chanceDivert?: number;

  @Column({ type: 'bit', nullable: true })
  neverMiss?: boolean;

  @Column({ type: 'smallint', nullable: true })
  movement?: number;

  @Column({ type: 'smallint', nullable: true })
  resist?: number;

  @Column({ type: 'smallint', nullable: true })
  knockback?: number;

  @Column({ type: 'smallint', nullable: true })
  defy?: number;

  @Column({ type: 'smallint', nullable: true })
  extraRange?: number;

  @Column({ type: 'smallint', nullable: true })
  extraStrengthOnAttack?: number;

  @Column({ type: 'bit', nullable: true })
  acquirementMarketplace?: boolean;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  acquirementQuest?: string;

  @Column({ type: 'nvarchar', length: 128, nullable: true })
  acquirementGodstone?: string;

  @Column({ type: 'nvarchar', length: 128, nullable: true })
  acquirementHero?: string;

  @Column({ type: 'nvarchar', length: 500, nullable: true })
  trivia?: string;
}
