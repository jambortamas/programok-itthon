import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      events: {}
    }
  }

  componentDidMount() {
    fetch('http://api.turisztikaiadatbazis.hu/v1/programs' , {
      headers: {
        'Accept' : 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => this.setState({events: data.items}))
  }

  render() {

    return (
      <div className="event-container">
        <Header />
        {
          [...this.state.events]
            .map(event => <Event eventData={event} />)
        }
      </div>
    );
  }
}

class Event extends React.Component {
  render() {

    let theDate = new Date(this.props.eventData.date_from);

    let theEvent = {
      date: theDate.toLocaleDateString('hu-HU'),
      name: this.props.eventData.name,
      desc: this.props.eventData.short_description,
      thumb: this.props.eventData.thumbnail
    }

    return (
      <div className="eventBox" style={{marginBottom:'50px'}}>
        <time>{theEvent.date}</time>
        <h2>{theEvent.name}</h2>
        <p>{theEvent.desc}</p>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="title">
        <h1>Programok, itthon</h1>
        <input type="text"/>
      </div>
    );
  }
}

export default App;