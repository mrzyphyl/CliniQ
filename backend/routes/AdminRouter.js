const express  = require('express')
const { getAdmin, addAdmin, getAdminId, deleteAdmin, editAdmin, loginAdmin } = require('../controllers/AdminController')
const router = express.Router()

router.route('/').get(getAdmin).post(addAdmin)

router.route('/:id').get(getAdminId).delete(deleteAdmin).put(editAdmin)

router.route('/login').post(loginAdmin)

module.exports = router