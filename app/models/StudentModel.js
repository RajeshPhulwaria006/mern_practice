const { Schema, model } = require("mongoose")

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    }
})

const StudentModel = model("student", StudentSchema)

module.exports = StudentModel