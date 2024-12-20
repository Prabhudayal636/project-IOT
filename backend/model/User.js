const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
    deviceid: {type:String, required: true},
    devicename: { type: String, required: true },
    location: { type: String, required: true },
    devicetype: { type: String, required: true },
});

const RoomSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

const ActivitySchema = new mongoose.Schema({
    action:{type: String, required:true},
    timestamp:{type:Date,default:Date.now}
});

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role:{type:String ,enum :["admin","user"],required:true,default:'user'},
    rooms: [RoomSchema],
    devices: [DeviceSchema],
    activitylog:[ActivitySchema]
});

const UserDetails = mongoose.model("UserDetails", UserSchema);

module.exports = {UserDetails};