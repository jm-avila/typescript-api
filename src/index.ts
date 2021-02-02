import Sequelize from 'sequelize';
import { createModels } from './models';
import app from "./app"

const port = process.env.HTTP_PORT;
export const db = createModels();

(async () => {
    await db.sequelize.authenticate()

    app.listen(port,()=>{
        console.log(`Server listening at http://localhost:${port}`);
    })
})()
