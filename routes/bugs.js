import express from 'express';

import {getBugs, createBug, updateBug} from '../controllers/bugs.js';

const router = express.Router();

router.get('/', getBugs);
router.post('/', createBug);
router.patch('/:id', updateBug);

export default router;