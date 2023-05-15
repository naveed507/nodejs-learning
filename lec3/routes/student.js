import express from 'express'
const router = express.Router();

import {allStudents ,deleteStudent } from '../controllers/studentController.js'

router.get('/all',allStudents)
router.get('/delete/:id',deleteStudent)
export default router