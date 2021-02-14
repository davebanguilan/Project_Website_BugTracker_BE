import express from 'express';

import {getBugs, createBug, updateBug, deleteBug} from '../controllers/bugs.js';

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getBugs);
router.post('/', auth, createBug);
router.patch('/:id', auth, updateBug);
router.delete('/:id', auth, deleteBug);

export default router;