import avatar from '../../../assets/images/placeholder.jpg';

const Avatar = () => {
    const user = '';
    return (
        <div>
            <img
                className='rounded-full'
                src={user && user.photoURL ? user.photoURL : avatar}
                alt="avatar"
                width='30'
                height='30'
            />
        </div>
    );
};

export default Avatar;