import { createRoot } from "react-dom/client";
import './BookCard.css';
import BookCard, { BookCard2 } from "./BookCard.js";
import image2 from "./cprogram-book.jpg";
import image from "./datastructure-book.jpg";




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





