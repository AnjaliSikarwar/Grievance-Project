const mongoose = require('mongoose')

const ComplaintSchema = new mongoose.Schema({
   name: {
      type: String,
      require: true,
   },

   email: {
      type: String,
      required: true,
   },
   ctype: {
      type: String,
      required: true,
   },
   semester: {
      type: String,
      required: true,
   },
   subject: {
      type: String,
      required: true,
   },
   cdetail: {
      type: String,
      required: true,

   },
   status: {
      type: String,
      default: 'pending',
   },
   user_id: {
      type: String,
      required: true,
   },
   comment: {
      type: String
   },

   image: {
      public_id: {
         type: String,
      },
      url: {
         type: String,
      },
   },
}, { timestamps: true })
const ComplaintModel = mongoose.model('complaint', ComplaintSchema)
module.exports = ComplaintModel