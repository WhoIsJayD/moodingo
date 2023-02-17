import express from 'express';
import {register} from '../controllers/auth.js';

const router = express.Router();
router.post('/register', register)
router.get('/auth.css', (req, res) => {
    res.sendFile('auth.css', {root: './styles'})
})
module.exports = router;