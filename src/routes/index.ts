import { Router } from 'express';
import AuthorizationRouter from './authorization';

const router = Router();

router.use('/authorization', AuthorizationRouter);

export default router;
