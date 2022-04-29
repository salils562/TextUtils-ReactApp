import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  const [mode,setMode]=useState('light');
  const [greenmode,setGreenMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const [buttonColor,setButtonColor]=useState('primary');
  let showAlert=(message,type)=>{
   setAlert({
     msg: message,
     type: type
   })
   setTimeout(()=>{
   setAlert(null);
   },2000)
  }
  const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor="black";
    showAlert("Dark mode Enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor="white";
    showAlert("Dark mode Disabled","success");
  }
  }
  const toggleGreenMode=()=>{
  if(greenmode==='light'){
    setGreenMode('green');
    setButtonColor('success');
    showAlert("Green mode enabled","success")
    document.body.style.backgroundColor='#1fc71ff2';
  }
  else{
    setGreenMode('light');
    setButtonColor('primary');
    showAlert("Green mode Disabled","success")
    document.body.style.backgroundColor='white';
  }
  }
  let title="TextUtils";
  return (
   <>
   <Navbar title={title} mode={mode} greenMode={toggleGreenMode} greenmode={greenmode} modeSetter={toggleMode}/>
   <Alert alert={alert}/>
   <TextForm heading="Enter text here" mode={mode} buttonColor={buttonColor} showAlert={showAlert}/>
   </>
  );
}

export default App;
