
import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import { categories } from "./categoriesData";
import CategoryBox from "./CategoryBox";
import { useEffect, useState } from "react";
import FilterModal from "../Modal/FilterModal";
import { useContext } from "react";
import { FilterContext } from "../../providers/FilterProvider";
import { getAllRooms } from "../../api/rooms";
import { PiSlidersHorizontalBold } from "react-icons/pi";


const Categories = () => {
    const [params, setParams] = useSearchParams();
    // const [minPrice, setMinPrice] = useState(0);
    // const [maxPrice, setMaxPrice] = useState(3000);
    // const [price, setPrice] = useState(3000);
    // const [rooms, setRooms] = useState([]);
    const category = params.get('category')
    const [isOpen, setIsOpen] = useState(false);
    const [showRooms, setShowRooms] = useState([]);
    const { price, setPrice, handleFilter, setBathRooms, setBedRooms, bedrooms, bathrooms, temData, change } = useContext(FilterContext)

    useEffect(() => {
        getAllRooms()
            .then(data => setShowRooms(data))
    }, [])


    useEffect(() => {
        const filterByPrice = temData.filter(room => room.price <= price);
        if (bedrooms && bathrooms) {
            const filterBybedRoomsAndbathRooms = filterByPrice.filter(room => +room.bedrooms <= bedrooms && room.bathrooms <= bathrooms)
            setShowRooms(filterBybedRoomsAndbathRooms);
            return;
        }
        else if (bedrooms) {
            const filterBybedRooms = filterByPrice.filter(room => +room.bedrooms <= bedrooms)
            setShowRooms(filterBybedRooms);
            return;
        }
        else if (bathrooms) {
            const filterBybathRooms = filterByPrice.filter(room => room.bathrooms <= bathrooms)
            setShowRooms(filterBybathRooms);
            return;
        }
        else {
            setShowRooms(filterByPrice)
        }

    }, [bathrooms, bedrooms, price, change])


    const closeModal = () => {
        setIsOpen(false);
    };

    const handleModal = () => {
        handleFilter();
    };

    const handleClearAll = () => {
        console.log('cleare.......')
        setPrice(3000);
        setBedRooms(null)
        setBathRooms(null)
    }

    return (
        <Container>
            <div className="flex items-center gap-6 ">
                <div className="pt-4 flex-1 flex flex-row items-center justify-between overflow-x-auto">
                    {
                        categories.map(item => (
                            <CategoryBox
                                label={item.label}
                                icon={item.icon}
                                key={item.label}
                                selected={category === item.label}
                            />
                        ))
                    }
                </div>
                <div className="px-4 py-3 border-[1px] flex items-center gap-2 rounded-xl mt-3 font-semibold text-[14px]">
                    <PiSlidersHorizontalBold />
                    <h4
                        onClick={() => setIsOpen(true)}
                    >
                        Filters
                    </h4>
                </div>
                <FilterModal
                    isOpen={isOpen}
                    closeModal={closeModal}
                    price={price}
                    setPrice={setPrice}
                    setBathRooms={setBathRooms}
                    setBedRooms={setBedRooms}
                    handleClearAll={handleClearAll}
                    showRooms={showRooms}
                    handleModal={handleModal}
                // handleFilter={handleFilter}
                />
            </div>
        </Container>
    );
};

export default Categories;