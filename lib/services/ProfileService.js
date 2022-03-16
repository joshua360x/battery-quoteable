const fetch = require('cross-fetch');
const Profile = require('../models/Profile');

module.exports = class ProfileService {
  static async create({ name }) {
    // TODO: Implement me!
    const quoteDataResp = await fetch(
      'https://futuramaapi.herokuapp.com/api/quotes/1'
    );
    const json = await quoteDataResp.json();
    const quoteToDisplay = await json[0].quote;
    const profile = await Profile.insert({
      name, quote: quoteToDisplay })
    ;
    return profile;
  }
};
