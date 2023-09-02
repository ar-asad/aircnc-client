import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";



const FilterModal = ({ closeModal, isOpen, showRooms, handleModal, price, setPrice, setBedRooms, setBathRooms, handleClearAll, bathrooms, bedrooms }) => {

    // console.log(showRooms.length);
    const Bedrooms = [
        {
            "id": 1,
            "Number": 1
        },

        {
            "id": 2,
            "Number": 2
        },

        {
            "id": 3,
            "Number": 3
        },

        {
            "id": 4,
            "Number": 4
        },

        {
            "id": 5,
            "Number": 5
        },

        {
            "id": 6,
            "Number": 6
        },

        {
            "id": 7,
            "Number": 7
        },

        {
            "id": 8,
            "Number": 8
        }
    ]

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto max-w-max mx-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    as='h3'
                                    className='text-lg text-center font-medium leading-6 text-gray-900'
                                >
                                    Filter
                                </Dialog.Title>
                                <div className='mt-2'>

                                    {/* price filter */}
                                    <div className="my-4">
                                        <h3 className="font-medium text-lg mb-2">Price</h3>
                                        <span className="mb-2">${price}</span>
                                        <p className='text-sm text-gray-500'>
                                            <input
                                                onChange={(e) => setPrice(e.target.value)}
                                                type="range" min={0} max={3000} value={price} className="range range-accent" />
                                        </p>
                                    </div>
                                    <hr></hr>

                                    {/* bedrooms filter */}
                                    <div className="my-4">
                                        <h3 className="font-medium text-lg mb-3">Bedrooms</h3>
                                        <div className="flex items-center gap-3 overflow-x-auto pb-3">
                                            {
                                                Bedrooms.map(bed =>
                                                    // console.log(bath.Number)
                                                    <p
                                                        onClick={() => setBedRooms(bed.Number)}
                                                        key={bed.id}
                                                        className={`border-[1px] px-6 py-2 rounded-full ${bed.Number == bedrooms ? 'bg-red-500 text-white' : ''
                                                            }`} > {bed.Number}</p>
                                                )
                                            }
                                        </div>
                                    </div>

                                    {/* bathrooms filter */}
                                    <div className="my-4">
                                        <h3 className="font-medium text-lg mb-3 mt-8">Bathrooms</h3>
                                        <div className="flex items-center gap-3 overflow-x-auto pb-3">
                                            {
                                                Bedrooms.map(bath =>
                                                    // console.log(bath.Number)
                                                    <p
                                                        onClick={() => setBathRooms(bath.Number)}
                                                        key={bath.id}
                                                        className={`border-[1px] px-6 py-2 rounded-full ${bath.Number == bathrooms ? 'bg-red-500 text-white' : ''
                                                            }`} > {bath.Number}</p>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                                <hr className='mt-8 ' />
                                <div className='flex mt-2 justify-around'>
                                    <button
                                        onClick={() => {
                                            handleClearAll()
                                        }}
                                        type='button'
                                        className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 underline underline-offset-2'
                                    >
                                        Clear all
                                    </button>
                                    <button
                                        type='button'
                                        className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                                        onClick={() => {
                                            closeModal()
                                            handleModal()
                                        }}


                                    >
                                        Show {showRooms.length} rooms
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition >
    );
};

export default FilterModal;