var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists: function () {

    var objPlaylist = {};

    for (var playlist in this.playlists){

      var numberOfTracks = this.playlists[playlist].tracks;

      objPlaylist[playlist] = this.playlists[playlist].name + " - " + numberOfTracks.length + " tracks";
    }
    return objPlaylist
  },


  printTracks: function () {

  var objTrack = {};

  for (var track in this.tracks){
    objTrack[track] = this.tracks[track].name + " by " + this.tracks[track].artist + " (" + this.tracks[track].album + ")";
  }
  return objTrack;
  },

  printPlaylist: function (playlistId) {


    var objPlaylistId = {};
    var tracks = this.playlists[playlistId].tracks

    objPlaylistId[playlistId] = this.printPlaylists()[playlistId];
    console.log(this.playlists[playlistId].tracks)
    for (i = 0; i < tracks.length; i++){
      objPlaylistId[tracks[i]] = this.printTracks()[tracks[i]]
    }
    return objPlaylistId
  },

  addTrackToPlaylist: function (trackId, playlistId) {

    var locPlaylistId =this.playlists[playlistId].tracks

    locPlaylistId.push(trackId)
    return locPlaylistId
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function (name, artist, album) {

  var id = "t" + this.uid();
  var newTrack = {};

  newTrack["id"] = id;
  newTrack["name"] = name;
  newTrack["artist"] = artist;
  newTrack["album"] = album;
  this.tracks[id] = newTrack;
  return this.tracks
  },

  addPlaylist: function (name) {

    var pId = "p" + this.uid();
    var newPlaylist = {};

    newPlaylist["id"] = pId;
    newPlaylist["name"] = name;
    newPlaylist["tracks"] = "";
    this.playlists[pId] = newPlaylist;
    return this.playlists
  }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

//----------------------------
//Test:
//console.log(library.printPlaylists());
//----------------------------

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

//----------------------------
//Test:
//console.log(printTracks());
//----------------------------

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

//----------------------------
//Test:
//console.log(library.printPlaylist("p02"));
//----------------------------

// adds an existing track to an existing playlist

//----------------------------
//Test:
//console.log(library.addTrackToPlaylist("t03","p01"));
//----------------------------

// generates a unique id
// (use this for addTrack and addPlaylist)

// adds a track to the library

//----------------------------
//Test:
//console.log(library.addTrack("song", "John Doe", "Album 1"));
//----------------------------

// adds a playlist to the library

//----------------------------
//Test:
//console.log(library.addPlaylist('my Playlist'))
//----------------------------

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}