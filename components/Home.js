import useOnlineStatus from "../utils/useOnlineStatus";
import CategoryCard from "./CategoryCard";
const categories = [
  {
    id :1, 
    name: "bbqs",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947"
    },
    {
      id :2, 
      name: "best-foods",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
    },
    {
      id :3, 
    name: "breads",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73"
  },
  {
    id:4,
    name: "burgers",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    id:5,
    name: "chocolates",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b"
  },
  {
    id:6,
    name: "desserts",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b"
  },
  {
    id:7,
    name: "drinks",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e"
  },
  {
    id:8,
    name: "fried-chicken",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58"
  },
  {
    id:9,
    name: "ice-cream",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a"
  },
  {
    id:10,
    name: "pizzas",
    image: "https://cdn.pixabay.com/photo/2024/04/18/10/41/ai-generated-8704060_1280.jpg"
  },
  {
    id:11,
    name: "porks",
    image: "https://cdn.pixabay.com/photo/2021/04/13/13/57/pork-6175779_1280.jpg"
  },
  {
    id : 12,
    name: "sandwiches",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af"
  },
  {
    id : 13,
    name: "sausages",
    image: "https://thecookful.com/wp-content/uploads/2021/03/Italian-Turkey-Sausages-feature-680.jpg"
  },
  {
    id : 14,
    name: "steaks",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141"
  }
];

const Home = ()=>{
    const onlineStatus = useOnlineStatus();
    console.log(`On the home page current online status : ${onlineStatus}`);
    if(onlineStatus==false){
      return (<h1>Please Check your internet connection !!</h1>);
    }
    return (
        <div>
        <div className="HomeText">
            <h1>What do you want to eat today ?</h1>
        </div>
        <div className="CategoryCard">
            {
                categories.map((Category)=>{
                    return <CategoryCard key={Category.id} catdata ={Category}/>
                })
            }
        </div>
        </div>
    )
}
export default Home;