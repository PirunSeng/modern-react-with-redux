import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { title: 'One More Night', duration: '4:05' },
    { title: 'Get Low', duration: '5:05' },
    { title: 'Turn down for what', duration: '6:05' }
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
