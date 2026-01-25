import { Link } from "react-router";
const CategoryCard=({catdata})=>{
    //what is the category and this can be fetched as well 
    // let's say as of now we only get the name of the food 
    console.log("In the Category Card");
    // console.log(catdata);
    const {name,image} = catdata;
    // const {catdata}=props;
    // console.log(`Name : ${catdata}`);
    
    return (
        <Link to= {`/restaurant/${name}`}><div className="cat-card m-4 p-4 w-70 border hover:shadow-2xl  bg-gray-100">
            <img className="w-72 h-50   cat-image" src={image} alt="" />
            <h1>
                {name} 
            </h1>            
        </div>
        </Link>
    )
}
export default CategoryCard;
