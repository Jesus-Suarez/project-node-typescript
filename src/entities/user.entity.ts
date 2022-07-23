import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../config/base.entity';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
	@Column()
	username!: string;

	@Column({ length: 50 })
	name!: string;

	@Column()
	lastname!: string;

	@Column({ nullable: true })
	jobPosition?: string;

	@Column()
	numberPhone!: number;
}
