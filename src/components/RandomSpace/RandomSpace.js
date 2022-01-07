import { useNavigate } from 'react-router-dom'
import './RandomSpace.css';
import data from '../../sfpopos-data.json'

function RandomSpace() {
    const history = useNavigate()
  return (
        <button onClick={(e) => {
            const id = Math.floor(Math.random() * data.length)
            history(`/details/${id}`)
        }}>Show me a random space</button>
  )
}

export default RandomSpace