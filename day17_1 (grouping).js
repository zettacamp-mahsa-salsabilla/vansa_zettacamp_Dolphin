let songLists = [
    {
        "songTitle" : "Bad Liar",
        "artist" : "Imagine Dragons",
        "genre" : "Alternative Pop",
        "duration" : 4, //4 menit
    },
    {
        "songTitle" : "Summertime Sadness",
        "artist" : "Lana Del Rey",
        "genre" : "Pop",
        "duration" : 4, //4 menit
    },
    {
        "songTitle" : "Shape Of You",
        "artist" : "Ed Sheeran",
        "genre" : "Pop",
        "duration" : 3, //3 menit
    },
    {
        "songTitle" : "Hymn For The Weekend",
        "artist" : "Coldplay",
        "genre" : "Alternative Pop",
        "duration" : 4, //4 menit
    },
    {
        "songTitle" : "Numb",
        "artist" : "Linkin Park",
        "genre" : "Alternative Rock",
        "duration" : 3, //3 menit
    },
    {
        "songTitle" : "Radio",
        "artist" : "Lana Del Rey",
        "genre" : "Pop",
        "duration" : 3, //3 menit
    },
    {
        "songTitle" : "Demons",
        "artist" : "Imagine Dragons",
        "genre" : "Alternative Rock",
        "duration" : 2, //2 menit
    },
    {
        "songTitle" : "Thinking Out Loud",
        "artist" : "Ed Sheeran",
        "genre" : "Jazz",
        "duration" : 4, //4 menit
    },
    {
        "songTitle" : "The Scientist",
        "artist" : "Coldplay",
        "genre" : "Alternative Rock",
        "duration" : 5, //5 menit
    },
    {
        "songTitle" : "Crawling",
        "artist" : "Linkin Park",
        "genre" : "Rock",
        "duration" : 3, //3 menit
    },
    {
        "songTitle" : "Young and Beautiful",
        "artist" : "Lana Del Rey",
        "genre" : "Pop",
        "duration" : 3, //3 menit
    },
    {
        "songTitle" : "On Top of the World",
        "artist" : "Imagine Dragons",
        "genre" : "Pop Rock",
        "duration" : 3, //3 menit
    },
    {
        "songTitle" : "Castle on the Hill",
        "artist" : "Ed Sheeran",
        "genre" : "Pop",
        "duration" : 4, //4 menit
    },
    {
        "songTitle" : "Something Just Like This",
        "artist" : "Coldplay",
        "genre" : "Pop",
        "duration" : 4, //4 menit
    },
    {
        "songTitle" : "Breaking the Habit",
        "artist" : "Linkin Park",
        "genre" : "Rock",
        "duration" : 3, //3 menit
    },
    {
        "songTitle" : "Say Yes to Heaven",
        "artist" : "Lana Del Rey",
        "genre" : "Jazz",
        "duration" : 4, //4 menit
    },
    {
        "songTitle" : "Enemy",
        "artist" : "Imagine Dragons",
        "genre" : "Pop Rock",
        "duration" : 4, //4 menit
    },
    {
        "songTitle" : "I Don't Care",
        "artist" : "Ed Sheeran",
        "genre" : "Pop",
        "duration" : 5, //5 menit
    },
    {
        "songTitle" : "Trouble",
        "artist" : "Coldplay",
        "genre" : "Alternative Rock",
        "duration" : 4, //4 menit
    },
    {
        "songTitle" : "One More Light",
        "artist" : "Linkin Park",
        "genre" : "Pop Rock",
        "duration" : 5, // 5 menit
    }
]

function basedOnArtists (artist){
    let arr = [];
    let groupSongArtis = [];

    songLists.map((detailSong) => {

        // display filter
        if(detailSong.artist === artist){
            // console.log(detailSong)

            arr.push(detailSong);
        }

        // grouping
        if (groupSongArtis.length > 0) {
            let indexFound = 0;
            let foundCurrentGroup = false;
            for (const eachGroup of groupSongArtis) {
                
                if (eachGroup.artist === detailSong.artist) {
                    foundCurrentGroup = true;
                    break;
                }
                indexFound++;
            }

            // push based on current group or not
            if (foundCurrentGroup) {
                groupSongArtis[indexFound].songs.push(
                    {
                        songTitle : detailSong.songTitle,
                            genre : detailSong.genre,
                            duration : detailSong.duration, // 
                    }
                )
            } else {
                groupSongArtis.push({
                    artist: detailSong.artist,
                    songs: [
                        {
                            songTitle : detailSong.songTitle,
                            genre : detailSong.genre,
                            duration : detailSong.duration, //
                        }
                    ]
                }) 
            }
          
        } else {
            groupSongArtis.push({
                artist: detailSong.artist,
                songs: [
                    {
                        songTitle : detailSong.songTitle,
                        genre : detailSong.genre,
                        duration : detailSong.duration, //
                    }
                ]
            })
        }
    });

    groupSongArtis.map((song) => console.log(song))
    // console.log('group song by artis : ' + groupSongArtis.map((song) => console.log(song)))
    // console.log('-----------------------------------')
    return arr;
}


function basedOnGenre (genre){
    let arr = [];
    let groupSongGenre = [];

        songLists.map((detailSong) => {
            // filter
            if(detailSong.genre === genre){
                // console.log(detailSong)

                arr.push(detailSong);
            }

            // grouping
            if (groupSongGenre.length > 0) {
                let indexFound = 0;
                let foundCurrentGroup = false;
                for (const eachGroup of groupSongGenre) {
                   
                    if (eachGroup.genre === detailSong.genre) {
                        foundCurrentGroup = true;
                        break;
                    }
                    indexFound++;
                }

                // push based on current group or not
                if (foundCurrentGroup) {
                    groupSongGenre[indexFound].songs.push(
                        {
                            songTitle : detailSong.songTitle,
                                genre : detailSong.genre,
                                duration : detailSong.duration, // 
                        }
                    )
                } else {
                    groupSongGenre.push({
                        genre: detailSong.genre,
                        songs: [
                            {
                                songTitle : detailSong.songTitle,
                                genre : detailSong.genre,
                                duration : detailSong.duration, //
                            }
                        ]
                    })
                }
               
            } else {
                groupSongGenre.push({
                    genre: detailSong.genre,
                    songs: [
                        {
                            songTitle : detailSong.songTitle,
                            genre : detailSong.genre,
                            duration : detailSong.duration, //
                        }
                    ]
                })
            }
        });

        groupSongGenre.map((song) => console.log(song))
        // console.log('group song by filter genre : ' + groupSongGenre.map((song) => console.log(song)))
        // console.log('-----------------------------------')
        return arr;
    }


function basedOnDuration (){
    let totalDuration = 0;
    let arr = [];
    songLists.sort(randomSong);

        songLists.map((detailSong) => {
        if(totalDuration <= 60){
  
            if((totalDuration + detailSong.duration) <= 60){
                totalDuration = totalDuration + detailSong.duration
                
                arr.push(detailSong)
            }
        }
    });
    
    console.log('totalDuration = ' + totalDuration)
    return arr;
}
    
function randomSong(a, b) {
    return 0.5 - Math.random();
    }

     // for display grouping + filter result
    // console.log(basedOnArtists('Ed Sheeran'))
    // console.log(basedOnGenre('Pop'))
    // console.log(basedOnDuration())

    // for display grouping only
    // basedOnGenre()
    // basedOnDuration()
    basedOnArtists()