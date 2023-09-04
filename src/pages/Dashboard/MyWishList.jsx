import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { getWishListRoom } from "../../api/rooms";
import EmptyState from "../../components/Shared/EmptyState";
import Loader from "../../components/Shared/Loader";
import WishListRaw from "../../components/Dashboard/WishListRaw";


const MyWishList = () => {
    const [wishList, setWishList] = useState([]);
    const [loading, setLoading] = useState([]);

    const { user } = useContext(AuthContext)

    const fetchWishList = () => {
        setLoading(true);
        getWishListRoom(user?.email).then(data => {
            setWishList(data);
            setLoading(false);
            console.log(data[0], data[1])
        })
    };

    useEffect(() => {
        fetchWishList();
    }, [user])

    if (loading) {
        <Loader></Loader>
    }

    return (
        <>
            {wishList && Array.isArray(wishList) && wishList.length > 0 ? (
                <div className='container mx-auto px-4 sm:px-8'>
                    <div className='py-8'>
                        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                                <table className='min-w-full leading-normal'>
                                    <thead>
                                        <tr>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                            >
                                                Title
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                            >
                                                Location
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                            >
                                                Price
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                            >
                                                From
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                            >
                                                To
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {wishList &&
                                            wishList.map(list => (
                                                <WishListRaw
                                                    key={list._id}
                                                    list={list}
                                                    fetchWishList={fetchWishList}
                                                />
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <EmptyState
                    message='No  data available.'
                    address='/'
                    label='Browse Rooms'
                />
            )}
        </>

    )
};

export default MyWishList;