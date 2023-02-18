import express from 'express'
import indexRoutes from './indexRoutes.js'
import apiRoutes from './apiRoutes.js'

const router = express.Router()

router.use('/', indexRoutes)
router.use('/api', apiRoutes)

export default router
