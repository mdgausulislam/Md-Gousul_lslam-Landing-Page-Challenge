import React from 'react';
import './About.css';
import glass from '../../assets/Image.png'

const About = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl card-list">
            <div className="card-body">
                <h6 className="card-title">Experience clear vision with <br /> OptiChroma Vision Frames</h6>
                <p className='details'>At OptiChroma, we believe that everyone deserves clear vision <br />and stylish eyewear. That's why we've designed a collection of <br /> frames that prioritize both form and function.</p>
                <p className='details'>Our team of experts is dedicated to helping you find the perfect <br /> pair of glasses.</p>
                <div>
                    <button class="buyButton1">About US</button>
                </div>
            </div>
            <figure className='lg:w-1/2'><img src={glass} alt="glass about details" /></figure>
        </div>
    );
};

export default About;
