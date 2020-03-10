import React, {useState , useEffect}from 'react';
import './App.css';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.start();

function App() {

  const voiceCommands = () => {
    recognition.onstart= () =>{
      console.log("aca escuchan2")
    }
  recognition.onresult = (e) =>{
    let current = e.resultIndex;
    let transcript = e.results[current][0].transcript;
    console.log(transcript);
  
    let mobileRepeatBug = (current === 1 && transcript === e.results[0][0].transcript);

    if(!mobileRepeatBug) {
      if(transcript.length <=4) {
        document.getElementById('final').innerHTML = transcript
      }
    }}}
//     setTimeout(() => {
//       recognition.start();
//     }, 50);
//   }
//   recognition.onspeechend = () => {
//     recognition.stop();
//     console.log('voice stopped');
//   }
// }

  useEffect(( ) =>{
    voiceCommands();
  });

  return (
    <div className="App">
      <h1>Ingresa tu pin</h1>
      
        <p id="final"></p>
     <button type="button" className="btn btn-info">OK</button>
</div>
  );
};

export default App;





// import React, { useState } from 'react';
// import Camera from 'react-html5-camera-photo';
// import 'react-html5-camera-photo/build/css/index.css';
 
// import ImagePreview from './ImagePreview'; // source code : ./src/demo/AppWithImagePreview/ImagePreview
 
// function App (props) {
//   const [dataUri, setDataUri] = useState('');
 
//   function handleTakePhotoAnimationDone (dataUri) {
//     console.log('takePhoto');
//     setDataUri(dataUri);
//   }
 
//   const isFullscreen = false;
//   return (
//     <div>
//       {
//         (dataUri)
//           ? <ImagePreview dataUri={dataUri}
//             isFullscreen={isFullscreen}
//           />
//           : <Camera onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
//             isFullscreen={isFullscreen}
//           />
//       }
//     </div>
//   );
// }
 
// export default App;