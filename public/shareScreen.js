const  shareScreen =async()=>{
    const options ={
        video: true,
        audio: false,
        surfaceSwitching:'include',
    }

    try {
        mediaStream = await navigator.mediaDevices.getDisplayMedia(options);
    } catch (e) {
        console.log(e)
    }

}