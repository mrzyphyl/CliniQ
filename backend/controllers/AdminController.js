const asyncHandler = require('express-async-handler')
const service = require('../services/AdminServices')



//Get All Admin
//@access Public
const getAdmin = asyncHandler (async (req, res) => {
    const admin = await service.getAllAdmin()
    res.status(200).json(admin)
})

//Login Admin
//@access Public
const loginAdmin = asyncHandler (async (req, res) => {
    try {
        const { AdminEmail, AdminPassword } = req.body;
    
        if (!AdminEmail || !AdminPassword) {
          res.status(400);
          throw new Error('Please provide both email and password');
        }
    
        const adminExist = await service.loginAdmin(AdminEmail, AdminPassword);
    
        if (adminExist) {
          res.status(200).json(adminExist);
        } else {
          res.status(401);
          throw new Error('Wrong Credentials');
        }
    } catch (error) {
        console.error('Login Admin Error:', error);
        res.status(500).json({ error: 'Wrong password or email' });
    }
})

//Get Admin by ID
//@access Public
const getAdminId = asyncHandler (async (req, res) => {
    const admin = await service.getAdminById(req.params.id)
    if (admin == undefined)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send(admin)
})

//Delete Admin
//@access Public
const deleteAdmin = asyncHandler(async (req, res) => {
    const affectedRows = await service.deleteAdminById(req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('deleted successfully.')
})

//Add Admin
//@access Public
const addAdmin = asyncHandler(async (req, res) => {
    await service.addOrEditAdmin(req.body)
    res.status(201).send('created successfully.')
})

//Edit Admin
//@access Public
const editAdmin = asyncHandler(async (req, res) => {
    const affectedRows = await service.addOrEditAdmin(req.body, req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('updated successfully.')
})

//Edit Password
//@access Public
const editPassword = asyncHandler(async (req, res) => {
    const affectedRows = await service.editAdminPassword(req.body, req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('updated successfully.')
})


module.exports = {
    getAdmin,
    getAdminId,
    deleteAdmin,
    addAdmin,
    editAdmin,
    loginAdmin,
    editPassword
}