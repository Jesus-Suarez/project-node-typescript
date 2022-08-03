import { Entity, Column, OneToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { CustomerEntity } from '../../customer/entities/customer.entity';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
	@Column({ length: 50 })
	name!: string;

	@Column()
	lastname!: string;

	@Column()
	username!: string;

	@Column()
	email!: string;

	@Column()
	password!: string;

	@Column()
	city!: string;

	@Column()
	province!: number;

	@OneToOne(() => CustomerEntity, (customer) => customer.user)
	customer!: CustomerEntity
}
