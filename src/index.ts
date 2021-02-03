import app from './app';
import db from './db';

const port = process.env.HTTP_PORT;

(async () => {
    await db.sequelize.authenticate();

    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    });
})();
