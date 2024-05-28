const videoEl = document.querySelector('#my-video');
let stream = null;
const constraints = {
    audio: true,
    video: true
}

const getMicAndCamera = async()=>{
    try {
         stream = await navigator.mediaDevices.getUserMedia(constraints);
         alert("Stream created!")
         console.log(stream);
    } catch(e) {

        alert("acces denied")
       console.log(e)
    }
    
}

const showMyFeed = e=>{
   alert("ShowMyFeed is working!");
   videoEl.srcObject = stream;//this will set our MediaStream to our <Video/> tag 
}

const stopMyFeed = e=>{
    alert("stop feed");
    const tracks = stream.getTracks();
    tracks.forEach(track=>{
        track.stop(); //disassotiates a track with the source
    })
}
//RogStrix G531GT-BQ132


document.querySelector('#share').addEventListener('click',e=>getMicAndCamera(e));
document.querySelector("#show-video").addEventListener('click',(e)=>showMyFeed(e))
document.querySelector("#stop-video").addEventListener('click',(e)=>stopMyFeed(e))