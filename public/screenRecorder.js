let recorder;
  const recordedBlob=[]

const startRecording =(str)=>{
    console.log("start..")
    recorder = new MediaRecorder(str);

   recorder.ondataavailable=(e)=>{
      console.log("data avaliable for the media recorder")
      recordedBlob.push(e.data)
   }

   recorder.start()
}

const stopRecording =(str)=>{
    console.log("stop..")
     recorder.stop()
  }

  const playRecording =(str)=>{
    console.log("play..")
    const superBlob = new Blob(recordedBlob);//array of blobs
    const recordedVideoEl = document.querySelector('#other-video');
    recordedVideoEl.src = window.URL.createObjectURL(superBlob);
    recordedVideoEl.controls = true;
    recordedVideoEl.play();
  }