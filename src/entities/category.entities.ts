import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entities";

@Entity('category', {schema:'categoria'})
export class CategoryEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @CreateDateColumn({
        name: 'create_At',
        type: 'timestamp',
        default: ()=> 'current_timestamp'
    })
    createAt:Date;
    @UpdateDateColumn({
        name: 'update_At',//nombre de la columna
        type: 'timestamp',
        default: ()=>'Current_timestamp',
    })
    updateAt:Date;

    @DeleteDateColumn({
        name: 'delete_At',//nombre de la columna
        type: 'timestamp',
        nullable: true,
    })
    deleteAt:Date;

    @ManyToOne(() => ProductEntity, (product) => product.category) 
    product: ProductEntity

    @Column('varchar', {
        name: 'categoria',
        nullable: false,
        comment: 'Category Tittle'
    })

    categoria:string;
    @Column('varchar', {
        name: 'description',
        nullable: true,
        comment: 'product description'
    })
    description:string;

    @BeforeInsert()
    @BeforeUpdate()

    async setCategory() {
        if(!this.categoria){
            return
        }
        this.categoria = this.categoria.toLowerCase();
    }
}