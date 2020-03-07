import {Sequelize} from 'sequelize-typescript';
import * as dbConfig from '@config/db.json'
import {User} from '@models/User'
import {Post} from '@models/Post'

const env = process.env.NODE_ENV || 'development'

export const sequelize =  new Sequelize({
    database: dbConfig[env].database,
    dialect: dbConfig[env].dialect,
    username: dbConfig[env].username,
    password: dbConfig[env].password,
    models: [User, Post]
})
