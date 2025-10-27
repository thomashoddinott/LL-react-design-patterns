import { SplitScreen } from './SplitScreen'
import './App.css'

const LeftHandComponent = () => {
  return <h1 style={{backgroundColor: 'green'}}>Left</h1>
}

const RightHandComponent = () => {
  return <p style={{backgroundColor: 'red'}}>Right</p>
}

function App() {

  return (
    <SplitScreen
      left={LeftHandComponent}
      leftWeight={1}
      right={RightHandComponent}
      rightWeight={5}
    />
  )
}

export default App
