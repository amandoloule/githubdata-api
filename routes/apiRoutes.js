import express from 'express'
import * as data from '../data.js'

const router = express.Router()

router.get('/users', (req, res) => {
    data.getAllUsers(req.query.since != null ? req.query.since : null)
        .then((users) => {
            res.json({users: users})
        })
        .catch(error => {
            res.status(412).json({ msg: error.message })
        })
})

router.get('/users/:username/details', (req, res) => {
    data.getUser(req.params.username)
        .then((details) => {
            res.json({details: details})
        })
        .catch(error => {
            res.status(412).json({ msg: error.message })
        })
})

router.get('/users/:username/repos', (req, res) => {
    data.getRepo(req.params.username)
        .then((repos) => {
            res.json({repos: repos})
        })
        .catch(error => {
            res.status(412).json({ msg: error.message })
        })
})

export default router
