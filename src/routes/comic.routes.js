import express from 'express';
const router = express.Router();

import { comicBookController } from '../controller/book.js';

router.post('/create', comicBookController.createComicBook);
router.get('/get', comicBookController.getComicBooks);
router.get('/:id', comicBookController.getComicBook);

export default router;
