const mongoose = require('mongoose');
const courseSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,"A course must have Title"],
        trim:true,
        unique:true
    },
    shortScript:{
        type:String,
        trim:true
    },
    content:{
        type:String,
        required:[true,"A course must have content"]
    },
    tag:[
        {
            id: Number,
            value: String
        }
    ],
    view:{
        type:Number,
        default:1
    },
    like:{
        type:Number,
        default:1
    },
    timeCreate:{
        type : Date,
        default:Date.now(),
    },
    createBy:{
        type:String,
        default:"Dat Tran",
        trim:true
    },
    linkDownload:String,
    image:[String],
    category:{
      type:String,
      lowercase:true
    }
})
const Course = mongoose.model('Course',courseSchema);
module.exports = Course;
