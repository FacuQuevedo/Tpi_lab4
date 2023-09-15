import { ToggleHOCwithToggle } from './components/ToggleHoc'
import Toggle from './components/ToggleRender'
import './App.css'


function App() {
  return (<>
    <ToggleHOCwithToggle>
      <h1>holis</h1>
    </ToggleHOCwithToggle>
    <Toggle>
      <h1>holas</h1>
    </Toggle>
<ToggleHOCwithToggle><h1>gola</h1></ToggleHOCwithToggle>
  </>)
}

export default App
