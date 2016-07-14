/**
 * Created by shidil on 13/07/16.
 */

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class BaseWebSrv {
  /**
   * fetches json data from API
   * @param {string} url to fetch
   * @param {function} callback
   * @return {undefined}
   */
  static getJSON(url, callBack) {
		fetch(url)
		  .then(res => res.json())
		  .then(json => {
		  	callBack && callBack(json);
			});
  }

  static postJSON(url, params, callBack) {
  	// TODO
  }
}