import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "../styles/styles.css"
// import Albums from "/Albums/"

function Images(props) {
  const [Images, setImages] = useState([])
  const [albumName, setAlbumName] = useState("")
  const albumId = props.match.params.albumId
  const [albums, setAlbums] = useState([])

  useEffect(
    e => {
      axios.get(`/albums/${albumId}?_embed=images`).then(resp => {
        setImages(resp.data.images)
        setAlbumName(resp.data.name)
      })
    },
    [albumId]
  )
  // const [data, setData] = useState([])
  useEffect(
    e => {
      axios.get("/albums/").then(resp => {
        setAlbums(resp.data)
      })
    },
    [albumName]
  )

  return (
    <div className="SoloAlbum">
      <h1>{albumName}</h1>
      <div className="side">
        <div className="sideList">
          <Link to="">Home</Link>
          {albums.map(e => (
            <li className="alNames">
              <Link key={"albums" + albums.name} to={"/Images/" + e.id}>
                <div className="alN">{e.name}</div>
              </Link>
            </li>
          ))}
        </div>
        {/* <ul></ul> */}
        <div className="sixPictures">
          {Images.map(e => (
            <Link key={e.id} to={"/Images/" + e.id}>
              <div className="pic">
                <div className="picSelf">
                  <img width="500px" src={e.url} />
                </div>
                <div className="picName">{e.name}</div>
              </div>
            </Link>
          ))}{" "}
        </div>
      </div>
    </div>
  )
}

export default Images
