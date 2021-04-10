const express = require('express');
const routes = express.Router()

const views = __dirname + "/views/"

const profile = {
    name: "Ian Victor",
    avatar: "https://avatars.githubusercontent.com/u/42187792?v=4",

}

//request (req), response (res)
routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile"))

module.exports = routes;