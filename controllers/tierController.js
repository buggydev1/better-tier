const express = require('express')
const router = express.Router();
const Tier = require('../models/Tier')

//index

router.get('/', async (req, res) => {
    try {
        const foundTier = await Tier.find({});
        res.status(200).json(foundTier) 
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
})

//Create


router.post('/', async (req, res) => {
    
    try {
        
        const createdTier = await Tier.create(req.body);
        res.status(200).json(createdTier) 
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
})

// show

router.get('/:id', async (req, res) => {
    try {
        const foundTeir = await Tier.findById(req.params.id);
        res.status(200).json(foundTier) 
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
})


router.get('/byName/:name/', async (req, res) => {
    try {
        const foundTier = await Tier.findOne(req.params.id);
        res.status(200).json(foundTier) 
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
})

//Update

router.put('/:id', async (req, res) => {
    try {
        const updateTier = await Tier.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updateTier) 
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
})

//delete

router.delete('/:id', async (req, res) => {
    try {
        const deletedTier = await Tier.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedTier) 
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
})






module.exports = router