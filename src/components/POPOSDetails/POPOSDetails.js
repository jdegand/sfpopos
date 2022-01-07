import data from '../../sfpopos-data.js'
import { useParams } from "react-router-dom";
import POPOSFeatureList from '../POPOSFeatureList/POPOSFeatureList.js';

function POPOSDetails(props) {
  const { id } = useParams() // Location index
  const { images, title, desc, hours, features, geo } = data[id]

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/${images[0]}`} alt={title} />
      </div>

      <div>
        <h1>{ title }</h1>
        <p>{ desc }</p>
        <p>{ hours }</p>
        <POPOSFeatureList features={features}/>
        <p className="POPOSDetails-geo">{ geo.lat } { geo.lon }</p>
      </div>

    </div>
  )
}

export default POPOSDetails