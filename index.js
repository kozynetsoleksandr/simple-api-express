
import express from 'express';

import router from './router.js';

const port = 3000

const app = express()

//app.use(express.json())

app.use('/rates', router)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Ohh you are lost, read the API documentation to find your way back home :)'
    })
})


async function startApp() {
    try {
        app.listen(port, () =>  console.log(`Example app listening on port ${port}`))
    } catch (e) {
        console.log(e);
    }
}

startApp();
