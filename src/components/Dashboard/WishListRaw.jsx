import { useState } from "react";
import DeleteModal from "../Modal/DeleteModal";
import { deleteWishListRoom } from "../../api/rooms";
import { toast } from "react-hot-toast";
import { format } from "date-fns";
import { Link } from "react-router-dom";
// import { format } from "date-fns";


const WishListRaw = ({ list, fetchWishList }) => {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false);
    };

    console.log(list._id)

    const modalHandler = (id) => {
        deleteWishListRoom(id).then(data => {
            console.log(data)
            toast.success('Yout wishList deleted')
            fetchWishList()
        })
        closeModal()
    }

    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <Link to={`/room/${list.room._id}`}>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <div className='block relative'>
                                <img
                                    alt='profile'
                                    src={list?.room?.image}
                                    className='mx-auto object-cover rounded h-10 w-15 '
                                />
                            </div>
                        </div>
                        <div className='ml-3'>
                            <p className='text-gray-900 whitespace-no-wrap'>{list?.room?.title}</p>
                        </div>
                    </div>
                </Link>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{list?.room?.location}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>${list?.room?.price}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>
                    {format(new Date(list?.room?.from), 'P')}
                </p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>
                    {format(new Date(list?.room?.to), 'P')}
                </p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span
                    onClick={() => setIsOpen(true)}
                    className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
                >
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Cancel</span>
                </span>
                <DeleteModal
                    isOpen={isOpen}
                    closeModal={closeModal}
                    modalHandler={modalHandler}
                    id={list?._id}
                />
            </td>
        </tr>

    )
};

export default WishListRaw;