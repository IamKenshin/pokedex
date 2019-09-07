const axios = require ('axios');

class ApiRequester {
  static get(endpoint) {
    try {
      return axios.get(endpoint)
          .then(response => this.processResponse(response))
          .catch(err => {
            console.log(err)
          })
    } catch (err) {
      console.log(err)
    }
  }

  static processResponse(response) {
    if(response.data) {
      return response.data
    }
  }
}

module.exports = ApiRequester;