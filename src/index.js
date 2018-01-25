import React from 'react';
import ReactDOM from 'react-dom';


const SENATORS = [{
    name: "Jeff Flake",
    party: "R",
    id: 1
  }, {
    name: "Chuck Schumer",
    party: "D",
    id: 2
  }, {
    name: "Bernie Sanders",
    party: "D",
    id: 3
  }];

  class SenatorRow extends React.Component {
    render() {
      const senator = this.props.senator;
  
      return (
        <tr>
          <td>{senator.name}</td>
        </tr>
      );
    }
  }

class App extends React.Component {
    render(){
        const dem_rows = [];
        const gop_rows = [];

        console.log(this.props.senators);
        

        this.props.senators.forEach((senator) => {
            if(senator.party === "D"){
                dem_rows.push(
                    <SenatorRow key={senator.id} senator={senator}/>
                )
            } else {
                gop_rows.push(
                    <SenatorRow key={senator.id} senator={senator}/>
                )
            }
        });

        return (
             <div className="row">
                <div className="col-sm">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="demsNo">Democrats (Nay)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dem_rows}
                        </tbody>
                    </table>
                </div>
                <div className="col-sm">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="demsNo">Democrats (Nay)</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div className="col-sm">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th id="GOPYes" scope="col">Republicans (Yea)</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div className="col-sm">
                    <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th id="GOPNo" scope="col">Republicans (Nay)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {gop_rows}
                            </tbody>
                        </table>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App senators={SENATORS}/>,document.getElementById("root"))