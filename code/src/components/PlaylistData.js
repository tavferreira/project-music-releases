import React from 'react'
import './playlistData.css'

export const PlaylistData = (props) => {
    return (
        <div className="playlistData">
            <h2><a href={props.playlist.external_urls.spotify}>{props.playlist.name}</a></h2>
            <h3>{props.playlist.owner.display_name}
            </h3>
        </div>
    )
}