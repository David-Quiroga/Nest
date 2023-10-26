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
    @Column('number', {
        name: 'phone',
        nullable: false,
        comment: 'Users Phone' 
    })
    phone:number;
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

    async setRol(){
        if(!this.rol){
            return
        }
        this.rol =this.rol.substring(1, 2); //!en este caso, nos devuelve los caracteres que se encuentran en un rango de posiciones
    }

    @BeforeInsert()
    @BeforeUpdate()

    async 
}

