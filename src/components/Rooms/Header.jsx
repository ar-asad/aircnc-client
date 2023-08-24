import Heading from "../Heading/Heading";


const Header = ({ roomData }) => {
    return (
        <div className="pt-32">
            <Heading title={roomData.category} subtitle={roomData.location} />
            <div className='w-full md:h-[60vh] overflow-hidden rounded-xl mt-4'>
                <img
                    className='object-cover w-full'
                    src={roomData.image}
                    alt='header image'
                />
            </div>
        </div>
    );
};

export default Header;