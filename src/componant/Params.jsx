import {useParams} from 'react-router-dom'

function Params() {
    const {username} = useParams();
   
  return (
    <div>
      <h1> ./{username}  page not found (404)</h1>
    </div>
  )
}

export default Params
