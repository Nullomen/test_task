import axios from 'axios';

export const getCitizens = async (city, district, street) => {
    return axios.get(`http://localhost:8080/getCitizens?city=${city}&district=${district}&street=${street}#`);
    // return response.data;
};

// http://localhost:3000/getCitizens?city=Москва г.&district=Пресненский р-н&street=Гашека ул.