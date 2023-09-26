module.exports =app =>{

    const catigoryes = require("../controllers/categoryRoutes.js");
    const router = require("express").Router()
    
    router.post("/", catigoryes.create);
    router.get("/", catigoryes.findAll);
    app.use('/api/categories', router)
    
}