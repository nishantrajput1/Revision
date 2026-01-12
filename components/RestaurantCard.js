const RestaurantCard = (prop)=>{
    const {resData} = prop;
    const {name,img,avgRating}=resData;  
    return (
        <div className="res-card"> 
            <img className="res-image" src={img} alt="img" />
            <h2> {name}</h2>
            <h2>Name of Restaurant</h2>
            <h2>{avgRating}</h2>
            <h2>Delivery Time of Restaurant</h2>
        </div>
    )
}
export default RestaurantCard;