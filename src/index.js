import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {timestamp: new Date};

        this.timerId = setInterval(() => this.setState({timestamp: new Date}), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        const {timestamp} = this.state;

        return (
            <div>
                {timestamp.toLocaleTimeString()}
            </div>
        );
    }
}

function render() {
    ReactDOM.render(<App/>, document.getElementById('root'));
}

render();

export default render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
