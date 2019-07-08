import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/common/Header'
import List from './components/list/list'
import './index.css'

export default function App() {
   
    return (
        <div>
            <Header />

            <List />
        </div>
    )
}


ReactDOM.render(<App />, document.querySelector('#root')) 