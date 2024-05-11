import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt=""  className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
      <h3>ABOUT UNIVERSITY</h3>
      <h2>Nurturing Tomorrow's Leaders Today</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos fugit ab consequuntur mollitia similique laudantium distinctio, voluptas totam esse velit!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente inventore perferendis, sequi ab iusto delectus!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus, repudiandae in labore laboriosam eos molestias, ab aliquam nobis et nam enim exercitationem deserunt, facere ipsam? Itaque, distinctio? Tempora, perspiciatis! Harum qui quae repellat tempora natus nobis rerum animi reiciendis.</p>
      </div>
    </div>
  )
}

export default About
