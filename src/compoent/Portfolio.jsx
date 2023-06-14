import Ship from './Ship'
import Map from "./Map"
export default function Portfolio(props) {
  return (
    <div >
      <Map direction={props.direction} setDirection={props.setDirection}></Map>
      <Ship></Ship>
    </div>
  )
}
