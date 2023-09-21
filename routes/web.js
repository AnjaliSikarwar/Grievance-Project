const express = require('express');
const FrontController = require('../controllers/FrontController');
const TeacherController = require('../controllers/TeacherController');
const AdminController = require('../controllers/Admin/AdminController');
const StudentController = require('../controllers/Admin/StudentController');
const route = express.Router();
const checkauth = require('../middlewear/auth');
const ComplaintController = require('../controllers/Admin/ComplaintController');
const CourseController = require('../controllers/Admin/CourseController');


//routing
route.get('/', FrontController.home)
route.get('/about', FrontController.about)
route.get('/contact', FrontController.contact)
route.get('/login', FrontController.login)
route.get('/grievance', FrontController.grievance)
route.get('/features', FrontController.features)
route.get('/benefits', FrontController.benefits)
route.get('/help', FrontController.help)
// route.get('/studentlogin', FrontController.studentlogin)
route.get('/adminlogin', FrontController.adminlogin)
route.get('/deanlogin', FrontController.deanlogin)


//TeacherController
route.get('/teacher/display', TeacherController.displayTeacher)


//AdminController
route.get('/admin/dashboard',checkauth,AdminController.dashboard)
route.get('/admin/login',AdminController.login)
route.get('/admin/register',AdminController.register)
route.post('/admininsert',AdminController.admininsert)
// route.post('/admin/verifylogin',AdminController.verifylogin)
route.get('/displaycomplaint',checkauth,AdminController.complaintdisplay)


//Admin Student Controller
route.get('/admin/addstudent',checkauth,StudentController.addstudent)
route.post('/studentinsert',checkauth,StudentController.studentinsert)
route.get('/admin/studentview/:id',checkauth,StudentController.viewstudent)
route.get('/admin/studentedit/:id',checkauth,StudentController.editstudent)
route.post('/admin/studentupdate/:id',checkauth,StudentController.updatestudent)
route.post('/admin/studentupdate/:id',checkauth,StudentController.updatestudent)
route.get('/admin/studentdelete/:id',checkauth,StudentController.studentdelete)
route.post('/verifylogin',StudentController.verifylogin)
route.get('/logout',StudentController.logout)
route.get('/changepassword',checkauth,StudentController.changepassword)
route.get('/profile',checkauth,StudentController.profile)
route.post('/updateprofile',checkauth,StudentController.updateprofile)
route.post('/updatepassword',checkauth,StudentController.updatepassword)
route.get('/displaycourse',checkauth,StudentController.coursedisplay)
// route.get('/displaycourse',checkauth,StudentController.displaycourse)


//Complaint Controller
route.get('/addcomplaint',checkauth,ComplaintController.addcomplaint)
route.post('/complaintinsert',checkauth,ComplaintController.complaintinsert)
route.get('/complaint/complaintview/:id',checkauth,ComplaintController.complaintview)
route.get('/complaint/complaintedit/:id',checkauth,ComplaintController.complaintedit)
route.get('/complaint/complaintdelete/:id',checkauth,ComplaintController.complaintdelete)
route.post('/complaintupdate/:id',checkauth,ComplaintController.complaintupdate)
route.post('/updatestatus/:id',checkauth,ComplaintController.updatestatus)

// Admin Course Controller
route.get('/admin/addcourse',checkauth,CourseController.addcourse)
route.post('/courseinsert',checkauth,CourseController.courseinsert)
route.get('/admin/courseview/:id',checkauth,CourseController.courseview)
route.get('/admin/courseedit/:id',checkauth,CourseController.courseedit)
route.get('/admin/coursedelete/:id',checkauth,CourseController.coursedelete)
route.post('/admin/courseupdate/:id',checkauth,CourseController.courseupdate)

module.exports = route;