import { BrowserRouter } from "react-router-dom"
import Main from "./components/Main"

import './App.css'
import "./styles/styles.scss"
function App() {
    return(
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    )
}

export default App
