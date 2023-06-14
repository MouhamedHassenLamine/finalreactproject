import React, { useState } from 'react'
import './css/SMZ.css'
import Button from 'react-bootstrap/Button';
import StarsRating from 'react-star-rate';
import './css/Moviecard.css'
import './css/Addcard.css'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './css/Nav.css'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { OpenCloseAn } from '../../Slices/TransAnSlice';
export default function ShowMoreZone(props) {
  const [showtrailer, setShowtrailer] = useState(false)
  const navigator=useNavigate()
  const dispatch=useDispatch()
  const activateanfun=()=>{
    dispatch(OpenCloseAn("37.4%"))
    setTimeout(() => {
      navigator("/")
    }, 1000);
    setTimeout(() => {
      dispatch(OpenCloseAn("100%")) 
    }, 2000);
   }
  return (
    <div className='smzgrandparent'>
       <Navbar className='smznavbar' bg="dark" expand="lg">

        <Container fluid>
          <Navbar.Brand onClick={()=>navigator("/Hooks&Router_Project")} className='white' href="#">Movies section</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link className='white' href="#action1">Home</Nav.Link>
          <Nav.Link className='white' href="#action2">Link</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link onClick={()=>activateanfun()}  className='white' href="#" >
            Space
          </Nav.Link>
        </Nav>
            <StarsRating  classNamePrefix='rateserch' ></StarsRating>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search" />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='smzparent' style={{ backgroundImage: props.td.smzbanner }}>
      <div className='bannerandratep'>
        <img className='smzimg' src={`${props.td.banner}`.slice(4, -1)} alt='post' />
        <StarsRating classNamePrefix='starsmz' disabled defaultValue={props.td.rate} value={props.td.rate} count={props.td.rate}></StarsRating>
      </div>
      <p className='descrip'>{props.td.description}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, tempora culpa magni officia sit dolor nobis obcaecati doloremque nemo recusandae possimus sapiente!</p>
      {showtrailer &&
        <div className='iframeparent'><button onClick={() => setShowtrailer(false)} className='smzexit'>&#x2715;</button><iframe width="560" height="315" src= {props.td.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
      }

      <div className='smzbutton'>
        <Button onClick={() => setShowtrailer(true)} variant="outline-success">Trailer</Button>{' '}
        <Button variant="outline-danger">Watch here</Button>{' '}
      </div>
    </div><div class="custom-shape-divider-bottom-1684028779">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
        </svg>
      </div>
      </div>
  )
}
