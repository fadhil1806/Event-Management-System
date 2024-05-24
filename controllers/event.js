const { Op } = require("sequelize");
const event = require("../db/tables/event");
const generateId = require("../helpers/generateId");
const responseHelpers = require("../helpers/responseHelper");

async function getDataEvent(req, res) {
    const {start_date, end_date, name, category} = req.query

    try {

        // documentation: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
        const whereQuery = {};

        //add symbol >= pada event_date
        if (start_date) whereQuery.event_date = { [Op.gte]: new Date(start_date) };

        //add symbol <= pada event_date
        if (end_date) whereQuery.event_date = { 
            ...whereQuery.event_date, 
            [Op.lte]: new Date(end_date) 
        };

        //like in sequelize
        if (name) whereQuery.name = { [Op.like]: `%${name}%` };

        if (category) whereQuery.category = category;
    
        console.log(whereQuery)
        const data = await event.findAll({
            where: whereQuery
        });
        
        return responseHelpers(res, 200, data);
    } catch (error) {
        console.error(error);
        return responseHelpers(res, 500, { message: 'Internal server error' });
    }


}

async function addEvent(req, res) {
    const { name, description, category, event_date, location, max_participant, status, email } = req.body
    const guru_id = req.data.id
    const id = await generateId(10)
    
    try {
        await event.create({
            id, guru_id, name, description, category, event_date, location, max_participant, status, email
        });

        return responseHelpers(res, 201, { message: 'Successfully created event' });
    }
    catch (error) {
        console.log(error);                        
        return responseHelpers(res, 500, { message: 'Internal server error' });
    };
};

async function updatedEvent(req, res) {
    const {id} = req.params
    const { name, description, category, event_date, location, max_participant, status, email } = req.body 

    const isValidData = await getDataEventByID(id)
    if(isValidData == null) return responseHelpers(res, 404, { message: 'Event not found' });

    console.log(isValidData)
    try {
       await event.update({
            name, description, category, event_date, location, max_participant, status, email
        },{
            where: { id }
        });
        return responseHelpers(res, 200, { message: 'Successfully updated event' });

    } catch (error) {
        console.error(error);
        return responseHelpers(res, 500, { message: 'Internal server error' });
    }
}

async function deleteEvent(req, res) {
    const {id} = req.params

    const isValidData = await getDataEventByID(id)
    if(isValidData == null) return responseHelpers(res, 404, { message: 'Event not found' });

    try {
        await event.destroy({
            where: {id}
        });
        return responseHelpers(res, 201, { message: 'Successfully delete event' });
    } catch (error) {
        console.log(error);
        return responseHelpers(res, 500, { message: 'Internal server error' });
    }
}

async function getDataEventByID(id) {
    return event.findOne({where: { id}})
}

module.exports = { addEvent, updatedEvent, deleteEvent, getDataEvent };