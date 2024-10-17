

import { Comic } from '../model/comic.model.js';


 const createComicBook = async (req, res) => {
  try {
    const { book_Name, authore_Name, yearOfPublication, price, discount, condition, description,numberOfPages } = req.body;

if ([book_Name, authore_Name, condition].some((field) => !field?.trim()) || yearOfPublication == null || price == null || discount == null) {
  return res.status(400).json({ error: "All required information is needed" });
}



    const newComic = await Comic.create({
      book_Name,
      authore_Name,
      yearOfPublication,
      price,
      discount,
      condition,
      description,
      numberOfPages
    });

    if (newComic) {
      return res.status(201).json({ message: "Comic created successfully" });
    }
    return res.status(500).json({ error: "Failed to create comic" });

  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};


 const getComicBooks = async (req, res) => {
  try {
    const { page = 1, limit = 10, sort, ...filters } = req.query;
    const query = {};

    Object.keys(filters).forEach(key => {
      if (filters[key]) query[key] = filters[key];
    });

    
    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: sort ? { [sort]: 1 } : { createdAt: -1 }
    };

  
    const comicBooks = await Comic.paginate(query, options);
    return res.json(comicBooks);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getComicBook = async (req, res) => {
  try {
    const comicBook = await Comic.findById(req.params.id);
    if (!comicBook) return res.status(404).json({ message: 'Comic book not found' });
    res.json(comicBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const comicBookController = {
  createComicBook,
  getComicBooks,
  getComicBook,

};
