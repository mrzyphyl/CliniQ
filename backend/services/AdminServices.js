const db = require('../database/db')
const CryptoJS = require('crypto-js')

module.exports.getAllAdmin = async () => {
    const [records] = await db.query('SELECT * FROM admin')
    return records
}

module.exports.loginAdmin = async (email, pass) => {
    const [records] = await db.query("SELECT * FROM admin WHERE AdminEmail = ?", [email])
    
    if (records.length === 0) {
        throw new Error("No matching admin found.")
    }

    const storedPassword = records[0].AdminPassword
    const decryptedPassword = decryptAndVerifyPassword(storedPassword, pass)

    if (pass === decryptedPassword) {
        return records
    } else {
        throw new Error("Incorrect password.")
    }
}

module.exports.getAdminById = async (id) => {
    const [[records]] = await db.query("SELECT * FROM admin WHERE AdminID = ?", [id])
    return records
}

module.exports.deleteAdminById = async (id) => {
    const [{ affectedRows }] = await db.query("DELETE FROM admin WHERE AdminID = ?", [id])
    return affectedRows
}

module.exports.addOrEditAdmin = async (obj, AdminID = 0) => {
    const encryptedPassword = encryptPassword(obj.AdminPassword)

    const [[[{affectedRows}]]] = await db.query("CALL usp_admin_add_or_edit(?,?,?,?)",
        [AdminID, obj.AdminName,  obj.AdminEmail, encryptedPassword])
    return affectedRows
}

module.exports.editAdminPassword = async (adminID, newPassword) => {
    const encryptedPassword = encryptPassword(newPassword);

    const [updateResult] = await db.query("UPDATE admin SET AdminPassword = ? WHERE AdminID = ?", [encryptedPassword, adminID])
  
    return updateResult.affectedRows
  }

// Function to encrypt a password using CryptoJS
function encryptPassword(password) {
    const salt = CryptoJS.lib.WordArray.random(16)
    const key = CryptoJS.PBKDF2(password, salt, { keySize: 512 / 32, iterations: 1000 })
    const iv = CryptoJS.lib.WordArray.random(128 / 8)
  
    const encrypted = CryptoJS.AES.encrypt(password, key, { iv: iv })
  
    return `${encrypted.toString()}|${salt.toString()}|${iv.toString()}`
}

// Function to decrypt and verify the password
function decryptAndVerifyPassword(storedPassword, adminPassword) {
    const [encrypted, salt, iv] = storedPassword.split('|')
  
    const key = CryptoJS.PBKDF2(adminPassword, CryptoJS.enc.Hex.parse(salt), { keySize: 512 / 32, iterations: 1000 })
    const decrypted = CryptoJS.AES.decrypt(encrypted, key, { iv: CryptoJS.enc.Hex.parse(iv) }).toString(CryptoJS.enc.Utf8)
  
    return decrypted
}