import { Router } from 'express';
import db from '../../db';
import { compareHash } from '../../utils';

const router = Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const account = await db.Account.findOne({ where: { email }, raw: false });

        if (!account) throw new Error(`Invalid credentials.`);

        const passwordMatch = await compareHash(password, account.password);

        if (!passwordMatch) throw new Error(`Invalid credentials.`);

        return res.status(200).send('Valid credentials');
    } catch (err) {
        res.send(err.message);
    }
});

export default router;
