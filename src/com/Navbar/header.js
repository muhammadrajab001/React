import React from 'react'
import Navbar from './header.css';

const Header = () => {
  return (
 <header>
            <div className='hed' >
               <a href='#' className='Hed'>Product</a>
               <a href='#' className='Hed'>Partners </a>
               <a href='#' className='Hed'>Resources</a>
               <button  type ='submit'className='book'>Book a demo</button>
           
            </div>
        <div className='cart'>
                <div className='cart_main_header'>
                    <p>use of cookies</p>
                <p>This site uses cookies to provide you with a sweet user experience. By browsing this website, you accept our</p>
                </div>  
                <p className='text'>COMMERCE FOR BRANDS</p> 
        </div>
        
    
    
 </header>
  )
}

export default Header
