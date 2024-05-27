var express = require('express');
const { getCategory, addCategory, updateCategory, deleteCategory } = require('../controllers/category');
const validate = require('../middleware/validate');
const { body } = require('express-validator');
const router = express.Router();

const validation = [
    body("name").notEmpty().withMessage("Name is required")
];

router.get('/', getCategory);
router.post('/create', validate(validation), addCategory);
router.put('/update/:id', validate(validation), updateCategory);
router.delete('/delete/:id', deleteCategory);


module.exports = router;