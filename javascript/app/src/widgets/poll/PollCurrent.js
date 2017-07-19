import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class PollCurrent extends Component {
  render() {
    const proposalid = this.props.proposal.id
    const poll = this.props.poll
    return (
      <div>
        {poll.uservote = null ?
          <VotingBoothBtn vote="Stem" proposalid={proposalid}/>
          :<VotingBoothBtn vote="Ændre stemme" proposalid={proposalid}/>
        }
      </div>
    );
  }
}

class VotingBoothBtn extends Component {
  render() {
    return (
      <Link to={`${this.props.proposalid}/vote`} target="_blank">
        <button>{this.props.vote}</button>
      </Link>
    );
  }
}

export default PollCurrent;
