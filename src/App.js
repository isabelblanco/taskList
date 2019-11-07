import React from 'react';
import './App.css';
import CustomizedTables from './templates/TableData';
import UncontrolledTextField from './templates/AddDataform';
import transformData from './dataRequest/transformData';
import getUrl from './dataRequest/fetchParams';
import sendData from './dataRequest/sendData';

const params = getUrl;
const sendDataForm = sendData;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      rows : null 
    };
  }

  getData = (param) => {
    fetch(params.getUrl(param), {method:'GET',
        headers: params.getHeaders(),
    })
    .then(response => {
        return response.json()}
    )
    .then(json => 
      {
        const data = json.results;
        this.createData(data);
      }
    );
  }

  createData = (theData) => {
    const rows = [];
    theData.forEach(item => {
        rows.push(transformData(item))
    });
    this.setState({
        rows:rows
    })
  }

  render () {
    const data = this.state;
    return (
      <div className="App">
        <h1>Task list</h1>
        { data.rows &&
          <CustomizedTables rows={data.rows}></CustomizedTables> 
        }
        <button variant="contained" className="allTasks" onClick={this.getData}>All tasks</button>
        <button variant="contained" className="doneTasks" onClick={this.getData.bind(this, "done")}> Done tasks</button>
        <UncontrolledTextField></UncontrolledTextField>
        <button variant="contained" className="addTask" onClick={sendDataForm}>Add Task</button>
      </div>
    );
  }
}

export default App;
