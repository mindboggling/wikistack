const express = require('express');
const router = express.Router();
const wikiRouter = require('./wiki');
const userRouter = require('./user');


//middleware

router.use('/wiki', wikiRouter);
router.use('/user', userRouter);





module.exports = router;
