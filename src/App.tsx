import React, {Component} from 'react';
import './App.css';
import HelloWorldApp from './component/HelloWorldApp';

class App extends Component<any, any> {
    render() {
        return (
            <div className="App">
                <HelloWorldApp/>
            </div>
        );
    }
}

export default App;
