const CourseModel = require('../../models/Course')

class CourseController {

    static addcourse = async (req, res) => {
        try {
            const { name, email, role, image } = req.data1
            const sdata = await CourseModel.find()
            res.render('admin/course/addcourse', { n: name, role: role, s: sdata, img: image, msg: req.flash('success'), msg1: req.flash('error') })
        } catch (error) {
            console.log(error)
        }
    }

    static courseinsert = async (req, res) => {
        try {
            const { cname } = req.body
            const result = new CourseModel({
                cname: cname,
            })
            await result.save()
            res.redirect('/admin/addcourse')
        } catch (error) {
            console.log(error)
        }
    }

    static courseview = async (req, res) => {
        try {
            const { name, email, role, image } = req.data1
            // console.log(req.params.id)
            const sdata = await CourseModel.findById(req.params.id)
            //  console.log(sdata)
            res.render('admin/course/view', { n: name, role: role, s: sdata, img: image })
        } catch (error) {
            console.log(error)
        }
    }

    static courseedit = async (req, res) => {
        try {
            const { name, email, role, image } = req.data1
            // console.log(req.params.id)
            const sdata = await CourseModel.findById(req.params.id)
            //  console.log(sdata)
            res.render('admin/course/edit', { n: name, role: role, s: sdata, img: image })
        } catch (error) {
            console.log(error)
        }
    }

    static coursedelete = async (req, res) => {
        try {
            const { name, email } = req.data1
            await CourseModel.findByIdAndDelete(req.params.id)
            res.redirect('/admin/addcourse')
        } catch (error) {
            console.log(error)
        }
    }

    static courseupdate = async (req, res) => {
        try {
            //console.log(req.body);
            // console.log(req.files.image)
            const { cname } = req.body

            if (req.files) {
                // image delete code 
                const course = await CourseModel.findById(req.params.id)
                var data = {
                    cname: cname,
                }
            } else {
                var data = {
                    cname: cname,
                }
            }
            const id = req.params.id
            await CourseModel.findByIdAndUpdate(id, data)
            req.flash('success', 'update successfully')
            res.redirect('/admin/addcourse')
        } catch (error) {
            console.log(error);
        }
    }

}


module.exports = CourseController