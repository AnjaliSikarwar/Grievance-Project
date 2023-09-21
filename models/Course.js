const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
   cname: {
      type: String,
      require: true,
   },

  
},{timestamps:true})
const CourseModel = mongoose.model('course', CourseSchema)
module.exports = CourseModel