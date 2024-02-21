import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/MyContext';
import HeroSection from '../../components/herosection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Track from '../../components/track/Track';
import Testimonial from '../../components/testimonial/Testimonial';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';
import { deleteFromCart } from '../../redux/CartSlice';
import { Link } from 'react-router-dom';


function Home() {

    // const context=useContext(MyContext);
    // console.log(context);
    // // const {name,rollno}=context;
    // const {state,color}=context;

    const dispatch = useDispatch();
  const cartItem = useSelector((state)=> state.cart)

 

  const addCart = () => {
    dispatch(addToCart("shirt"));
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  }
    return (
        <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track />
      <Testimonial />

    </Layout>
        
    )
}

export default Home
