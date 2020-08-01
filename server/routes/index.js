const express = require('express');
const db = require('../db');
const router  = express.Router();


router.get('/all', async(req, res, next)=>{

    try{
        let results = await db.alldata();
        res.json(results);
    } catch(e) {
        res.sendStatus(500);
    }
});

router.get('/max', async(req, res, next)=>{

    try{
        let results = await db.maxid();
        res.send(results);
    } catch(e) {
        res.sendStatus(500);
    }
});


router.get('/:id', async(req, res, next)=>{

    try{
        let results = await db.onedata(req.params.id);
        res.json(results);
    } catch(e) {
        res.sendStatus(500);
    }
});


router.get('/insertstring/:inputstring', async(req, res, next)=>{

    try{
        let results = await db.insertstring(req.params.inputstring);
        res.send('Row Added');
    } catch(e) {
        res.sendStatus(500);
    }
});


router.get('/insertstep/:inputstring', async(req, res, next)=>{

    try{
        let results = await db.insertsteps(req.params.inputstring);
        res.send('Row Added');
    } catch(e) {
        res.sendStatus(500);
    }
});





module.exports = router;