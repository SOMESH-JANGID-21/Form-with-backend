const mongoose = require("mongoose")

const UploadSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true,'Name must be filled'],
        trim: true
    },
    age:{
        type : String,
        required: [true,'age must be filled'],
        trim: true
    } ,
    sex:{
        type : String,
        required: [true,'this fieldmust be filled'],
        trim: true
    } ,
    idType:{
        type : String,
        required: [true,'this fieldmust be filled'],
        trim: true
    } ,
    idnumber:{
        type : String,
        required: [true,'this fieldmust be filled'],
        trim: true
    } ,
    email: {
        type: String,
        required: [true, "email field must be filled"],
        trim: true,
    },
    address: {
        type: Array,
        default: []
    },
    state: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        trim: true,
    },
    pincode: {
        type: String,
        trim: true,
    },
    country: {
        type: String,
        trim: true,
    },
    occupation: {
        type: String,
        trim: true,
    },
    religion: {
        type: String,
        trim: true,
    },
    maritalStatus: {
        type: String,
        trim: true,
    },
    gardian: {
        type: String,
        trim: true,
    },
    nationality: {
        type: String,
        trim: true,
    },
    mobile: {
        type: String,
        required: [true, "mobile field must be filled"],
        trim: true,
        unique: [true, "mobile already exists."]
    },
    isActive: {
        type: Boolean,
        default: true
    }
},{
    collection:"upload",
    timestamps :true
})

module.exports = mongoose.model("Upload",UploadSchema)