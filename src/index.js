import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/common/Header'
import NotFound from './components/notFound/NotFound'
import Detail from './components/detail/Detail'
import List from './components/list/list'
import './index.css'

export default function App() {

    return (
        <BrowserRouter>

            <div>
                <Header />
                <Switch>
                    <Route path="/" component={List} exact />
                    <Route path="/currency/:id" component={Detail} />
                    <Route component={NotFound} />
                </Switch>

            </div>
        </BrowserRouter>
    )
}


ReactDOM.render(<App />, document.querySelector('#root')) 