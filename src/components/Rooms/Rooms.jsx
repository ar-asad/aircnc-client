import { useContext, useEffect, useState } from "react";
import Loader from "../Shared/Loader";
import Container from "../Shared/Container";
import Card from "./Card";
import Heading from "../Heading/Heading";
import { useSearchParams } from "react-router-dom";
import { FilterContext } from "../../providers/FilterProvider";
import WishListModal from "../Modal/WishListModal";



const Rooms = () => {
    const { rooms, loading, setRoomCategory } = useContext(FilterContext);
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };


    useEffect(() => {
        setRoomCategory(category);
    }, [category, setRoomCategory]);

    // Save WishList card in database
    const handleWishlist = () => {
        console.log('wishlist.............')
    }

    if (loading) {
        return <Loader />
    }
    return (
        <Container>
            {
                rooms && rooms.length > 0 ? (
                    <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
                        {rooms.map((room, index) => (
                            <Card
                                key={index}
                                room={room}
                                setIsOpen={setIsOpen}

                            />
                        ))}
                        <WishListModal
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            handleWishlist={handleWishlist}
                            closeModal={closeModal}
                        />
                    </div>
                )
                    :
                    (
                        <div className="min-h-[calc(100vh-300px)] flex items-center justify-center">
                            <Heading
                                title='No Rooms Available In This Category!'
                                subtitle='Please Select Other Categories.'
                                center={true}
                            />
                        </div>
                    )
            }
        </Container>
    );
};

export default Rooms;