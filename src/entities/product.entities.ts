import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity,PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    //!Hacer las relaciones de las columnas

    @Column('varchar', {
        name:'tittle',
        nullable: false,
        comment:'Product Tittle'
    })
    tittle:string;
    @Column('number', {
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
    @Column('image',{
        name: 'image',
        nullable: true,
        comment: 'product image'
    })
    image:string;

    @BeforeInsert()
    @BeforeUpdate()

    async setTittle() {
        if(!this.tittle){
            return
        }
        this.tittle =  this.tittle.toUpperCase();
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