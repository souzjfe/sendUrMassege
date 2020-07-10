import express from 'express';
import MsgControl from './controllers/MsgControl';
import UsrControl from './controllers/UsrConttrol';

const routes = express.Router();

const msgControl = new MsgControl();
const usrControl = new UsrControl();

routes.post('/msg', msgControl.create);
routes.get('/msg', msgControl.index);
routes.post('/usr', usrControl.create);
routes.get('/usr', usrControl.index);
export default routes;