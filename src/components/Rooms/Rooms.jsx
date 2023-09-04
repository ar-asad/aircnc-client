import { useContext, useEffect, useState } from "react";
import Loader from "../Shared/Loader";
import Container from "../Shared/Container";
import Card from "./Card";
import Heading from "../Heading/Heading";
import { useSearchParams } from "react-router-dom";
import { FilterContext } from "../../providers/FilterProvider";
import WishListModal from "../Modal/WishListModal";
import { getCountRoom, getWishListRoom } from "../../api/rooms";
import { AuthContext } from "../../providers/AuthProvider";



const Rooms = () => {
    const { rooms, loading, setRoomCategory, page, setPage, setSize, size } = useContext(FilterContext);
    const { user } = useContext(AuthContext);
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    const [pageCount, setPageCount] = useState(0);
    const [wishListRoom, setWishListRoom] = useState([]);

    // useEffect(() => {
    //     getCountRoom()
    //         .then(data => setPageCount(Math.ceil(data.count / size)))
    // }, [size])

    useEffect(() => {
        setRoomCategory(category);
    }, [category, setRoomCategory]);

    // Get wishListRoom
    useEffect(() => {
        getWishListRoom(user?.email)
            .then(data => setWishListRoom(data))
    }, [user])

    if (loading) {
        return <Loader />
    }

    return (
        <Container>
            {
                rooms && rooms.length > 0 ? (
                    <div>
                        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
                            {[...rooms].splice(Number(page * size), Number(size)).map((room, index) => (
                                <Card
                                    key={index}
                                    room={room}
                                    wishListRoom={wishListRoom}
                                    user={user}
                                />
                            ))}

                        </div>
                        {<div className="mt-16 mb-10 text-center">
                            {
                                [...Array(Math.ceil(rooms?.length / size)).keys()].map((number, i) => <button
                                    onClick={() => setPage(number)}
                                    className={`px-4 py-2 border-red-400 border-[1px] transition rounded-sm ${page === number ? 'bg-red-400 text-white' : ''}`}
                                    key={i}>{number + 1}</button>)
                            }
                            <select
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                                className="px-4 py-2 border-red-400 border-[1px] transition rounded-sm">
                                <option value="5" >5</option>
                                <option value="7" >7</option>
                                {/* <option value="15">15</option>
                                <option value="15">20</option> */}
                            </select>
                        </div>}
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
        </Container >
    );
};

export default Rooms;