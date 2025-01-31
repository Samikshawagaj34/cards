import { createRoot } from "react-dom/client";
import './bookard./BookCard.css';
import BookCard, { BookCard2 } from "./bookard/BookCard";
import image2 from "./images/cprogram-book.jpg";
import image from "./images/datastructure-book.jpg";




const root = createRoot(document.getElementById("root"));
root.render(
    <div className="card">
    <BookCard image={image}
    title="Data Structure" 
    price="₹749" 
    author=" Author :Narasimha Karumanchi"
    button="Buy Now"  /><br/>
    <BookCard2  image2={image2} 
    title="c Programming" 
    price="₹250" 
    author=" Author :Vijitha Robinson "
    button="Buy Now"  />
    </div>
)





