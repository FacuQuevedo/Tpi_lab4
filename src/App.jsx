import { ToggleHOCwithToggle } from './components/ToggleHoc'
import Toggle from './components/ToggleRender'
import './App.css'
import { ToolTipWithHoc } from './components/ToolTipHoc'
import ToolTipRender from './components/ToolTipRender'


function App() {
  return (<>
    <ToggleHOCwithToggle>
      <p>hola</p>
    </ToggleHOCwithToggle>
    <Toggle>
      <p>holas</p>
    </Toggle>
    <ToolTipWithHoc>
      <p>hola</p>
    </ToolTipWithHoc>
    <ToolTipRender>
      <p>Bonjour</p>
    </ToolTipRender>
  </>)
}

export default App
