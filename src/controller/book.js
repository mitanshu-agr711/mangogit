import { ApiResponse } from '../utils/apiresponse.js';
import { Apierror } from '../utils/apierror.js';
import { Comic } from '../model/comic.model.js';

// Create a new comic book
const createComicBook = async (req, res) => {
  try {
    const { book_Name, authore_Name, yearOfPublication, price, discount, condition, description, numberOfPages } = req.body;

    if ([book_Name, authore_Name, condition].some((field) => !field?.trim()) || yearOfPublication == null || price == null || discount == null) {
      throw new Apierror(400, "All information is required");
    }

    const newComic = await Comic.create({
      book_Name,
      authore_Name,
      yearOfPublication,
      price,
      discount,
      condition,
      description,
      numberOfPages,
    });

    return res.status(201).json(new ApiResponse(201, newComic, "Comic created successfully"));

  } catch (error) {
    return res.status(error.statusCode || 500).json(new ApiResponse(error.statusCode || 500, null, error.message || "Something went wrong"));
  }
};

// Get all comic books with pagination, filtering, and sorting
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
      sort: sort ? { [sort]: 1 } : { createdAt: -1 },
    };

    const comicBooks = await Comic.paginate(query, options);
    return res.status(200).json(new ApiResponse(200, comicBooks, "Comic books retrieved successfully"));

  } catch (error) {
    return res.status(500).json(new ApiResponse(500, null, "Failed to retrieve comics"));
  }
};

// Get a single comic book by ID
const getComicBook = async (req, res) => {
  try {
    const comicBook = await Comic.findById(req.params.id);
    if (!comicBook) throw new Apierror(404, "Comic book not found");

    return res.status(200).json(new ApiResponse(200, comicBook, "Comic book retrieved successfully"));
  } catch (error) {
    return res.status(error.statusCode || 500).json(new ApiResponse(error.statusCode || 500, null, error.message || "Failed to retrieve comic book"));
  }
};

// Update a comic book
const updateComicBook = async (req, res) => {
  try {
    const comicBook = await Comic.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!comicBook) throw new Apierror(404, "Comic book not found");

    return res.status(200).json(new ApiResponse(200, comicBook, "Comic book updated successfully"));
  } catch (error) {
    return res.status(error.statusCode || 500).json(new ApiResponse(error.statusCode || 500, null, error.message || "Failed to update comic book"));
  }
};

// Delete a comic book
const deleteComicBook = async (req, res) => {
  try {
    const comicBook = await Comic.findByIdAndDelete(req.params.id);
    if (!comicBook) throw new Apierror(404, "Comic book not found");

    return res.status(200).json(new ApiResponse(200, null, "Comic book deleted successfully"));
  } catch (error) {
    return res.status(error.statusCode || 500).json(new ApiResponse(error.statusCode || 500, null, error.message || "Failed to delete comic book"));
  }
};

export const comicBookController = {
  createComicBook,
  getComicBooks,
  getComicBook,
  updateComicBook,
  deleteComicBook,
};
