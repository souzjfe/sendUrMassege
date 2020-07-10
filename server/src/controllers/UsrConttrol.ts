import {Request, Response} from 'express';
import knex from '../database/connection';


class UsrControl {

    async index(req: Request, res: Response) {
        const usrs = await knex('usr').select('usr.*');
        return res.json(usrs);
    }
    async create(req: Request, res: Response) {

        const {
            name,
        } = req.body;

        const usr = {
            name,
        }
        const usrId = (await knex('usr').insert(usr))[0];
        return res.json({ 
            id:usrId,
            ...usr,
        });   
    }    
}
export default UsrControl;