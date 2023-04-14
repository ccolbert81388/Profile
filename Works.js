import React, { useState } from 'react';
import './Works.css';
import {GiPlainCircle} from "react-icons/gi";

const Works = () => { 
    return (
        <div className='works'>
            <div className='line inline-block'></div>
            <p className='sklHeading inline-block ml-3'><span className='sklTxt'>Projects</span></p>
            
            <div className="workBoard mb-10">
                <div>
                    <p className='rcntwork mb-4'> <GiPlainCircle className='inline-block circleRed mb-1'></GiPlainCircle> Recently Worked</p>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5'>

                {/* Project 1 */}
                        <div className='prjct'>
                            {/* Project Name */}
                            <p className='text-xl mb-2'><strong className='font-extrabold'>Celebration Marketing</strong></p>
                            
                            {/* Project Image */}
                            <img className='prjctImg' 
                            src='Celebration Marketing.png' 
                            alt="project" />
                            <a href='https://celebrationmarketing.us/' 
                            class="mb-10" target="_blank" 
                            rel='noopener noreferrer'>
                                <button className='rcntLiveBtn mb-3'>Preview</button>
                            </a>
                            {/* Project Price */}
                            <p className='mb-2'><strong className='underline font-bold'></strong> </p>
                            {/* Project Description */}
                            <p className='description text-justify'><strong className='underline font-bold'>Description :</strong>data-driven, personalized marketing company that helps businesses improve conversion rates by driving digital traffic and building their customer database.
                            </p>
                            
                        </div>
                        
                {/* Project 2 */}
                        <div className='prjct'>
                            {/* Project Name */}
                            <p className='text-xl mb-2'><strong className='font-extrabold'>Discover the hottest off market deals in the USA with innovative graphics and financing calculations with SEO. </strong></p>

                            {/* Project Image */}
                            <img className='prjctImg' 
                            src="Hot Invest Deals 2.png"alt="real estate" height="48" width="100"></img>
                            alt="project" /
                            <a href='https://www.hotinvestdeals.com'  
                            class="mb-10" target="_blank" 
                            rel='noopener noreferrer'>
                                <button className='rcntLiveBtn mb-3'>Preview</button>
                            </a>

                            {/* Project Price */}
                            <p className='mb-2'><strong className='underline font-bold'>Price :</strong> 55$</p>
                            {/* Project Description */}
                            <p className='description text-justify'><strong className='underline font-bold'>Description :</strong>Discover the hottest off market deals in the USA with innovative graphics and financing calculations with SEO.
                            {/* Show more and Less button */}
                            </p>
                        </div>
                        
                {/* Project 3 */}        
                        <div className='prjct'>
                            {/* Project Name */}
                            <p className='text-xl mb-2'><strong className='font-extrabold'>Celebration Marketing</strong></p>

                            {/* Project Image */}
                            <img className='prjctImg' 
                            src='https://img.freepik.com/free-psd/religious-template-design-web_23-2149197319.jpg?w=1380&t=st=1680515774~exp=1680516374~hmac=8c228a57d4bdb095ce02265880a20856d313318bf8b6e908968825a7beddcc02' 
                            alt="project" />
                            <a href='https://img.freepik.com/free-psd/religious-template-design-web_23-2149197319.jpg?w=1380&t=st=1680515774~exp=1680516374~hmac=8c228a57d4bdb095ce02265880a20856d313318bf8b6e908968825a7beddcc02' 
                            class="mb-10" target="_blank" 
                            rel='noopener noreferrer'>
                                <button className='rcntLiveBtn mb-3'>Preview</button>
                            </a>

                            {/* Project Price */}
                            <p className='mb-2'><strong className='underline font-bold'>Price :</strong> 55$</p>
                            {/* Project Description */}
                            <p className='description text-justify'><strong className='underline font-bold'>Description :</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            {/* Show more and Less button */}
                            </p>
                        </div>
                    </div>
                </div>
                </div>


                <div className="workBoard mb-32"> 
                <div>
                    <p className='rcntwork mb-4'> <GiPlainCircle className='inline-block circleYellow	mb-1'></GiPlainCircle> Sample Projects</p>
                    <div className='projectDetails grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2'>
       
                {/* sample project 1 */}
                        <div className='prjct '>
                            <div className='text-white mb-2'>
                                {/* Project Name */}
                                <p className='text-xl mb-2'><strong className='font-extrabold'>Restaurant Website</strong></p>
                            </div>

                            {/* Project Image */}
                            <img className='prjctImg' 
                            src='https://img.freepik.com/free-psd/american-food-style-stationery_23-2148473308.jpg?w=1380&t=st=1680515926~exp=1680516526~hmac=6169a93f4b90a554bd9e5beb5e9dbb5f67579e6d6cd960035521e52ecfa18a03' 
                            alt="project" />
                            <a href='https://img.freepik.com/free-psd/american-food-style-stationery_23-2148473308.jpg?w=1380&t=st=1680515926~exp=1680516526~hmac=6169a93f4b90a554bd9e5beb5e9dbb5f67579e6d6cd960035521e52ecfa18a03' 
                            class="mb-10" target="_blank" 
                            rel='noopener noreferrer'>
                                <button className="prjctBtn liveBtn mb-3" >Preview</button>
                            </a>

                            {/* Project Price */}
                            <p className='mb-2'><strong className='underline font-bold'>Price :</strong> 55$</p>
                            {/* Project Description */}
                            <p className='description text-justify'><strong className='underline font-bold'>Description :</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            {/* Show more and Less button */}
                            </p>
                        </div>
                        
                {/* sample project 2 */}
                        <div className='prjct '>
                        <div className='text-white mb-2'>
                                {/* Project Name */}
                                <p className='text-xl mb-2'><strong className='font-extrabold'>Restaurant Website</strong></p>
                            </div>


                            {/* Project Image */}
                            <img className='prjctImg' 
                            src='https://img.freepik.com/free-psd/web-template-burger-restaurant_23-2148485059.jpg?w=1380&t=st=1680515976~exp=1680516576~hmac=3c087d81eb62b4f78f7a5a608ee467a501144d22e2a2a479a4d2a76b3af2b70d' 
                            alt="project" />
                            <a href='https://img.freepik.com/free-psd/web-template-burger-restaurant_23-2148485059.jpg?w=1380&t=st=1680515976~exp=1680516576~hmac=3c087d81eb62b4f78f7a5a608ee467a501144d22e2a2a479a4d2a76b3af2b70d' 
                            class="mb-10" target="_blank" 
                            rel='noopener noreferrer'>
                                <button className="prjctBtn liveBtn mb-3" >Preview</button>
                            </a>

                            {/* Project Price */}
                            <p className='mb-2'><strong className='underline font-bold'>Price :</strong> 55$</p>
                            {/* Project Description */}
                            <p className='description text-justify'><strong className='underline font-bold'>Description :</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            {/* Show more and Less button */}
                            </p>
                        </div>
                       
                {/* sample project 3 */}       
                        <div className='prjct '>
                        <div className='text-white mb-2'>
                                {/* Project Name */}
                                <p className='text-xl mb-2'><strong className='font-extrabold'>Restaurant Website</strong></p>
                            </div>


                            {/* Project Image */}
                            <img className='prjctImg' 
                            src='https://img.freepik.com/free-psd/rugby-game-web-design-template_23-2149091828.jpg?w=1380&t=st=1680516040~exp=1680516640~hmac=966a584ca4b1b5c9f416ec9bdd1a17b6c56118b70bd8494b38e2ea57fd8cf536' 
                            alt="project" />
                            <a href='https://img.freepik.com/free-psd/rugby-game-web-design-template_23-2149091828.jpg?w=1380&t=st=1680516040~exp=1680516640~hmac=966a584ca4b1b5c9f416ec9bdd1a17b6c56118b70bd8494b38e2ea57fd8cf536' 
                            class="mb-10" target="_blank" 
                            rel='noopener noreferrer'>
                                <button className="prjctBtn liveBtn mb-3" >Preview</button>
                            </a>

                            {/* Project Price */}
                            <p className='mb-2'><strong className='underline font-bold'>Price :</strong> 55$</p>
                            {/* Project Description */}
                            <p className='description text-justify'><strong className='underline font-bold'>Description :</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            {/* Show more and Less button */}
                            </p>
                        </div>
                        
                {/* sample project 4 */}
                        <div className='prjct '>
                        <div className='text-white mb-2'>
                                {/* Project Name */}
                                <p className='text-xl mb-2'><strong className='font-extrabold'>Restaurant Website</strong></p>
                            </div>


                            {/* Project Image */}
                            <img className='prjctImg' 
                            src='https://img.freepik.com/free-psd/american-food-style-stationery_23-2148473308.jpg?w=1380&t=st=1680515926~exp=1680516526~hmac=6169a93f4b90a554bd9e5beb5e9dbb5f67579e6d6cd960035521e52ecfa18a03' 
                            alt="project" />
                            <a href='https://img.freepik.com/free-psd/american-food-style-stationery_23-2148473308.jpg?w=1380&t=st=1680515926~exp=1680516526~hmac=6169a93f4b90a554bd9e5beb5e9dbb5f67579e6d6cd960035521e52ecfa18a03' 
                            class="mb-10" target="_blank" 
                            rel='noopener noreferrer'>
                                <button className="prjctBtn liveBtn mb-3" >Preview</button>
                            </a>

                            {/* Project Price */}
                            <p className='mb-2'><strong className='underline font-bold'>Price :</strong> 55$</p>
                            {/* Project Description */}
                            <p className='description text-justify'><strong className='underline font-bold'>Description :</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            {/* Show more and Less button */}
                            </p>
                        </div>
                        
                {/* sample project 5 */}        
                        <div className='prjct '>
                        <div className='text-white mb-2'>
                                {/* Project Name */}
                                <p className='text-xl mb-2'><strong className='font-extrabold'>Restaurant Website</strong></p>
                            </div>


                            {/* Project Image */}
                            <img className='prjctImg' 
                            src='https://img.freepik.com/free-psd/web-template-burger-restaurant_23-2148485059.jpg?w=1380&t=st=1680515976~exp=1680516576~hmac=3c087d81eb62b4f78f7a5a608ee467a501144d22e2a2a479a4d2a76b3af2b70d' 
                            alt="project" />
                            <a href='https://img.freepik.com/free-psd/web-template-burger-restaurant_23-2148485059.jpg?w=1380&t=st=1680515976~exp=1680516576~hmac=3c087d81eb62b4f78f7a5a608ee467a501144d22e2a2a479a4d2a76b3af2b70d' 
                            class="mb-10" target="_blank" 
                            rel='noopener noreferrer'>
                                <button className="prjctBtn liveBtn mb-3" >Preview</button>
                            </a>

                            {/* Project Price */}
                            <p className='mb-2'><strong className='underline font-bold'>Price :</strong> 55$</p>
                            {/* Project Description */}
                            <p className='description text-justify'><strong className='underline font-bold'>Description :</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            {/* Show more and Less button */}
                            </p>
                        </div>
                       
                {/* sample project 6 */}       
                        <div className='prjct '>
                        <div className='text-white mb-2'>
                                {/* Project Name */}
                                <p className='text-xl mb-2'><strong className='font-extrabold'>Restaurant Website</strong></p>
                            </div>


                            {/* Project Image */}
                            <img className='prjctImg' 
                            src='https://img.freepik.com/free-psd/rugby-game-web-design-template_23-2149091828.jpg?w=1380&t=st=1680516040~exp=1680516640~hmac=966a584ca4b1b5c9f416ec9bdd1a17b6c56118b70bd8494b38e2ea57fd8cf536' 
                            alt="project" />
                            <a href='https://img.freepik.com/free-psd/rugby-game-web-design-template_23-2149091828.jpg?w=1380&t=st=1680516040~exp=1680516640~hmac=966a584ca4b1b5c9f416ec9bdd1a17b6c56118b70bd8494b38e2ea57fd8cf536' 
                            class="mb-10" target="_blank" 
                            rel='noopener noreferrer'>
                                <button className="prjctBtn liveBtn mb-3" >Preview</button>
                            </a>

                            {/* Project Price */}
                            <p className='mb-2'><strong className='underline font-bold'>Price :</strong> 55$</p>
                            {/* Project Description */}
                            <p className='description text-justify'><strong className='underline font-bold'>Description :</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            {/* Show more and Less button */}
                            </p>
                        </div>
                        
                {/* sample project 7 */}
                        <div className='prjct '>
                        <div className='text-white mb-2'>
                                {/* Project Name */}
                                <p className='text-xl mb-2'><strong className='font-extrabold'>Restaurant Website</strong></p>
                            </div>


                            {/* Project Image */}
                            <img className='prjctImg' 
                            src='https://img.freepik.com/free-psd/american-food-style-stationery_23-2148473308.jpg?w=1380&t=st=1680515926~exp=1680516526~hmac=6169a93f4b90a554bd9e5beb5e9dbb5f67579e6d6cd960035521e52ecfa18a03' 
                            alt="project" />
                            <a href='https://img.freepik.com/free-psd/american-food-style-stationery_23-2148473308.jpg?w=1380&t=st=1680515926~exp=1680516526~hmac=6169a93f4b90a554bd9e5beb5e9dbb5f67579e6d6cd960035521e52ecfa18a03' 
                            class="mb-10" target="_blank" 
                            rel='noopener noreferrer'>
                                <button className="prjctBtn liveBtn mb-3" >Preview</button>
                            </a>

                            {/* Project Price */}
                            <p className='mb-2'><strong className='underline font-bold'>Price :</strong> 55$</p>
                            {/* Project Description */}
                            <p className='description text-justify'><strong className='underline font-bold'>Description :</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            {/* Show more and Less button */}
                            </p>
                        </div>
                        
                {/* sample project 8 */}        
                        <div className='prjct '>
                        <div className='text-white mb-2'>
                                {/* Project Name */}
                                <p className='text-xl mb-2'><strong className='font-extrabold'>Restaurant Website</strong></p>
                            </div>


                            {/* Project Image */}
                            <img className='prjctImg' 
                            src='https://img.freepik.com/free-psd/web-template-burger-restaurant_23-2148485059.jpg?w=1380&t=st=1680515976~exp=1680516576~hmac=3c087d81eb62b4f78f7a5a608ee467a501144d22e2a2a479a4d2a76b3af2b70d' 
                            alt="project1" />
                            <a href='https://img.freepik.com/free-psd/web-template-burger-restaurant_23-2148485059.jpg?w=1380&t=st=1680515976~exp=1680516576~hmac=3c087d81eb62b4f78f7a5a608ee467a501144d22e2a2a479a4d2a76b3af2b70d' 
                            class="mb-10" target="_blank" 
                            rel='noopener noreferrer'>
                                <button className="prjctBtn liveBtn mb-3" >Preview</button>
                            </a>

                            {/* Project Price */}
                            <p className='mb-2'><strong className='underline font-bold'>Price :</strong> 55$</p>
                            {/* Project Description */}
                            <p className='description text-justify'><strong className='underline font-bold'>Description :</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            {/* Show more and Less button */}
                            </p>
                        </div>
                       
                {/* sample project 9 */}       
                        <div className='prjct '>
                        <div className='text-white mb-2'>
                                {/* Project Name */}
                                <p className='text-xl mb-2'><strong className='font-extrabold'>Restaurant Website</strong></p>
                            </div>


                            {/* Project Image */}
                            <img className='prjctImg' 
                            src='https://img.freepik.com/free-psd/rugby-game-web-design-template_23-2149091828.jpg?w=1380&t=st=1680516040~exp=1680516640~hmac=966a584ca4b1b5c9f416ec9bdd1a17b6c56118b70bd8494b38e2ea57fd8cf536' 
                            alt="project" />
                            <a href='https://img.freepik.com/free-psd/rugby-game-web-design-template_23-2149091828.jpg?w=1380&t=st=1680516040~exp=1680516640~hmac=966a584ca4b1b5c9f416ec9bdd1a17b6c56118b70bd8494b38e2ea57fd8cf536' 
                            class="mb-10" target="_blank" 
                            rel='noopener noreferrer'>
                                <button className="prjctBtn liveBtn mb-3" >Preview</button>
                            </a>

                            {/* Project Price */}
                            <p className='mb-2'><strong className='underline font-bold'>Price :</strong> 55$</p>
                            {/* Project Description */}
                            <p className='description text-justify'><strong className='underline font-bold'>Description :</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        
                {/* sample project 10 */}
                        <div className='prjct '>
                        <div className='text-white mb-2'>
                                {/* Project Name */}
                                <p className='text-xl mb-2'><strong className='font-extrabold'>Restaurant Website</strong></p>
                            </div>


                            {/* Project Image */}
                            <img className='prjctImg' 
                            src='https://img.freepik.com/free-psd/american-food-style-stationery_23-2148473308.jpg?w=1380&t=st=1680515926~exp=1680516526~hmac=6169a93f4b90a554bd9e5beb5e9dbb5f67579e6d6cd960035521e52ecfa18a03' 
                            alt="project" />
                            <a href='https://img.freepik.com/free-psd/american-food-style-stationery_23-2148473308.jpg?w=1380&t=st=1680515926~exp=1680516526~hmac=6169a93f4b90a554bd9e5beb5e9dbb5f67579e6d6cd960035521e52ecfa18a03' 
                            class="mb-10" target="_blank" 
                            rel='noopener noreferrer'>
                                <button className="prjctBtn liveBtn mb-3" >Preview</button>
                            </a>

                            {/* Project Price */}
                            <p className='mb-2'><strong className='underline font-bold'>Price :</strong> 55$</p>
                            {/* Project Description */}
                            <p className='description text-justify'><strong className='underline font-bold'>Description :</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        
                {/* sample project 11 */}        
                        <div className='prjct '>
                        <div className='text-white mb-2'>
                                {/* Project Name */}
                                <p className='text-xl mb-2'><strong className='font-extrabold'>Restaurant Website</strong></p>
                            </div>


                            {/* Project Image */}
                            <img className='prjctImg' 
                            src='https://img.freepik.com/free-psd/web-template-burger-restaurant_23-2148485059.jpg?w=1380&t=st=1680515976~exp=1680516576~hmac=3c087d81eb62b4f78f7a5a608ee467a501144d22e2a2a479a4d2a76b3af2b70d' 
                            alt="project" />
                            <a href='https://img.freepik.com/free-psd/web-template-burger-restaurant_23-2148485059.jpg?w=1380&t=st=1680515976~exp=1680516576~hmac=3c087d81eb62b4f78f7a5a608ee467a501144d22e2a2a479a4d2a76b3af2b70d'
                            class="mb-10" target="_blank" 
                            rel='noopener noreferrer'>
                                <button className="prjctBtn liveBtn mb-3" >Preview</button>
                            </a>

                            {/* Project Price */}
                            <p className='mb-2'><strong className='underline font-bold'>Price :</strong> 55$</p>
                            {/* Project Description */}
                            <p className='description text-justify'><strong className='underline font-bold'>Description :</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                       
                {/* sample project 12 */}       
                        <div className='prjct'>
                        <div className='text-white mb-2'>
                                {/* Project Name */}
                                <p className='text-xl mb-2'><strong className='font-extrabold'>Restaurant Website</strong></p>
                            </div>


                            {/* Project Image */}                            
                            <img className='prjctImg' 
                            src='https://img.freepik.com/free-psd/rugby-game-web-design-template_23-2149091828.jpg?w=1380&t=st=1680516040~exp=1680516640~hmac=966a584ca4b1b5c9f416ec9bdd1a17b6c56118b70bd8494b38e2ea57fd8cf536' 
                            alt="project" />
                            <a href='https://img.freepik.com/free-psd/rugby-game-web-design-template_23-2149091828.jpg?w=1380&t=st=1680516040~exp=1680516640~hmac=966a584ca4b1b5c9f416ec9bdd1a17b6c56118b70bd8494b38e2ea57fd8cf536' 
                            class="mb-10" target="_blank" 
                            rel='noopener noreferrer'>
                                <button className="prjctBtn liveBtn mb-3" >Preview</button>
                            </a>

                            {/* Project Price */}
                            <p className='mb-2'><strong className='underline font-bold'>Price :</strong> 55$</p>
                            {/* Project Description */}
                            <p className='description text-justify'><strong className='underline font-bold'>Description :</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            
                        </div>
                    </div>

                        
                        
                    </div>
                </div>
            
        </div>
    );
};

export default Works;