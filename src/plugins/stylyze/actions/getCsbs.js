import {FETCH_CSBS} from './const';

module.exports = function(input) {
  //Call AJAX
  let response = {
    id: 1,
    style: 'Modern'
  }
  return { type: FETCH_CSBS, data: response };
};
