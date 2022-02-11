import { useEffect, useState } from "react";
import { getCitizens } from "../../service";


const Main = () => {
    const [citizens, setCitizens] = useState([]);

    console.log('citizens 1', citizens);

    useEffect(() => {
        getCitizens('Москва г.', 'Пресненский р-н', 'Гашека ул.').then((res) => setCitizens(res.data));
        console.log('citizens 2', citizens);
    }, []);

    console.log('citizens 3', citizens);
    return (
        <div>
            <span>{citizens.map((citizen)=> citizen.city)}</span>
        </div>
    )
}

export default Main;