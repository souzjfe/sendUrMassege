import {Request, Response} from 'express';
import knex from '../database/connection';


class MsgControl {

    async index(req: Request, res: Response) {
        const msgs = await knex('msg').select('msg.*');
        return res.json(msgs);



    }
    async create(req: Request, res: Response) {
        var d = new Date();
        const date =  d.toDateString();  
        const hour = d.getHours() + ":" + d.getUTCMinutes();
        const {
            text,
            userName,
        } = req.body;
        const msg = {
            text,
            userName,
            date,
            hour
        }
        const msgId = (await knex('msg').insert(msg))[0];
        return res.json({ 
            id:msgId,
            ...msg,
        });
        
    }


}
export default MsgControl;