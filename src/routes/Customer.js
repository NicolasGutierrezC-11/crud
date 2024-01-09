const express = require('express')
const router = express.Router()

const CustomerController = require('../controllers/customerController');




router.get('/', CustomerController.list)
router.post('/add',CustomerController.save )
router.get('/delete/:id', CustomerController.delete)

router.get('/update/:id', CustomerController.edit)
router.post('/update/:id', CustomerController.update)

module.exports = router;