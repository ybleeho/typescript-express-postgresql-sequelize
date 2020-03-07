import {Table, Column, Model, HasMany} from 'sequelize-typescript'
import {Post} from "@models/Post";

@Table
export class User extends Model<User> {

    @Column
    name: string

    @Column
    age: string

    @HasMany(() => Post)
    Posts: Post[]
}
