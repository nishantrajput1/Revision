import { useEffect,useState } from "react";
import { useParams } from "react-router";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = ()=>{
    const {category} = useParams();
    const [ListOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurants,setfilteredRestaurants] = useState([]);
    const [searchText,setsearchText] = useState("");
    // every time the category is change we need to call the use effect
    useEffect(()=>{
        if(!category) return;
        console.log("UseEffect is Called");
        fetchData();
    },[category]);

    const fetchData = async ()=>{
        const data = await fetch(`https://free-food-menus-api-two.vercel.app/${category}`);
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json);
        setfilteredRestaurants(json);
    }



    // Category page load horaha hai
    if(ListOfRestaurants.length===0){
        return <Shimmer/>;
    }
    // console.log(ListOfRestaurants);
    return (
        <div>
            <div className="search-bar">
            <input type="text" placeholder="Enter restaurant name" value={searchText} onChange={(e)=>setsearchText(e.target.value)} />
            <button className="search-btn"  onClick={()=>{
                console.log(searchText);
                
                const filteredRestaurantslist = ListOfRestaurants.filter((Restaurant)=>{
            return Restaurant.name.toLowerCase().includes(searchText.toLowerCase()) ;
        });
        setfilteredRestaurants(filteredRestaurantslist);
            console.log("Filtere" + filteredRestaurants);
            
                
            }}>
                Search
            </button>
            <button className="filter-btn" onClick={()=>{
                const filterList = ListOfRestaurants.filter((Restaurant)=>{
                    // console.log(Restaurant.name);
                    console.log(Restaurant.rate);
                    
                    return Restaurant.rate>=5;
                })

                console.log("Filter List");
                console.log(filterList);
                
                
                setfilteredRestaurants(filterList);
            }}>
                Top rated Restaurant 
            </button>
            </div>
            <div className="res-cards">
                {
                    filteredRestaurants.map(function(Restaurant){
                        return <RestaurantCard key={Restaurant.id} resData={Restaurant}/>   
                    })
                }
            </div>
            {/* // Ab ham basic restaurant card */}
          
        </div>
    );
}
export default Body;