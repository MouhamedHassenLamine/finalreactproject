import React from 'react'
import './css/About.css'
import general_positions from './Lists/general_positions'
export default function About(props) {
  return (
    <div className='aboutgrandparent' style={{left:`${props.direction[1]+general_positions.About[1]}em`,top:`${props.direction[0]+general_positions.About[0]}em`}}>
    <div className='aboutparent'>
        <div>
        <h1>ABOUT</h1>
        <p>Lorem ipsum dolor,My Name Is Mouhamed Hassen Lamine sit amet consectetur adipisicing elit. Nemo labore deserunt ad facilis praesentium minus? Optio, aliquid excepturi perferendis voluptas accusamus, repudiandae veritatis eaque deleniti, eligendi cupiditate expedita! Corporis, totam.
        Ex, laboriosam reprehenderit eius ipsa repellendus omnis numquam sapiente optio earum labore, consequatur molestias aliquid quis quas expedita! Alias delectus doloribus voluptatibus voluptatum deserunt quia repellat! Repellendus dolore dolorum reiciendis.
        Adipisci ipsum optio eaque dolorem veritatis ullam culpa labore tenetur natus, excepturi, ut deleniti. Laboriosam error inventore, veritatis eum vitae eligendi repudiandae recusandae modi nihil voluptas dicta necessitatibus. Dolore, natus.</p>
        </div>
      <img src="/img/decore/decastro3.png" alt="decore" />
    </div>
    </div>
  )
}
