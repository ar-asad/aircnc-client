import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


const HeartButtonfill = () => {
    return (
        <div
            className='
        relative
        hover:opacity-80
        transition
        cursor-pointer
      '
        >
            <AiOutlineHeart
                size={28}
                className='
                
        fill-white   
          absolute
          -top-[2px]
          -right-[2px]
        '
            />
            <AiFillHeart
                size={24}
                className='fill-red-600'
            />
        </div>
    );
};

export default HeartButtonfill;