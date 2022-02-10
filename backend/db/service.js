const environment = process.env.NODE_ENV || 'development';    
const configuration = require('../knexfile')[environment]; 
const database = require('knex')(configuration);

exports.getAllCities = async () => {
    try {
        return await database.select().from('cities');
    } catch (e) {
        console.error(e);
    }
}

exports.getAllCitizens = async () => {
    try {
        return await database.select().from('citizens');
    } catch (e) {
        console.error(e);
    }
}

exports.getCitizens = async (city, district, street) => {
    const selectData = ['citizens.name'];
    const filterData = {};
    if (!!city) {
        selectData.push('citizens.city');
        filterData['citizens.city'] = city;
    };
    if (!!district) {
        selectData.push('citizens.district');
        filterData['citizens.district'] = district;
    };
    if (!!street) {
        selectData.push('citizens.street');
        filterData['citizens.street'] = street;
    };
    if (!!city) selectData.push('cities.data');

    try {
        return await database('citizens').join('cities', 'citizens.city_id', 'cities.id')
            .select(selectData)
            .where(filterData);
    } catch (e) {
        console.error(e);
    }
}
