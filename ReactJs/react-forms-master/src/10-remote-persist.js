/* eslint no-underscore-dangle: [2, { "allow": ["_loading", "_saveStatus"] }] */

import React from 'react';
import isEmail from 'validator/lib/isEmail';
import { Field } from './08-field-component-field.js';
import { CourseSelect } from './09-course-select.js';

let apiClient;
export default class extends React.Component {
  static displayName = '10-remote-persist';

  render() {
    return (
      <div>
        <h1>TODO</h1>
      </div>
    );
  }

};

apiClient = {
  loadPeople: function () {
    return {
      then: function (cb) {
        setTimeout(() => {
          cb(JSON.parse(localStorage.people || '[]'));
        }, 1000);
      }
    };
  },

  savePeople: function (people) {
    const success = !!(this.count++ % 2);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!success) return reject({ success });

        localStorage.people = JSON.stringify(people);
        return resolve({ success });
      }, 1000);
    });
  },

  count: 1
};
