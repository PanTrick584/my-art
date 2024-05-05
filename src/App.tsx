
import './App.scss'
import Main from './containers/Main'
import { ContextProvider } from './context/context';

function App() {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  )
}

export default App
