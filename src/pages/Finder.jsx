import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { db } from '../firebase/firebase';
import BookCard from 'react-tinder-card';

// Import Swiper styles
import 'swiper/css';
import { useSelector } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';


function Finder() {

    const [estado, setEstado ] = useState([{}])

    const booksCollection = collection(db, 'books');
    const getData = async () =>{
        try {
            const bookList = await getDocs(booksCollection);
            const bookItem = bookList.docs.map( (doc) => doc.data());
            setEstado(bookItem)
            console.log(estado);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getData()
        
    }, [])

    
    
    
    return (
        <div className='flex justify-center '>
            
           
            {estado && estado.map(book => 
                <BookCard 
                    className='swipe'
                    key={book.title}
                    preventSwipe={["up", "down"]}
                >
                    <Card title={book.title} img={book.imgUrl}/>
                </BookCard>
            
                )}


            
        </div>
    );
}

export default Finder;