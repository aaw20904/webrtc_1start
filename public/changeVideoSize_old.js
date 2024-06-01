    const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
    console.log(supportedConstraints);

const changeVideoSize = (strm, w=100, h=100) =>{
    strm.getVideoTracks().forEach(track=>{
        track.applyConstraints({width:w, height:h, frameRate:5})
    
        
    })
}