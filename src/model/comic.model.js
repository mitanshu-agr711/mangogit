import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const comicSchema = new mongoose.Schema({
  book_Name: {
    type: String,
    required: true,
    validate: {
      validator: value => /^[a-zA-Z0-9\s\-\':.,]+$/.test(value),
      message: 'Book name must only contain letters, numbers, spaces, hyphens, apostrophes, periods, and commas.',
    },
  },

  authore_Name: {
    type: String,
    required: true,
    validate: {
      validator: value => /^[a-zA-Z0-9\s\-\'.,]+$/.test(value),
      message: 'Author name must only contain letters, numbers, spaces, hyphens, apostrophes, periods, and commas.',
    },
  },

  yearOfPublication: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: 'Year must be a valid integer.',
    },
  },

  price: {
    type: Number,
    required: true,
  },

  discount: { 
    type: Number,
     default: 0 
    },

  numberOfPages: 
  { type: Number, 
    required: true 
  },

  condition: {
    type: String,
    required: true,
    enum: ['New', 'Old', 'Used'],
  },

  description: {
    type: String,
    validate: {
      validator: value => !value || /^[a-zA-Z0-9\s\-\'.,]+$/.test(value),
      message: 'Description must only contain letters, numbers, spaces, hyphens, apostrophes, periods, and commas.',
    },
  },
},
{ timestamps: true });
comicSchema.plugin(mongoosePaginate);

export const Comic = mongoose.model("Comic", comicSchema);
