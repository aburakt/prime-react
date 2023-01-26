import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.min.css"
import reactLogo from './assets/react.svg'
import Header from "./components/Header";
import MainTab from "./components/TabMenu";
import './App.css'

function App() {

  return (
    <>
      <Header />
      <MainTab />
      {/* <div className="App">
        <div>
          <a href="#">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="#">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Appname</h1>
      </div> */}
    </>
  )
}

export default App
