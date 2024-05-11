import React, { useRef, useState } from 'react'
import './Testimonials.css'
import Next_icon from '../../assets/next-icon.png'
import Back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
   
    const slide = useRef();
    let tx=0;

    const slideForward =() =>{
        if(tx > -50){
            tx-=25;
        }
        slide.current.style.transform =`translateX(${tx}%)`;
    }
    const slideBackward= ()=>{
        if (tx < 0) {
            tx+=25;
        }
        slide.current.style.transform =`translateX(${tx}%)`;
    }


  return (
    <div className='testimonials'>
      <img src={Next_icon} alt="" srcset="" className='next-btn' onClick={slideForward}/>
      <img src={Back_icon} alt="" srcset="" className='back-btn'onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slide}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                        <h3>William Jackson</h3>
                        <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint non incidunt maiores enim veniam impedit officiis, nulla ut itaque aperiam eaque, modi debitis perspiciatis, commodi voluptate ullam nihil numquam iure.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                        <h3>William Jackson</h3>
                        <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint non incidunt maiores enim veniam impedit officiis, nulla ut itaque aperiam eaque, modi debitis perspiciatis, commodi voluptate ullam nihil numquam iure.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                        <h3>William Jackson</h3>
                        <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint non incidunt maiores enim veniam impedit officiis, nulla ut itaque aperiam eaque, modi debitis perspiciatis, commodi voluptate ullam nihil numquam iure.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                        <h3>William Jackson</h3>
                        <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint non incidunt maiores enim veniam impedit officiis, nulla ut itaque aperiam eaque, modi debitis perspiciatis, commodi voluptate ullam nihil numquam iure.</p>
                </div>
            </li>  
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
