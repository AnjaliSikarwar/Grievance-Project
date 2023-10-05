const mongoose=require('mongoose')
const db_liveurl = 'mongodb+srv://anjalisikarwar5713:Sonia123@cluster0.w1afzq4.mongodb.net/grievanceportal?retryWrites=true&w=majority'
const local_url = 'mongodb://127.0.0.1:27017/grievanceportal'

const connectdb=()=>{
    return mongoose.connect(db_liveurl)
    .then(()=>{
        console.log('connection successfully')
    }).catch((error)=>{
        console.log(error)
    })

}
module.exports = connectdb
