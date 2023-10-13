
const Card = () => {
    return (
        <div className=" bg-neutral-900 cursor-pointer w-56 h-60 rounded-lg ">
            <figure className="relative mb-2 w-full h-4/5  ">
                <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-white text-xs m-2 px-3 py-0.5 ">
                    {" "}
                    Dispositivos {" "}
                </span>
                <img
                    className="w-full h-full object-cover rounded-lg "
                    src="https://png.pngtree.com/png-clipart/20180613/ourmid/pngtree-fashion-car-private-car-orange-red-car-simulation-illustration-png-image_4484916.png"
                />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    +
                </div>
            </figure>
            <p className=" flex justify-between">
                <span className="text-sm font-light text-white">Celular</span>
                <span className="text-lg font-medium text-white">500.000</span>
            </p>
            
        </div>
        
        
    );
};
export default Card;