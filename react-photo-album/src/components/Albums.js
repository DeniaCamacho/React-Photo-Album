import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/styles.css"
import axios from "axios"

function Albums(props) {
  const [data, setData] = useState([])
  // const [albumId, setAlbumId] = useState("")
  const id = props.match.params.id

  useEffect(() => {
    axios("/albums").then(resp => {
      setData(resp.data)
    })
  }, [])

  return (
    <div className="container">
      <h1>My Albums</h1>

      <div className="allAlbums">
        {data.map(e => (
          <Link key={e.id} to={"/Images/" + e.id}>
            <div className="covers">
              <div className="albumCover">
                {" "}
                <img width="500px" src={e.coverPic} />
              </div>
              <div className="albumName">{e.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Albums
