import { Link } from "react-router-dom";
import HeartButton from "../Button/HeartButton";
import WishListModal from "../Modal/WishListModal";
import { useState } from "react";


const Card = ({ room }) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };


    // Save WishList card in database
    const handleWishlist = () => {
        console.log('wishlist.............')
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
                    <Link
                        onClick={() => {
                            setIsOpen(true)
                        }}
                        className=' absolute top-3 right-3'
                    >
                        <HeartButton />
                    </Link>
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
            />
        </Link >
    );
};

export default Card;