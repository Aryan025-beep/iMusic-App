console.log("running");
// initializing variables
let songIndex=0;
let audioelement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));




let songs=[
    {songname:"Sunflower-ft-postmelon" , filepath:"songs/1.mp3" , coverpath:"covers/1.jpg"},
    {songname:"Akon-Beautiful" , filepath:"songs/2.mp3" , coverpath:"covers/2.jpg"},
    {songname:"Baby-justin bieber" , filepath:"songs/3.mp3" , coverpath:"covers/3.jpg"},
    {songname:"Sorry-Justin Bieber" , filepath:"songs/4.mp3" , coverpath:"covers/4.jpg"},
    {songname:"Closer-The Chainsmokers" , filepath:"songs/5.mp3" , coverpath:"covers/5.jpg"},
    {songname:"Faded-Alan Walker" , filepath:"songs/6.mp3" , coverpath:"covers/6.jpg"},
    {songname:"Alone-Alan Walker" , filepath:"songs/7.mp3" , coverpath:"covers/7.jpg"},
    {songname:"Gangam-Style" , filepath:"songs/8.mp3" , coverpath:"covers/8.jpg"},
    {songname:"Heroes Tonight-Janji" , filepath:"songs/9.mp3" , coverpath:"covers/9.jpg"},
    {songname:"Despacito" , filepath:"songs/10.mp3" , coverpath:"covers/10.jpg"}
]
songitems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverpath; 
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname; 
})

// handle play pause click
masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// listen to events
audioelement.addEventListener('timeupdate' ,()=>{
    // update seekbar
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100)
    myprogressbar.value=progress;

})

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeallplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `songs/${songIndex+1}.mp3`;
        mastersongname.innerText = songs[songIndex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioelement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioelement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})




