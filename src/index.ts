import app from "./app"
import sequelize from "./db/sequelize"

const port = process.env.HTTP_PORT;

(async () => {

    await sequelize.authenticate();

    app.listen(port,()=>{
        console.log(`Server listening at http://localhost:${port}`);
    })
})()
