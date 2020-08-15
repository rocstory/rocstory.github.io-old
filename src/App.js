import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Entry from './components/Entry/Entry';
import {db} from './firebase';


class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      entryDisplay: false,
      projects: null,
      activities: null
    }
  }

  setEntry = (value) =>
  {
    this.setState({entryDisplay: value});
  }

  async componentDidMount()
  {
    // get list of projects and list of activities
    let project_entry = null; //projects.map((project) => <Entry key={project.title} entry={project} /> );
    let activity_entry = null //activities.map((activity) => <Entry key={activity.title} entry={activity} />);
    
    await db.collection('projects').orderBy("index", "desc").get().then( querySnapshot =>{
      const data = querySnapshot.docs.map(doc => doc.data());
      project_entry = data.map((entry) => <Entry key={entry.title} entry={entry} /> );
    });

    await db.collection('activities').orderBy("index", "desc").get().then( querySnapshot =>{
      const data = querySnapshot.docs.map(doc => doc.data());
      activity_entry = data.map((entry) => <Entry key={entry.title} entry={entry} /> );
    });

    this.setState((prevState) => { return {projects: project_entry, activities: activity_entry}});
  }



  render()
  {
    return (
      <div className="App">
        <Header setEntry={this.setEntry} entryDisplay={this.state.entryDisplay}/>
        <div className="entry-display">
          {this.state.entryDisplay ? this.state.activities : this.state.projects}
        </div>

        <div className="footer">
          <p>Always be kind. </p>
          <p>Always be honest.</p>
          <p>Always be consistent.</p>

        </div>



      </div>
    );
  }
}

export default App;
