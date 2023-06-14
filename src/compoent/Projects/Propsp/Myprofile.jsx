import React from 'react'
import './Myprofile.css'
import  PropTypes from 'prop-types'
let namer="your name"
 function Myprofile(props) {
  return (
    <div className='thefirstgrandparent'>
      <div className='thegrandp'>
        <section className='fslice'>
        {/*the image*/}
        {props.children}
        {/*full name*/}
        <h3 className='fullname'>{props.fullName}</h3>
        {/*profession*/}
        <h4 className='proffession'>{props.profession}</h4>
        </section>
        <section className='slice2'>
        <h2 className='information'>Information</h2>
        <hr/>
        <div className='pparent'>
        <h2 className='infot information'>Email</h2>
        <h2 className='info information'>Phone number</h2>
        </div>
        <div className='pparent'>
          {/*the email*/}
        <p className='pinfo'>{props.Email}</p>
        {/*the phone number*/}
        <p className='pinfo'>{props.Phone_number}</p>
        </div>
        <h2 className='bio information'>Bio</h2>
        <hr/>
        <div className='biop'>
          {/*the bio*/}
        <p className='pinfo'>{props.bio}</p>
        </div>
        <a href="#nothing special this time" onClick={showTheName}>Show more</a>
        </section>
      </div>
    </div>
  )
}
/*props types*/
Myprofile.propTypes={
  fullName:PropTypes.string,
  bio:PropTypes.string,
  profession:PropTypes.string,
  Email:PropTypes.string,
  Phone_number:PropTypes.string
}
/*default props*/
Myprofile.defaultProps={
  fullName:"your name",
  bio:"your bio",
  profession:"your profession",
  Email:"your email",
  Phone_number:"your phone number",
}
/*function that alret the user name at the beginning*/
function HandleName (props){
  namer=props.name
}
 /*function that show the name if you click on the link*/
function showTheName(){
  alert( `your name is ${namer}`)
}
export {Myprofile,HandleName}