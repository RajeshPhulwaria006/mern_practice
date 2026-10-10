const {model, Schema} = require("mongoose")

const TeacherSchema = Schema({
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const TeacherModel = model(TeacherSchema)

module.exports = TeacherModel