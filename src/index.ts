import { createModels } from './models';
import app from "./app"

export const db = createModels();

const port = process.env.HTTP_PORT;

(async () => {
    await db.sequelize.authenticate()

    app.listen(port,()=>{
        console.log(`Server listening at http://localhost:${port}`);
    })
})()
