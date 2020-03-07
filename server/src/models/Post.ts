import {Table, Column, Model, BelongsTo, ForeignKey} from 'sequelize-typescript'
import {User} from "@models/User";

@Table
export class Post extends Model<Post> {

    @Column
    title: string


    @ForeignKey(() => User)
    @Column
    UserId: number

    @BelongsTo(() => User)
    User: User

}
