import { Router } from 'express';
import TestRouter from './test';

const router = Router();

router.use('/test', TestRouter);

export default router;
