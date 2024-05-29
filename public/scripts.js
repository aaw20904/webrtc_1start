const videoEl = document.querySelector('#my-video');
let stream = null;
const constraints = {
    audio: true,
    video: {width:320,height:200}
}

const getMicAndCamera = async()=>{
    try {
        changeButtons([
            'green','grey','grey','grey','grey','grey','grey','grey'
         ])
         stream = await navigator.mediaDevices.getUserMedia(constraints);
          
          
          
         changeButtons([
            'green','blue','blue','blue','grey','grey','grey','grey'
         ])
    } catch(e) {

        alert("acces denied")
       console.log(e)
    }
    
}

const showMyFeed = e=>{
   videoEl.srcObject = stream;//this will set our MediaStream to our <Video/> tag 
   const tracks = stream.getTracks();
   changeButtons([
    'green','gray','blue','grey','grey','grey','grey','grey'
 ])
   console.log(tracks);
}

const stopMyFeed = e=>{
    const tracks = stream.getTracks();
    changeButtons([
        'blue','grey','grey','grey','grey','grey','grey','grey'
     ])
    tracks.forEach(track=>{
        track.stop(); //disassotiates a track with the source
    })
}
//RogStrix G531GT-BQ132


document.querySelector('#share').addEventListener('click',e=>getMicAndCamera(e));
document.querySelector("#show-video").addEventListener('click',(e)=>showMyFeed(e))
document.querySelector("#stop-video").addEventListener('click',(e)=>stopMyFeed(e))
document.querySelector("#change-size").addEventListener('click',(e)=>changeVideoSize(stream))