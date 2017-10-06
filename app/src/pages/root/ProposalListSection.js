import React, { Component } from 'react';
import R from 'ramda';
import {Link} from 'react-router-dom';
import LoadingSpinner from '../../widgets/LoadingSpinner.js';
import { CheckSquare, Square } from 'react-feather';

class ProposalListSection extends Component {
  render() {
    var proposals = this.props.proposals;
    if (!proposals || R.isEmpty(proposals)) {
      return (
        <div>
          <LoadingSpinner/>
        </div>
      )
    } else if (proposals.empty) {
      return <p>Du har vist ikke stemt på noget endnu</p>
    } else {
      return (
        <div>
        {proposals.map(function (proposal, index) {
          return (
            <Link key={proposal.id} to={`/proposal/${proposal.id}`} className="link black-90">
              <div className="bg-white pa3 pa4-ns mv2 ba b--black-10 br2 card shadow-6 flex">
                <div className="pr3 pr4-ns flex items-center">
                  { proposal.vote ?
                  <CheckSquare className="f3 i-green pb1"/>:
                  <Square className="f3 i-green pb1"/>
                  }
                </div>
                <div className="flex-auto">
                  <h3 className="f5 f4-ns hyphen-text mv2">{proposal.nummer}: {proposal.titelkort.replace('.','')}</h3>
                  {/*<p className="f5 ttl small-caps black-70 mv2">
                    <span className="mr2"><b>Session:</b> {proposal.Periode.titel}</span>
                    <span className="mr2"><b>Status:</b> {proposal.Sagsstatus.status}</span>
                  </p>*/}
                </div>
              </div>
            </Link>
          );
        })}
        </div>
      );
    }
  }
}

export default ProposalListSection;
