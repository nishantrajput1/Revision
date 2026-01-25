import { useEffect,useState } from "react";
import { useParams } from "react-router";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = ()=>{
    const {category} = useParams();
    const [ListOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurants,setfilteredRestaurants] = useState([]);
    const [searchText,setsearchText] = useState("");
    // every time the category is change we need to call the use effect
    const onlineStatus = useOnlineStatus();
    console.log(`Your online status : ${onlineStatus}`)
    useEffect(()=>{
        if(!category) return;
        console.log("UseEffect is Called");
        fetchData();
    },[category]);
    if(onlineStatus==false){
        return (
            <h1> You are offline !</h1>);
    }
    const fetchData = async () => {
    try {
        const data = await fetch(
        `https://free-food-menus-api-two.vercel.app/${category}`
        );
        const json = await data.json();
        setListOfRestaurants(json);
        setfilteredRestaurants(json);
    } catch (error) {
        console.error("Fetch failed:", error);
    }
    };

    


    // Category page load horaha hai
    if(ListOfRestaurants.length===0){
        return <Shimmer/>;
    }
    // console.log(ListOfRestaurants);
    return (
        <div>
            <div className="search-bar  m-4 p-4 flex justify-center ">
            <input className="border px-100 m-4 p-4 rounded-3xl shadow bg-gray-100"  type="text" placeholder="Enter restaurant name" value={searchText} onChange={(e)=>setsearchText(e.target.value)} />
            <button className="search-btn m-4 px-4 py-2 border bg-green-200 "  onClick={()=>{
                console.log(searchText);
                
                const filteredRestaurantslist = ListOfRestaurants.filter((Restaurant)=>{
            return Restaurant.name.toLowerCase().includes(searchText.toLowerCase()) ;
        });
        setfilteredRestaurants(filteredRestaurantslist);
            console.log("Filtere" + filteredRestaurants);
            
                
            }}>
                Search
            </button>
            <button className="filter-btn border m-3 p-2" onClick={()=>{
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
            <div className="res-cards flex-wrap flex">
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