import {Request, Response} from 'express';
import knex from '../database/connection';


class MsgControl {

    async index(req: Request, res: Response) {
        const msgs = await knex('msg').select('msg.*');
        return res.json(msgs);



    }
    async create(req: Request, res: Response) {
        var d = new Date().toDateString();
        const data = {
            // hora: d.getHours(),
            // minuto: d.getMinutes(),
            // dia:d.getDay(),
            // mes:d.getMonth(),
            // ano: d.getFullYear(),
        }
        const {
            texto,
            userName,
        } = req.body;
        const msg = {
            texto,
            userName,
        }
        const msgId = (await knex('msg').insert(msg))[0];
        return res.json({ 
            id:msgId,
            ...msg,
        });
        
    }


}
export default MsgControl;