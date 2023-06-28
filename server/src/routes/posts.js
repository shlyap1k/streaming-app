const express = require('express')
const router = express.Router()
const Post = require('../models/post-model')

router.post('/posts', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    await post.save()
    await res.send({code: 200})
})
router.get('/posts', async (req, res) => {
    const posts = await Post.find({}, 'title description')
    await res.send({ posts: posts })
})

router.get('/posts/:id', async (req, res) => {
    console.log(req.params.id)
    const post = await Post.findById(req.params.id, 'title description')
    await res.send(post)
})

router.put('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id, 'title description')
    if (req.body.title) {
        post.title = req.body.title
    }
    if (req.body.description) {
        post.description = req.body.description
    }
    await post.save()
    await res.sendStatus(200)
})

router.delete('/posts/:id', async (req, res) => {
    await Post.remove({ _id: req.params.id })
    await res.sendStatus(200)
})

module.exports = router;