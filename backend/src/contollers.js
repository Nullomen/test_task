const db = require('../db/service.js');

exports.getCitizens = async (req, res) => {
    console.log(!req.query.city, req.query.district, req.query.street);
    console.log('controller', await db.getCitizens(req.query.city, req.query.district, req.query.street));
    try {
        if (!req.query.city) {
            return res.status(500).send({ error: 'Need some input' });
        };
        if ((!!req.query.city && !!req.query.district && !!req.query.street)) {
            console.log('sda')
            return res.send(await db.getCitizens(req.query.city, req.query.district, req.query.street));
        };
        if ((!!req.query.city && !!req.query.district )) {
            return res.send(await db.getCitizens(req.query.city, req.query.district));
        };
        return res.send(await db.getCitizens(req.query.city));
    } catch (error) {
        return res.status(500).send({ error: `Cannot get citizens. Server error: ${error.message}` });
    }
};
