import React from 'react'
import './Menu.css'
import flipkart_logo from './images/flipkart_logo.png'
import amazon_logo from './images/amazon_logo.jpg'
import nike_shoe from './images/nike_shoe.png'
export default function Menu() {
  return (
    <>
    <div className='menu_container'>
        <div className="desc_container">
            <h1 style = {{fontSize: '5vw', wordWrap: 'revert', letterSpacing: '-2px', lineHeight: '95%', fontWeight: "bold"}}>YOUR FEET DESERVE THE BEST</h1>
            <p style = {{fontSize: '1.2vw', color: 'gray'}}>Your Feet Deserve The Best And We Are Here To Help You With Our Shoes</p>
            <div className="buttons">
                <button id='shop_btn'>Shop Now</button>
                <button id='category_btn'>Category</button>
            </div>
            <p style={{fontSize: '1vw'}}>Also Available On</p>
            <div className="brands_logo">
              <img src={flipkart_logo} alt = ''/>
              <img src={amazon_logo} alt = ''/>
            </div>
        </div>
        <img id = 'shoe_img' src={nike_shoe} alt="" />
    </div>
    </>
  )
}
