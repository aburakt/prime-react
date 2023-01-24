import "primereact/resources/themes/lara-dark-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.min.css"                                //css
import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import {InputText} from 'primereact/inputtext'
import {Button} from 'primereact/button'
import {Toast} from 'primereact/toast'

function App() {
  const [text, setText] = useState('')
  const toastRef = useRef()

  const onButtonClick =  () => {
     if (text ) {
      toastRef.current.show({severity: 'info', summary: 'Success', detail: text})
     } else {
      toastRef.current.show({severity: 'error', summary: 'Error', detail: 'Value is required'})
     }
  } 
  return (
    <div className="App">
      <Toast ref={toastRef} />
      <div>
        <a href="#">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="#">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
      {text}
      </div>
      <span className="p-float-label">
        <InputText id="input_txt" value={text} onChange={e => setText(e.target.value)} />
        <label htmlFor="input_txt">Name</label>
      </span>
      <Button className="mt-5 " type="button" label="Submit" icon="pi pi-check" onClick={onButtonClick} />
    </div>
  )
}

export default App
