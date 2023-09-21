const AdminModel = require('../../models/Admin')
const ComplaintModel = require('../../models/Complaint')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AdminController {

    static dashboard = async (req, res) => {
        try {
            // console.log(req.data1)
            const{name,email,role,image}=req.data1
            res.render('admin/dashboard',{n:name, role:role,img:image})
        } catch (error) {
            console.log(error)
        }
    }

    static login = async (req, res) => {
        try {
            res.render('admin/login')
        } catch (error) {
            console.log(error)
        }
    }

    static register = async (req, res) => {
        try {
            res.render('admin/register')
        } catch (error) {
            console.log(error)
        }
    }


    static admininsert = async (req, res) => {
        try {
            const { name, email, password } = req.body
            const hashpassword = await bcrypt.hash(password, 10)
            // console.log(req.body)
            const result = new AdminModel({
                name: name,
                email: email,
                password: hashpassword,

            })
            await result.save()
            res.redirect('/admin/login')
        } catch (error) {
            console.log(error)
        }
    }

    static complaintdisplay = async(req,res)=>{
        try {
            const{name,email,role,image} = req.data1
            const cdata = await ComplaintModel.find()
            res.render('admin/displaycomplaint',{n:name,role:role,c:cdata,img:image})
        } catch (error) {
          console.log(error)  
        }
    }


    // static verifylogin = async (req, res) => {
    //     try {
    //         const { email, password } = req.body
    //         if (email && password) {
    //             const admin = await AdminModel.findOne({ email: email })
    //             console.log(admin)
    //             // password check 
    //             if (admin != null) {
    //                 const ismatched = await bcrypt.compare(password, admin.password)
    //                 if (ismatched) {
    //                     var token = jwt.sign({ ID: admin._id }, 'anjali@1234') //ID is a variable
    //                     res.redirect('/admin/dashboard')
    //                 } else {
    //                     res.redirect('/admin/login')
    //                 }
    //             } else {
    //                 res.redirect('/admin/login')
    //             }

    //         } else {
    //             res.redirect('/admin/login')
    //         }
    //         console.log(req.body)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
}

module.exports = AdminController