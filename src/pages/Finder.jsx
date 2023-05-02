import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import BookCard from 'react-tinder-card';

// Import Swiper styles
import 'swiper/css';
import { useSelector } from 'react-redux';


function Finder() {
    const books = useSelector((state) => state.books)
    return (
        <div className='flex justify-center '>
            
           
            {books.map(book => 
                <BookCard 
                    className='swipe'
                    key={book.title}
                    preventSwipe={["up", "down"]}
                >
                    <Card title={book.title} img={book.img}/>
                </BookCard>
            
                )}


            
        </div>
    );
}

export default Finder;