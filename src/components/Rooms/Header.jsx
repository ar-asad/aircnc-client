import Heading from "../Heading/Heading";


const Header = () => {
    return (
        <div className="pt-28">
            <Heading
                title='Veluvana Bali - Owl Bamboo House'
                subtitle='Sidemen, Indonesia'
            />
            <div className='w-full md:h-[60vh] overflow-hidden rounded-xl mt-6'>
                <img
                    className='object-cover w-full'
                    src='https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg'
                    alt='header image'
                />
            </div>
        </div>
        //     <>
        //     <Heading
        //       title='Veluvana Bali - Owl Bamboo House'
        //       subtitle='Sidemen, Indonesia'
        //     />

        //   </>
    );
};

export default Header;