const { where } = require("sequelize");
const category = require('../db/tables/category')
const generateId = require("../helpers/generateId");
const responseHelpers = require("../helpers/responseHelper");

async function getCategory(req, res) {
    try {
        const data = await category.findAll({
            attributes: ['id', 'name']
        });
        return responseHelpers(res, 200, data)
    }
    catch (error) {
        console.log(error)
        return responseHelpers(res, 500, { message: 'Internal server error' });
    }
};

async function addCategory(req, res) {
    const { name } = req.body;
    const id = await generateId(5, Number)
    try {
        await category.create({ id, name });
        return responseHelpers(res, 201, { message: 'Successfully created category' });
    }
    catch (error) {
        console.log(error)
        return responseHelpers(res, 500, { message: 'Internal server error' });
    }
};

async function updateCategory(req, res) {
    const { name } = req.body;

    try {
        const [updated] = await category.update(
            { name },
            {
                where: { id: req.params.id }
            }
        );

        if (updated) {
            return responseHelpers(res, 200, { message: 'Successfully updated category' });
        } else {
            return responseHelpers(res, 404, { message: 'Category not found' });
        }
    } catch (error) {
        console.error(error);
        return responseHelpers(res, 500, { message: 'Internal server error' });
    }
};


async function deleteCategory(req, res) {
    try {
        const deleted = await category.destroy({
            where: {
                id: req.params.id
            }
        });

        if (deleted) {
            return responseHelpers(res, 200, { message: 'Successfully deleted category' });
        } else {
            return responseHelpers(res, 404, { message: 'Category not found' });
        }
    } catch (error) {
        console.log(error);
        return responseHelpers(res, 500, { message: 'Internal server error' });
    }
};


module.exports = { getCategory, addCategory, updateCategory, deleteCategory }