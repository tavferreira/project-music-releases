import React from 'react'
import { Artists } from './Artists.js'
import './albumData.css'

export const AlbumData = (props) => {
    return (
        <div className="albumData">
            <h2><a href={props.album.external_urls.spotify}>{props.album.name}</a></h2>
            <h3>
                {props.album.artists.map((artist) => (
                    <Artists
                        key={artist.id}
                        artist={artist} />
                ))}
            </h3>
        </div>
    )
}