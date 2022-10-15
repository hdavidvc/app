const { Router } = require('express');
const router = Router();

const { getBook, setBook, createTable } = require('../controllers/index.controller');

router.get('/libro', getBook)
router.post('/crear', setBook)
router.get('/init', createTable)



module.exports = router;