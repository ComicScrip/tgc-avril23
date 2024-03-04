import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { Length, IsEmail } from "class-validator";
import { ObjectType, Field, Int, InputType } from "type-graphql";
import { Ad } from "./ad";
import { argon2id, hash } from "argon2";

export enum UserRole {
  ADMIN = "admin",
  VISITOR = "visitor",
}

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  nickname: string;

  @Column({
    default:
      "https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png",
  })
  @Field()
  avatar: string;

  @Column()
  hashedPassword: string;

  @Column({ type: "enum", enum: UserRole, default: UserRole.VISITOR })
  @Field()
  role: UserRole;

  @OneToMany(() => Ad, (ad) => ad.owner)
  ads: Ad[];
}

@InputType()
export class NewUserInput {
  @Field()
  @IsEmail()
  @Length(3, 100)
  email: string;

  @Field()
  @Length(8, 50)
  password: string;

  @Field()
  @Length(3, 100)
  nickname: string;
}

export async function hashPassword(password: string) {
  return hash(password);
}
