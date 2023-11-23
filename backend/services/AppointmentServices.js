const db = require('../database/db')

module.exports.getAllAppointments = async () => {
    const [records] = await db.query('SELECT * FROM book_appts')
    return records;
}

module.exports.getAnAppointmentId = async (id) => {
    const [{ affectedRows }] = await db.query("SELECT * FROM book_appts WHERE AppointmentID = ?", [id])
    return affectedRows;
}

module.exports.getAppointmentsTicket = async (id) => {
    const [[records]] = await db.query("SELECT * FROM book_appts WHERE AppointmentTicketNo = ?", [id])
    return records;
}

module.exports.deleteAppointmentsById = async (id) => {
    const [{ affectedRows }] = await db.query("DELETE FROM book_appts WHERE AppointmentID = ?", [id])
    return affectedRows;
}

module.exports.addOrEditAppointments = async (obj, AppointmentID = 0) => {
    const [[[{affectedRows}]]] = await db.query("CALL usp_book_appts_add_or_edit(?,?,?,?,?,?,?,?)",
        [AppointmentID, obj.AppointmentTicketNo, obj.FullName, obj.PhoneNo, obj.Doctor, obj.AppointmentTime, obj.AppointmentDate, obj.Services])
    return affectedRows;
}