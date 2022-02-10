/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const fs = require('fs');
const path = require('path');

exports.seed = async function(knex) {
  try {
    const cities = await JSON.parse(fs.readFileSync(path.join(__dirname, 'cities.json')));
    const dataCities = [];
    for (let i = 0; i < cities.length; i++){
      dataCities.push({id: cities[i].id, name: cities[i].name, data: cities[i].data});
    }
    await knex('cities').del()
    .then(async function () {
      return await knex('cities').insert(dataCities);
      }
    );
    
    const citizens = await JSON.parse(fs.readFileSync(path.join(__dirname, 'citizens.json')));
    const dataCitizens = [];
    for (let i = 0; i < citizens.length; i++){
      const groups = {};
      for (let e = 0; e < citizens[i].groups.length; e++){
          groups[citizens[i].groups[e].type] = citizens[i].groups[e].name;
      }
      dataCitizens.push({city_id: citizens[i].city_id, name: citizens[i].name, city: groups.city, district: groups.district, street: groups.street});
    }
    await knex('citizens').del()
      .then(async function () {
        return await knex('citizens').insert(dataCitizens);
      }
    );
  } catch (e){
    console.log(`ERROR seeds initVal: ${e}`);
  }
};
