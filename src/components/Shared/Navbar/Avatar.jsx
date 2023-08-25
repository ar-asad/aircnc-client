import { useContext } from 'react';
import avatar from '../../../assets/images/placeholder.jpg';
import { AuthContext } from '../../../providers/AuthProvider';

const Avatar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <img
                className='rounded-full'
                referrerPolicy='no-referrer'
                src={user && user.photoURL ? user.photoURL : avatar}
                alt="avatar"
                width='30'
                height='30'
            />
        </div>
    );
};

export default Avatar;