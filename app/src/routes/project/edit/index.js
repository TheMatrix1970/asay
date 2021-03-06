import React, { Component } from 'react';
import R from 'ramda';
import ProjectForm from '../../../components/projectForm';
import { ArrowLeft } from 'react-feather';

class EditProjectPage extends Component {
  render() {
    const project = R.find(R.propEq('id', Number(this.props.match.params.id)), this.props.projectList);
    const user = this.props.user;
    if (project && project.initiator.email === user.email) {
      return (
        <div className="flex-auto px-2">
          <div className="max-w-xl mx-auto">
            <h1>Rediger projekt</h1>
            <div className="bg-white border border-grey-lighter rounded-sm shadow px-4 md:px-8 py-8">
              <ProjectForm
                projectList={this.props.projectList}
                preferenceList={this.props.preferenceList}
                match={this.props.match}
                updateState={this.props.updateState}
                formSubmit={this.formSubmit}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex-auto px-2">
          <div className="max-w-xl mx-auto text-center">
            <h1>Hovsa...</h1>
            <p className="mx-auto">
              Det er da vist ikke dit projekt. Lad hellere initiativtageren stå for redigeringen.
            </p>
            <button onClick={() => window.history.back()} className="btn btn-white mt-4 mb-8">
              <ArrowLeft className="mr-2" />Gå tilbage
            </button>
          </div>
        </div>
      );
    }
  }
}

export default EditProjectPage;
