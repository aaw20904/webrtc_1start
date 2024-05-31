const audioInputEl = document.querySelector('#audio-input');
const audioOutputEl = document.querySelector('#audio-input');
const videoInputEl = document.querySelector('#video-input');

const getDevices = async()=>{
    try{
         const devices = await navigator.mediaDevices.enumerateDevices();
         devices.forEach(d=>{
               let option = document.createElement("option");//create the option tag
               option.value = d.deviceId;
               option.text = d.label;
               if (d.kind === "audioinput"){
                 audioInputEl.appendChild(option)
               } else if (d.kind === 'audiooutput'){
                 audioOutputEl.appendChild(option);
               } else if (d.kind === "videoinput"){
                 videoInputEl.appendChild(option);
               }
         })
     
    }catch(w){
        console.log(w)
    }
   

}

const changeAudioInput=()=>{

}


const changeAudioOutput=()=>{

}


const changeVideo=()=>{

}

getDevices();