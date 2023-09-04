import { BiSearch } from 'react-icons/bi'
import RegionChooseModal from '../../Modal/RegionChooseModal';
import { useState } from 'react';

const Search = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
            <div className='flex flex-row justify-between items-center'>
                <div
                    onClick={() => setIsOpen(true)}
                    className='text-sm px-6 font-semibold '>
                    Anywhere
                </div>
                <div className='hidden sm:block text-sm px-6 font-semibold border-x-[2px] text-center'>
                    Any Week
                </div>
                <div className='text-sm flex flex-row items-center gap-3 pl-6 pr-2 text-gray-600 '>
                    <div className='hidden sm:block'>
                        Add Guests
                    </div>
                    <div className='p-2 bg-rose-500 rounded-full text-white'>
                        <BiSearch size={18} />
                    </div>
                </div>
            </div>
            <RegionChooseModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                // handleWishlist={handleWishlist}
                closeModal={closeModal}
            />
        </div>
    );
};

export default Search;

