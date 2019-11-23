import React from 'react'
import { Albums } from './components/Albums.js'
import { Playlist } from './components/Playlists.js'
import data from './data.json'
import playlistData from './stretch-goal.json'
import './app.css'

export const App = () => {
  return (
    <main>
      <aside>
        <h1>Playlists</h1>
        <section className="playlists">
          {playlistData.playlists.items.map((playlist) => (
            <Playlist
              key={playlist.id}
              playlist={playlist} />
          ))}
        </section>
      </aside>
      <div>
        <h1>New albums & singles</h1>
        <section className="albumList">
          {data.albums.items.map((album) => (
            <Albums
              key={album.id}
              album={album} />
          ))}
        </section>
      </div>
    </main>
  )
}
