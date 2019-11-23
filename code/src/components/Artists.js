import React from 'react'
import './artists.css'

export const Artists = (props) => {
    return (
        <span className="artistLink"><a href={props.artist.external_urls.spotify}>{props.artist.name}</a><span> , </span></span>
    )
}