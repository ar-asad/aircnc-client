import { createContext, useEffect, useState } from "react";
import { getAllRooms, getPricesRooms } from "../api/rooms";



export const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
    const [price, setPrice] = useState(3000);
    const [bedrooms, setBedRooms] = useState(null);
    const [bathrooms, setBathRooms] = useState(null);
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [roomCategory, setRoomCategory] = useState('');
    const [change, setChange] = useState(false);

    const [temData, setTemData] = useState([]);

    // pagination state
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);

    // console.log(rooms)
    // useEffect(() => {
    //     setLoading(true)
    //     getPricesRooms()
    //         .then(data => setPrice(data?.maxPrice))
    //     setLoading(false)
    // }, [])

    const filteredData = (filteredData) => {
        const filterByPrice = filteredData.filter(room => room.price <= price);
        if (bedrooms && bathrooms) {
            const filterBybedRoomsAndbathRooms = filterByPrice.filter(room => +room.bedrooms <= bedrooms && room.bathrooms <= bathrooms)
            setRooms(filterBybedRoomsAndbathRooms);
            setTemData(filteredData);
            setLoading(false)

            return;
        }
        else if (bedrooms) {
            const filterBybedRooms = filterByPrice.filter(room => +room.bedrooms <= bedrooms)
            setRooms(filterBybedRooms);
            setTemData(filteredData);
            setLoading(false)

            return;
        }
        else if (bathrooms) {
            const filterBybathRooms = filterByPrice.filter(room => room.bathrooms <= bathrooms)
            setRooms(filterBybathRooms);
            setTemData(filteredData);
            setLoading(false)
            return;
        }
        else {
            setRooms(filterByPrice)
            setTemData(filteredData);
            setLoading(false)
        }
    }

    // console.log(temData);
    console.log(rooms)

    useEffect(() => {
        setLoading(true);
        getAllRooms()
            .then(data => {
                if (roomCategory) {
                    const filtered = data.filter(room => room.category === roomCategory)
                    setPage(0);
                    filteredData(filtered);
                    setChange(() => !change)
                }
                else {
                    filteredData(data);
                    setChange(() => !change)
                }
            })
            .catch(err => console.log(err))
    }, [roomCategory])


    const handleFilter = () => {
        const filterByPrice = temData.filter(room => room.price <= price);
        if (bedrooms && bathrooms) {
            const filterBybedRoomsAndbathRooms = filterByPrice.filter(room => +room.bedrooms <= bedrooms && room.bathrooms <= bathrooms)
            setRooms(filterBybedRoomsAndbathRooms);
            return;
        }
        else if (bedrooms) {
            const filterBybedRooms = filterByPrice.filter(room => +room.bedrooms <= bedrooms)
            setRooms(filterBybedRooms);
            return;
        }
        else if (bathrooms) {
            const filterBybathRooms = filterByPrice.filter(room => room.bathrooms <= bathrooms)
            setRooms(filterBybathRooms);
            return;
        }
        else {
            setRooms(filterByPrice)
        }
        setRooms(filterByPrice)

    }



    const filterInfo = {
        handleFilter,
        price,
        setPrice,
        setBedRooms,
        setBathRooms,
        bedrooms,
        bathrooms,
        rooms,
        temData,
        setRoomCategory,
        loading,
        roomCategory,
        change,
        page,
        setPage,
        setSize,
        size

    }

    return (
        <FilterContext.Provider
            value={filterInfo}>
            {children}
        </FilterContext.Provider>
    )
};

export default FilterProvider;