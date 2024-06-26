const videoEl = document.querySelector('#my-video');
const mediaStream = false;
let stream = null;
const constraints = {
    audio: true,
    video: {width:320, height:200}
}

const getMicAndCamera = async()=>{
    try {
        changeButtons([
            'green','grey','grey','grey','grey','grey','grey','grey'
         ])
         stream = await navigator.mediaDevices.getUserMedia(constraints);
         let devices = await navigator.mediaDevices.enumerateDevices();
         console.log(devices)
          
          
          
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
    'green','gray','blue','blue','blue','blue','grey','grey'
 ])
   console.log(tracks);
}

const stopMyFeed = e=>{
    const tracks = stream.getTracks();
    changeButtons([
        'blue','grey','grey','grey','grey','grey','blue','grey'
     ])
    tracks.forEach(track=>{
        track.stop(); //disassotiates a track with the source
    })
}
//RogStrix G531GT-BQ132


document.querySelector('#share').addEventListener('click',e=>getMicAndCamera(e));
document.querySelector("#show-video").addEventListener('click',(e)=>showMyFeed(e))
document.querySelector("#stop-video").addEventListener('click',(e)=>stopMyFeed(e))
document.querySelector("#change-size").addEventListener('click',(e)=>{
        changeVideoSize(stream, document.querySelector("#vid-width").value, document.querySelector("#vid-height").value)})
document.querySelector("#start-record").addEventListener('click',(e)=>{
            if(!stream){///you could use mediaStream to write screenshoots
                alert("no stream to record!");
                return;
            }
            startRecording(stream)
                changeButtons([
                    'blue','grey','blue','grey','grey','blue','grey','grey'
                ])
            })
        document.querySelector("#stop-record").addEventListener('click',(e)=>{stopRecording(stream)
            changeButtons([
                'blue','grey','blue','blue','blue','grey','blue','grey'
             ])
        })
        document.querySelector("#play-record").addEventListener('click',(e)=>{playRecording(stream)
            changeButtons([
                'blue','grey','grey','grey','grey','blue','grey','grey'
             ])
        })


document.querySelector("#share-screen").addEventListener('click',(e)=>{
                shareScreen(stream);

            })

document.querySelector("#audio-input").addEventListener('change',(e)=>changeAudioInput(e))
document.querySelector("#audio-output").addEventListener('change',(e)=>changeAudioOutput(e))
document.querySelector("#video-input").addEventListener('change',(e)=>changeVideo(e))