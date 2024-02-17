import React from 'react';
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa'
import './home.css'
const Home = () => {
  return (
   <>
   <section className='home section grid'>

    <img src={Profile} alt='' className='home__img'/>

    <div className="home__content">
      <div className="home__data">
        <h1 className="home__title"><span>I am Rekha Chaurasiya</span> Web Designer</h1>
        <p className='home__description'>
        I am passionate about my work. Because I love what I do,
        I have a steady source of motivation that drives me to do my best. In my last job, 
        this passion led me to challenge myself daily and learn new skills that helped me to do better work. For example,
        I taught myself how to use Photoshop to improve the quality of our photos and graphics.
        I soon became the go-to person for any design needs.
        </p>
       <Link to='/about' className='button'>
      More About Me<span className='button__icon'>
        <FaArrowRight/>
      </span>
      </Link>

      </div>


   
   
   
    </div>
   <div className="color__block"></div>
   </section>
   
   
   </>
  );
}

export default Home;
