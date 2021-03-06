import React, { Component } from 'react';
import FeatherIcon from '../../../components/featherIcon';

class SubmissionModal extends Component {
  render() {
    return (
      <div>
        <h2>Din valghandling er registreret</h2>
        <p>Du sendes nu tilbage til forslagslisten.</p>
        <div className="mt-8 mb-4">
          <a
            to="../../proposals"
            onClick={() => {
              this.props.updateState({ entityType: 'modal', entity: false });
              window.history.go(-2);
            }}
            className="btn btn-primary">
            <FeatherIcon name="ArrowLeft" className="mr-2" />Tilbage til mine forslag
          </a>
        </div>
      </div>
    );
  }
}

export default SubmissionModal;
