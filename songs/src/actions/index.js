// Action creator

// name export
export const selectSong = (song) => {
  // return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}

// default export
// const selectSong = (song) => {
//   // return an action
//   return {
//     type: 'SONG_SELECTED',
//     payload: song
//   }
// }
// export default selectSong

// Note
// import from default export: no need {}
// import from name export: need {}
// e.g import { selectSong } from ...
// e.g import selectSong from ...