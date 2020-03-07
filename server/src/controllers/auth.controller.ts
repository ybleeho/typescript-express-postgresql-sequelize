import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/IControllerBase.interface'
import {User} from '../models/User'
import {Post} from "../models/Post";

import wrap from '../util/wrap'

class AuthController implements IControllerBase {
    public path = '/login'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path, wrap(this.login))
    }

    login = async (req: Request, res: Response) => {

        const result: User[] = await User.findAll({include:[Post]})
        console.log(result)
        res.json(result)
    }

}

export default AuthController
