console.log("Welcome to spotyfy");

// Inizilizing the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {
        songName:"Kuch_to_bata" , 
        filePath:"img/Kuch_to_bata.mp3",
        coverPath:"img/Cover.jpg"
    },
   
]

// audioElement.play();
// Handle play/pause click

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})
// Listen to Events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
});

// https://www.youtube.com/watch?v=ANzPM5-lwXc&list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3
// time = 58:31 