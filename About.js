import React from 'react';
import './About.css';
import propic from '../Img-icon/abtImage.jpg';

const About = () => {
    return (
        <div className='about2'>
            <div className='about'>
                {/* <div className='shamssaifPic'>
                    <img src={propic} alt="shamssaif" />
                </div> */}
                <div className='mt-5'>
                    <div className='sklTxtCont'>
                    {/* <div className='line inline-block'></div> */}
                    <p className='sklHeading inline-block'> <span className='sklTxt'>About</span> Me</p>
                    </div>
                    <div className='aboutPara'>
                    
                    
                        <p>I'm a <span className='dev-des'>Web Developer</span>That understands that every business is different and that each one has its own unique needs. That's why he takes the time to get to know his clients and their businesses before creating a custom solution that will help them achieve their goals.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;