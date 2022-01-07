import {useState} from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.js';

function POPOSList() {

  const [ query, setQuery ] = useState('')

  const spaces = data.filter((obj) => {
    // true if query is in title
    const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
    // true if query is in address
    const inAddress = obj.address.toLowerCase().includes(query.toLowerCase())
    // return true if either is true
    return inTitle || inAddress
}).map(({ title, address, images, hours, id }) => {
    return (
      <POPOSSpace
        id={id}
        key={`${title}-${id}`}
        name={title}
        address={address}
        image={`/${images[0]}`}
        hours={hours}
      />
    )
  })

  return (
    <div className="POPOSList">

      <form>
        <input
          value={query}
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      { spaces }
    </div>
  )
}

export default POPOSList