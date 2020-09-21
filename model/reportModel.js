const { truncate } = require('fs')
const mongoose = require('mongoose')


const questionSchema = new mongoose.Schema({


    Name: {
        type: String,
        required: true
    },
    Term:{
        type: String,
        required: true
    },
    RollNo:{
        type:Number,
        required: true
    },

    Class:{
        type: String,
        required: true
    },
    Section:{
        type: String,
        required: true
    },

    Session:{
        type: String,
        required: true
    },
    
    Subject_Id:{
        type: String,
        required: true
    },

    Subject_Name:{
        type: String,
        required: true
    },

    Unit:{
        type: String,
        required: true
    },

    Chapter:{
        type: String,
        required: true
    },

    Chapter_Name:{
        type: String,
        required: true
    },

    Chapter_Id:{
        type:String,
        required: true
    },
    Question_Id:{
        type: String,
        required: true
    },
    Question_Details:{
        type: String,
        required: true
    },
    Question_Marks:{
        type: Number,
        required: true
    },
    Question_Difficulty:{
        type: Number,
        required: true
    },
    Question_Importance:{
        type: String,
        required: true
    },
    Cognitive_Level:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('QuestionSchema',questionSchema)