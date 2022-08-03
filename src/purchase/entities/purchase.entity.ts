import { Entity, Column, JoinColumn, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { PurchaseProductEntity } from '../../custom/entities/purchases-products.entity';
import { CustomerEntity } from '../../customer/entities/customer.entity';

@Entity({ name: 'purchase' })
export class PurchaseEntity extends BaseEntity {
    @Column()
    status!: string;

    @Column({ length: 250 })
    paymentMethod!: string;

    @ManyToOne(() => CustomerEntity, (customer) => customer.purchases)
    @JoinColumn({ name: "customer_id" })
    customer!: CustomerEntity


    @OneToMany(() => PurchaseProductEntity, (purchaseProduct) => purchaseProduct.purchase)
    purchaseProduct!: PurchaseProductEntity[]
}
