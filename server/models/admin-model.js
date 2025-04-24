const mongoose = require("mongoose");
const Message = require("./message-model");

const adminSchema = new mongoose.Schema(
    {
        adminId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        adminName: {
            type: String,
            required: true
        },
        adminEmail: {
            type: String,
            required: true
        },
        adminLogo: {
            type: String,
            // required: true
        },
        developers:[
            {
                name:{type:String},
                pimage:{type:String},
                role:{type:String},
            }
        ]

       
    },
    { timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
