import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



class App extends React.Component {
    componentDidMount(){
        axios.get('https://theunitedstates.io/congress-legislators/legislators-current.json')
            .then(res => {                
                const senators = res.data.filter(legislator => legislator.terms[legislator.terms.length-1].type === "sen");
                return senators
            });
    }

    render(){
        return(
        <div className="row">
            <div className="col-sm">
                Democrats voting Nay
            </div>
            <div className="col-sm">
                Democrats voting Yay
            </div>
            <div className="col-sm">
                Republicans voting Yay
            </div>
            <div className="col-sm">
                Republicans voting Nay
            </div>
        </div>
        )
    };
}



ReactDOM.render(<App/>,document.getElementById("root"))