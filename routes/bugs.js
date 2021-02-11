import express from 'express';

import {getBugs, createBug, updateBug, deleteBug} from '../controllers/bugs.js';

const router = express.Router();

router.get('/', getBugs);
router.post('/', createBug);
router.patch('/:id', updateBug);
router.delete('/:id', deleteBug);

export default router;