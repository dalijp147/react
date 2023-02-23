import React from 'react'
import {useParams} from 'react-router-dom'
function Home() {
    const {username} = useParams();
  return (
    <div>Home
        <br/>
        <h3>
            {username}
        </h3>
    </div>
  )
}

export default Home