

const CategoryBox = ({ label, icon: Icon }) => {

  const selected = "";

  const handleClick = () => {

  }

  return (
    <div
      onClick={handleClick}
      className={`
            flex
            flex-col
            items-center
             justify-center
             gap-2
             p-3
             border-b-2
             hover:text-neutral-800
              transition
             ${selected
          ? 'border-b-neutral-800 text-neutral-800'
          : 'border-transparent text-neutral-500'
        }
            `}
    >
      <Icon size={26} />
      <div className='text-sm font-medium'>{label}</div>
    </div>
  );
};

export default CategoryBox;

{/* <div
      onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${
          selected
            ? 'border-b-neutral-800 text-neutral-800'
            : 'border-transparent text-neutral-500'
        }
     
      `}
    >
      <Icon size={26} />
      <div className='text-sm font-medium'>{label}</div>
    </div> */}