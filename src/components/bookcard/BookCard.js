import React from "react";
import './BookCard.css';

export default function BookCard(props) {
    console.log(props);
    const { image, title, price, author, button } = props;
    return (
        <div className="book-card">
            <img src={image} className="book-image" alt="book" />
            <h2 className="book-title">{title}</h2>
            <p className="book-price">{price}</p>
            <p className="book-author">{author}</p>
            <button className="btn">{button}</button>
        </div>
    );
}

export function BookCard2(props) {
    const { image2, title, price, author, button } = props;
    return (
        <div className="book-card">
            <img src={image2} className="book-image" alt="book" />
            <h2 className="book-title">{title}</h2>
            <p className="book-price">{price}</p>
            <p className="book-author">{author}</p>
            <button className="btn">{button}</button>
        </div>
    );
}
