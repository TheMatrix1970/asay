import R from 'ramda';
import React, { Component } from 'react';
import PreferenceList from '../../components/preferenceList';

class Preferences extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const workload = R.sum(
      R.pluck('workload')(R.filter(preferenceList => preferenceList.preference === true)(this.props.preferenceList))
    );
    return (
      <div className="flex-auto px-2">
        <div className="max-w-xl mx-auto">
          <h1>Præferencer</h1>
          <div className="flex flex-wrap md:flex-no-wrap md:flex-row-reverse -mx-2">
            <div className="w-full md:w-1/4 mx-2 mb-2">
              <div className="md:sticky md:top-17">
                <div className="bg-white text-center border border-grey-lighter rounded-sm shadow px-4 pt-4 pb-1">
                  <p>Her kan du vælge, hvilke emner du vil følge med i.</p>
                  <p>
                    Med dine nuværende præferencer, skal du i gennemsnit tage stilling til ca. <b>{workload}</b> forslag
                    om året.
                  </p>
                  <p>
                    Det svarer til <b>{Math.ceil(workload / 34, 0)}</b> om ugen.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/4 bg-white border border-grey-lighter rounded-sm shadow px-4 md:px-8 mx-2">
              <PreferenceList updateState={this.props.updateState} preferenceList={this.props.preferenceList} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preferences;
