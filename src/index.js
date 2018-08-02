import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SenatorList from './SenatorList.js'

class App extends React.Component {
    state = {
      senators : []
    };

    async getData(){
      const res = await axios('https://theunitedstates.io/congress-legislators/legislators-current.json')
      return res.data
    }

    componentDidMount(){
      this.getData().then(data => {
          var senators = data.filter(legislator => legislator.terms[legislator.terms.length-1].type === "sen");
          senators.forEach(function(obj) {
            obj["voteYea"] = false
          });

          senators = Object.values(senators)

          this.setState({senators})
      })
    }
  
    getSenators(party,didVoteYea) {
      var rv = this.state.senators

      if(party == undefined){
        //noop
      } else if(party === "Republican"){
        rv = rv.filter(legislator => legislator.terms[legislator.terms.length-1].party === "Republican");
      } else {
        rv = rv.filter(legislator => legislator.terms[legislator.terms.length-1].party !== "Republican");
      }

      if(didVoteYea == undefined){
        //noop
      }  else {
        rv = rv.filter(legislator => legislator.voteYea == didVoteYea)
      }
      
      return rv
    }
    
    //Switch Individual Senator
    handleClick(i){
      var sens = this.state.senators
      const index  = sens.map(function(e) {return e.id.govtrack}).indexOf(i)
      sens[index].voteYea = !sens[index].voteYea
      this.setState({senators:sens})
    }

    render(){
        return(

        <div>
          <div>
            <h1>Total Yes Vote: {this.getSenators(null,true).length}</h1>
          </div>

          <div className="row">
              <div className="col-sm">
                  Democrats voting Nay ({this.getSenators("Democrat",false).length})
                  <SenatorList
                    onClick={(id) => this.handleClick(id)}
                    senators={this.getSenators("Democrat",false)}/>
              </div>
              <div className="col-sm">
                  Democrats voting Yay ({this.getSenators("Democrat",true).length})
                  <SenatorList
                    onClick={(id) => this.handleClick(id)}
                    senators={this.getSenators("Democrat",true)}/>
              </div>
              <div className="col-sm">
                  Republicans voting Yay ({this.getSenators("Republican",true).length})
                  <SenatorList
                    onClick={(id) => this.handleClick(id)}
                    senators={this.getSenators("Republican",true)}/>
              </div>
              <div className="col-sm">
                  Republicans voting Nay ({this.getSenators("Republican",false).length})
                  <SenatorList
                    onClick={(id) => this.handleClick(id)}
                    senators={this.getSenators("Republican",false)}/>
              </div>
          </div>
        </div>
        )
    };
}

ReactDOM.render(<App/>,document.getElementById("root"))