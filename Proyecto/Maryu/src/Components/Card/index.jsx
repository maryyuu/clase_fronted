
const Card = (data) => {
    return (
        <div className=" bg-neutral-900 cursor-pointer w-56 h-60 rounded-lg ">
            <figure className="relative mb-2 w-full h-4/5  ">
                <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-white text-xs m-2 px-3 py-0.5 ">
                    { data.data.category.name}

                </span>
                <img
                    className="w-full h-full object-cover rounded-lg "
                    src={data.data.images}
                    alt=""
                    srcset=""
                />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    +
                </div>
            </figure>
            <p className=" flex justify-between">
                <span className="text-sm font-light text-white">{ data.data.title}</span>
                <span className="text-lg font-medium text-white">{ data.data.price}</span>
            </p>
            
        </div>
        
        
    );
};
export default Card;