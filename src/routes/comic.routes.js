import express from 'express';

const router = express.Router();

import { createComic } from '../controller/book.js';

try {
    
    router.post('/create', createComic);
} catch (error) {
    console.log(`router error`, error);
    
}

export default router;