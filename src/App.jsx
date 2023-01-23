import './App.css'
import Test from './components/test'
import Vitemain from './components/vitemain'

function App() {
  const title = "Prime React"
  const description = "Test app caption"

  return (
    <div className="App">
      <Test baslik={title} aciklama={description}/>
      <Vitemain />
    </div>
  )
}

export default App
