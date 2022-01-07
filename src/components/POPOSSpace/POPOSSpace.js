import './POPOSSpace.css'
import { Link } from 'react-router-dom';

function POPOSSpace(props) {
    const { name, image, address, hours, id, title } = props
    return (
      <div className="POPOSSpace">
        <Link to={`/details/${id}`}>
          <img src={`${process.env.PUBLIC_URL}${image}`} width="300" height="300" alt={title} />
        </Link>
        <h1>{name}</h1>
        <div>{address}</div>
        <div className="Hours">{hours}</div>
      </div>
    )
}

export default POPOSSpace