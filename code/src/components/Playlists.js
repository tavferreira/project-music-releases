import React from 'react'
import { PlaylistCover } from './PlaylistCover.js'
import { PlaylistData } from './PlaylistData.js'
import './playlists.css'

export const Playlist = (props) => {
    console.log(props)
    return (
        <div className="playlistCard">
            <PlaylistCover
                key={props.playlist.images[0].url}
                image={props.playlist.images[0]} />
            <PlaylistData
                key={props.playlist.name + props.playlist.release_date}
                playlist={props.playlist} />
        </div>
    )
}