import React from 'react';
import './About.css';
import glass from '../../assets/Image.png'

const About = () => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h6 className="card-title pb-5">Experience clear vision with your his <br /> OptiChroma Vision Frames</h6>
                    <p>At OptiChroma, we believe that everyone deserves clear vision <br />and stylish eyewear. That's why we've designed a collection of <br /> frames that prioritize both form and function.</p>
                    <p className='pt-2'>Our team of experts is dedicated to helping you find the perfect <br /> pair of glasses.</p>

                    <button class="buyButton1">About US</button>
                </div>
                <figure>
                    <img src={glass} alt="glass" />
                </figure>
            </div>
        </div>
    );
};

export default About;
