const RestaurantCard = (prop)=>{
    const {resData} = prop;
    const {name,img,avgRating}=resData;  
    return (
        <div className="res-card m-4 p-4 w-70 border hover:shadow-2xl hover:cursor-pointer bg-gray-100  "> 
            <img className="res-image" src={img} alt="img" />
            <h2 className="font-bold py-2 text-xl" > {name}</h2>
            <h2>Name of Restaurant</h2>
            <h2>{avgRating}</h2>
            <h2>Delivery Time of Restaurant</h2>
        </div>
    )
}
export default RestaurantCard;