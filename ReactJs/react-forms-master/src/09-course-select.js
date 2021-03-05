import PropTypes from 'prop-types';
/* eslint no-underscore-dangle: [2, { "allow": ["_loading"] }] */
import React from 'react';
import Core from './api/core.json';
import Electives from './api/electives.json';

const Courses = {
  core: Core,
  electives: Electives
};

export class CourseSelect extends React.Component {

  render() {
    return (
      <div>
        <h1>TODO</h1>
      </div>
    );
  }

};

function apiClient(department) {
  return {
    then: function (cb) {
      setTimeout(() => {
        cb(Courses[department]);
      }, 1000);
    }
  };
}
