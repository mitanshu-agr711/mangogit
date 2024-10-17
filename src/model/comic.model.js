import mongoose from "mongoose";

const comicSchema = new mongoose.Schema({
    Book_Name:{
        type: String,
        required: true,
      validate:{
        validator: value => /^[a-zA-Z0-9\s\-\'\.\,]+$/.test(value),
        message: 'Name must only contain letters, numbers, spaces, hyphens, apostrophes, periods, and commas.',
      },
    },
    Authore_Name:{
        type: String,
        required: true,
      validate:{
        validator: value => /^[a-zA-Z0-9\s\-\'\.\,]+$/.test(value),
        message: 'Name must only contain letters, numbers, spaces, hyphens, apostrophes, periods, and commas.',
      },
    },
    Year:{
        type: Number,
        required: true,
      validate:{
        validator: Number.isInteger,
        message: 'Year must be a valid integer',
      },
    },
    Price:{
        type: Number,
        required: true,
      validate:{
        validator: Number.isInteger,
        message: 'Price must be a valid integer',
      },
    },
    Discount:{
        type: Number,
        required: true,
      validate:{
        validator: Number.isInteger,
        message: 'Discount must be a valid integer ',
      },
    },
    Condition:{
        type: String,
        required: true,
      validate:{
        validator: value => /^[a-zA-Z0-9\s\-\'\.\,]+$/.test(value),
        message: 'condition must only contain letters, numbers, spaces, hyphens, apostrophes, periods, and commas.',
      },
      Enum: ['New', 'Old', 'Used'],
    },
    Description:{
        type: String,
        required: true,
      validate:{
        validator: value => /^[a-zA-Z0-9\s\-\'\.\,]+$/.test(value),
        message: 'Description must only contain letters, numbers, spaces, hyphens, apostrophes, periods, and commas.',
      },
    },
    

   
});

export const Comic= mongoose.model("Comic", comicSchema);