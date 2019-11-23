import React from 'react'
import { AlbumCover } from './AlbumCover.js'
import { AlbumData } from './AlbumData.js'
import './album.css'

export const Albums = (props) => {
    return (
        <div className="albumCard">
            <AlbumCover
                key={props.album.images[0].url}
                image={props.album.images[0]} />
            <AlbumData
                key={props.album.name + props.album.release_date}
                album={props.album} />
        </div>
    )
}