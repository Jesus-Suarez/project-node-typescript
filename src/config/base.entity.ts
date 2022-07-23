import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {
	// Decorador
	@PrimaryColumn('uuid')
    // El ! es para que no pida inicializar la variable
	id!: string;

    @CreateDateColumn({
        name:"created_at",
        type:"timestamp"
    })
	createdAt!: Date;
	
    @UpdateDateColumn({
        name:"updated_at",
        type:"timestamp"
    })
	updatedAt!: Date;
}

// id
// created_at
// update_at
