const { Schema, model } = require("mongoose")

const tileSchema = new Schema({
    image_url: {type:String},
    name: {type:String},
    source: {type:String}

})

const tierInfoSchema = new Schema({
    color: {type:String},
    tiername: {type:String}
})

const tierSchema = new Schema({
    title: { type:String, require: true, unique:true},
    number_of_tiers: {type: Number, require:true},
    tier_info:[tierInfoSchema], 
    tiles: [tileSchema], 
})

const Tier = model('Tier', tierSchema);

module.exports = Tier