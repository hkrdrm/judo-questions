import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import questions from './all_questions.json'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import _ from 'lodash'

class App extends Component {
  constructor(){
    super()
    this.state = {
      index: 0,
      values: {},
      answers: [],
      english_value: null,
      japanese_value: null,
      english_disabled: false,
      japanese_disabled: false,
    }
  }

  onEnglish = (event) => {
    const { index } = this.state
    _.each(questions[index].answer, (a) => {
      if(a.split(' - ')[0] === event.target.value){
        this.setState({ english_value: event.target.value })
      }
    })
  }

  render() {
    console.log(questions)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Judo Questions</h1>
        </header>
        <div className="content">
          <Card style={{width: 500}}>
            <CardContent>
              <div>
                {questions[this.state.index].question}
              </div>
              <div>
                <TextField disabled={this.state.english_disabled} name="english" label="English" onChange={this.onEnglish} />
              </div>
              <div>
                <TextField disabled={this.state.japanese_disabled} name="japanese" label="Japanese" onChange={this.onChange} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default App
