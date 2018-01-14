import React, { Component } from 'react';
import R from 'ramda';
import ProposalList from '../../components/proposalList';
import { Link } from 'react-router-dom';

class Projects extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let projectList = this.props.projectList;
    projectList = R.filter(project => {
      return project.support > 15; // show only project with support from 15 or more people
    }, projectList);
    return (
      <div>
        <h1>Alle projekter</h1>
        <div>
          {this.props.user ? (
            <Link to="/projects/new">Opret projekt</Link>
          ) : (
            <button onClick={() => this.props.updateState({ entityType: 'error', entity: 401 })}>Opret projekt</button>
          )}
        </div>
        {projectList.length ? (
          <ProposalList proposalList={projectList} />
        ) : (
          <p>Her ser lidt tomt ud. Prøv at udvide din søgning.</p>
        )}
      </div>
    );
  }
}

export default Projects;
