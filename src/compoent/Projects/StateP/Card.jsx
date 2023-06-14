import React, { useState,useEffect } from 'react'
import './css/Card.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo192.png'

export default function Card() {
    const info ={
        name:["Hassen","Maria","Ahmed","Alex"],
        job:["Student","Grafic desiner","Software Developer","Marketing Manager"],
        email:["hassenlamine@gmail.com","marialamine@gmail.com","ahmedlamine@gmail.com","alexjemai@gmail.com"],
        phonenumber:[7565823,46521358,97213655,56874912],
        bio:["Lorem ipsum you can edit hassen bio sit amet, consectetur adipisicing elit. Sint fugit amet recusandae necessitatibus voluptatem fugiat dicta aut, assumenda explicabo commodi odio debitis illo repudiandae cum. Impedit qui officiis ab blanditiis!","Lorem ipsum you can edit maria bio sit amet, consectetur adipisicing elit. Sint fugit amet recusandae necessitatibus voluptatem fugiat dicta aut, assumenda explicabo commodi odio debitis illo repudiandae cum. Impedit qui officiis ab blanditiis!","Lorem ipsum you can edit ahmed bio sit amet, consectetur adipisicing elit. Sint fugit amet recusandae necessitatibus voluptatem fugiat dicta aut, assumenda explicabo commodi odio debitis illo repudiandae cum. Impedit qui officiis ab blanditiis!","Lorem ipsum you can edit alex bio sit amet, consectetur adipisicing elit. Sint fugit amet recusandae necessitatibus voluptatem fugiat dicta aut, assumenda explicabo commodi odio debitis illo repudiandae cum. Impedit qui officiis ab blanditiis!"],
        photo:["/img/Projects_img/State/hassen.jpg","/img/Projects_img/State/maria.jpg","/img/Projects_img/State/ahmed.jpg","/img/Projects_img/State/alex.jpg"],
        background_color:["linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(5,4,73,1) 0%, rgba(9,9,121,1) 26%, rgba(0,159,255,1) 100%)","linear-gradient(0deg, rgb(20, 0, 36) 0%, rgb(23, 4, 48) 0%, rgb(119, 0, 255) 26%, rgb(71, 16, 142) 100%)","linear-gradient(0deg, rgb(0, 36, 5) 0%, rgb(4, 48, 22) 0%, rgb(8, 56, 5) 26%, rgb(16, 142, 58) 100%)","linear-gradient(0deg, rgb(36, 0, 25) 0%, rgb(48, 4, 34) 0%, rgb(255, 0, 149) 26%, rgb(142, 16, 119) 100%)",]
    }
      const [desc,setDesc]=useState(0)
      const [hs,setHs]=useState(true)
      useEffect(() => {
        const interval = setInterval(() => {
          setDesc(desc => (desc === info.name.length-1 ? 0 : desc + 1));
        },5000);
        return () => clearInterval(interval);
      }, [info.name.length]);
  return (
    <div className='firstgrandparent'>
      <div className='firstparent'>
      {hs&& 
      <div className='grandp'>
        <section style={{ background: info.background_color[desc], }} className='slice1'>
          {/*the image*/}
          <img className='infoimage' src={info.photo[desc]} alt="persone img" />
          {/*full name*/}
          <h3 className='nameinfo'>{info.name[desc]}</h3>
          {/*profession*/}
          <h4 className='jobinfo'>{info.job[desc]}</h4>
        </section>
        <section className='slice2'>
          <h2 className='infoinfo'>Information</h2>
          <hr />
          <div className='pparent'>
            <h2 className='infot infoinfo'>Email</h2>
            <h2 className='info infoinfo'>Phone number</h2>
          </div>
          <div className='pparent'>
            {/*the email*/}
            <p className='paraginfo'>{info.email[desc]}</p>
            {/*the phone number*/}
            <p className='paraginfo'>{info.phonenumber[desc]}</p>
          </div>
          <h2 className='bio infoinfo'>Bio</h2>
          <hr />
          <div className='biop'>
            {/*the bio*/}
            <p className='paraginfo'>{info.bio[desc]}</p>
          </div>
          <a href="#nothing special this time">Show more</a>
        </section>
      </div>}
      </div>
          <Button className='cbutton' onClick={() => setHs(!hs)} variant="secondary">{hs?"Hide":"Show"}</Button>
        {hs? null:<h5 className='byme'>By Mouhamed Hassen Lamine <img className='reactlogo' src={logo} alt="logo" /></h5>}
    </div>
  )
}
