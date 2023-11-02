import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany,PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./category.entities";

@Entity('products', {schema: 'ventas'})
export class ProductEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @CreateDateColumn({
        name: 'create_at',//nombre de la columna
        type: 'timestamp',
        default: ()=>'Current_timestamp',
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

    //TODO Hacer las relaciones de las columnas

    @OneToMany(() => CategoryEntity, (category) => category.product)
    category: CategoryEntity[];
    
    @Column('varchar', {
        name:'title',
        nullable: false,
        comment:'Product Title'
    })
    title:string;
    @Column('numeric', {//TODO se reemplaza el number por el numeric
        name: 'price',
        nullable: false,
        comment: 'product price'
    })
    price:number;
    @Column('varchar', {
        name: 'description',
        nullable: true,
        comment: 'product description'
    })
    description:string;
    @Column('varchar',{
        name: 'image',
        nullable: true,
        comment: 'product image'
    })
    image:string;

    @BeforeInsert()
    @BeforeUpdate()

    async setTittle() {
        if(!this.title){
            return
        }
        this.title =  this.title.toUpperCase();
    }

    
    @BeforeInsert()
    @BeforeUpdate()

    async setDescription() {
        if(!this.description){
            return
        }
        this.description =  this.description.toLowerCase();
    }
/*
    @BeforeInsert()
    @BeforeUpdate()

    async setEmail() {
        if(!this.email){
            return
        }
        this.email =  this.email.trim();
    }
    */
/*
    @BeforeInsert()
    @BeforeUpdate()

    async hashPassword(){
        if(!this.password)
        return;
    }
    this.password = Bcrypt.hashPassword(this.password, 12);
    */



}