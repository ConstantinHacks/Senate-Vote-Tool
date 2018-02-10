import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SenatorList from './SenatorList.js'

class App extends React.Component {
    state = {
      demSenatorsNo : [],
      demSenatorsYes : [],
      repSenatorsYes : [],
      repSenatorsNo : []
    };

    async getData(){
      const res = await axios('https://theunitedstates.io/congress-legislators/legislators-current.json')
      return res.data
    }

    componentDidMount(){
      this.getData().then(data => {
          const senators = data.filter(legislator => legislator.terms[legislator.terms.length-1].type === "sen");
          const demSenatorsNo = senators.filter(legislator => legislator.terms[legislator.terms.length-1].party !== "Republican");
          const repSenatorsNo = senators.filter(legislator => legislator.terms[legislator.terms.length-1].party === "Republican");

          this.setState({demSenatorsNo,repSenatorsNo})
          console.log(this.state.demSenatorsNo);
          console.log(this.state.repSenatorsNo);
      })
    }

    render(){
        return(
        <div className="row">
            <div className="col-sm">
                Democrats voting Nay ({this.state.demSenatorsNo.length})
                <SenatorList senators={this.state.demSenatorsNo}/>
            </div>
            <div className="col-sm">
                Democrats voting Yay ({this.state.demSenatorsYes.length})
            </div>
            <div className="col-sm">
                Republicans voting Yay ({this.state.repSenatorsYes.length})
            </div>
            <div className="col-sm">
                Republicans voting Nay ({this.state.repSenatorsNo.length})
                <SenatorList senators={this.state.repSenatorsNo}/>
            </div>
        </div>
        )
    };
}

ReactDOM.render(<App/>,document.getElementById("root"))
