    const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
    console.log(supportedConstraints);

const changeVideoSize = (str) =>{
    str.getTracks().forEach(track=>{
        const capabilities =track.getSupported();
        console.log(capabilities);
    })
}