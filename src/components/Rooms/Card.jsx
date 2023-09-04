import { Link } from "react-router-dom";
import HeartButton from "../Button/HeartButton";
import WishListModal from "../Modal/WishListModal";
import { useState } from "react";
import { addWishListRoom } from "../../api/rooms";
import { toast } from "react-hot-toast";
import HeartButtonfill from "../Button/HeartButtonfill";


const Card = ({ room, user, wishListRoom }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };


    // Save WishList card in database
    const handleWishlist = (room) => {
        setLoading(true)
        const wishListRoom = {
            room,
            email: user.email,
            name: user?.displayName
        }
        addWishListRoom(wishListRoom)
            .then(data => {
                setLoading(false)
                toast.success('Room save a WishList!')
                closeModal(false)
                console.log(data)
            })
    }

    return (
        <Link to={`/room/${room._id}`} className='col-span-1 cursor-pointer group'>
            <div className='flex flex-col gap-2 w-full'>
                <div
                    className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
                >
                    <img
                        className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
                        src={room.image}
                        alt='Room'
                    />
                    {
                        wishListRoom.map(room => room?.room?._id === room._id) ? <Link
                            onClick={() => {
                                setIsOpen(true)
                            }}
                            className=' absolute top-3 right-3'
                        >
                            <HeartButtonfill />
                        </Link> :
                            <h2 className=' absolute top-3 right-3'>null</h2>
                    }
                </div>
                <div className='font-semibold text-lg'>{room.location}</div>
                <div className='font-light text-neutral-500'>
                    5 nights . {room.from}-{room.to}
                </div>
                <div className='flex flex-row items-center gap-1'>
                    <div className='font-semibold'>$ {room.price}</div>
                    <div className='font-light'>night</div>

                </div>
            </div>
            <WishListModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleWishlist={handleWishlist}
                closeModal={closeModal}
                room={room}
                loading={loading}
            />
        </Link >
    );
};

export default Card;