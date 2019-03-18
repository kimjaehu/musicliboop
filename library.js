var library = {
  tracks: { 
    t01: { 
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
      duration: 180,
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
      duration: 220,
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
      duration: 240,
    }
  },
  playlists: {
    p01: { 
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: { 
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
}

class Library {
  constructor (name,creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = []
  }

  addPlaylist(playlist) {
    this.playlists.push(playlist)
  }
}

class Playlist {
  constructor (name, rating, duration) {
    // this.id = id;
    this.name = name;
    this.rating = rating;
    this.duration = duration;
    this.tracks = []
  }
  
  addTrack(track) {
    // track = track.id;
    this.tracks.push(track)
  }
  
  overallRating() {
    // let totalRating = 0
    // for (let track in this.tracks){
    //   totalRating = totalRating + this.tracks[track].rating
    // }
    const totalRating = this.tracks.reduce((accumulator, track) => accumulator + track.rating, 0)
    this.rating = totalRating / this.tracks.length
  }

  totalDuration(duration) {
    // for (let track in this.tracks){
    //   totalDuration = totalDuration + this.tracks[track].duration
    // }
    this.duration = this.tracks.reduce((accumulator, track) => accumulator + track.duration, 0)
  }
}

class Track{
  constructor (track, rating) {
    this.track = {...track}
    // this.id = track.id;
    // this.name = track.name;
    // this.artist = track.artist;
    // this.album = track.album;
    // this.duration = track.duration;
    this.rating = rating;
  }
}

let myLibrary = new Library('myLibrary', 'Elon Musk')
let p01 = new Playlist('user')
let track01 = new Track(library.tracks.t01, 1)
let track02 = new Track(library.tracks.t02, 2)
let track03 = new Track(library.tracks.t03, 3)

p01.addTrack(track01)
p01.addTrack(track02)
p01.addTrack(track03)
p01.overallRating()
p01.totalDuration()
myLibrary.addPlaylist(p01)

console.log('track',track01)
console.log('playlist',p01)
console.log('library', myLibrary)