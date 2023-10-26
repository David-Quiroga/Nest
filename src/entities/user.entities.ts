import { CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate} from "typeorm";

@Entity('users', {schema: 'usuarios'})

export class userEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: ()=> 'Current_timestamp',
    })
    createAt: Date;

    @UpdateDateColumn({
        name: 'update_At',
        type: 'timestamp',
        default: ()=> 'current_timestamp',
    })
    updateAt: Date;

    @DeleteDateColumn({
        name: 'delete_At',//nombre de la columna
        type: 'timestamp',
        nullable: true,
    })
    deleteAt:Date;

    @Column('varchar', {
        name:'name',
        nullable: false,
        comment:'Product Tittle'
    })
    name:string;
    @Column('varchar', {
        name: 'lastname',
        nullable:false,
        comment: 'User Lastname'
    })
    lastname:string;
    @Column('varchar', {
        name: 'directtion',
        nullable: false,
        comment: 'User Direction'
    })
    direction:string;
    @Column('varchar', {
        name: 'phone',
        nullable: false,
        comment: 'Users Phone' 
    })
    phone:string;
    @Column('varchar', {
        name: 'email',
        nullable: false,
        comment: 'User email'
    })
    email:string;

    @Column('varchar', {
        name: 'rol',
        nullable:false,
        comment: 'User Rol '
    })
    rol:string;

    @BeforeInsert()
    @BeforeUpdate()
    async setName() {
        if(!this.name){
            return
        }
        this.name = this.name.toUpperCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setLastName(){
        if(!this.lastname){
            return
        }
        this.lastname = this.lastname.toLowerCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setDirection() {
        if (!this.direction) {
            return;
        }
        this.direction = this.direction.toLocaleLowerCase("es");
    }
    

    @BeforeInsert()
    @BeforeUpdate()
    async setPhone(){
        if(!this.phone){
            return
        }
        this.phone = this.phone.toString();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setEmail(){
        if(!this.email){
            return
        }
        this.email = this.email.trim();
    }
    @BeforeInsert()
    @BeforeUpdate()
    async setRol(){
        if(!this.rol){
            return
        }
        this.rol =this.rol.substring(1, 2); //!en este caso, nos devuelve los caracteres que se encuentran en un rango de posiciones
    }
}

