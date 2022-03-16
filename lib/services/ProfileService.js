const fetch = require('cross-fetch');
const Profile = require('../models/Profile');

module.exports = class ProfileService {
  static async create({ name }) {
    // TODO: Implement me!
    const quoteDataResp = await fetch(
      'https://futuramaapi.herokuapp.com/api/quotes/10'
    );
    const json = await quoteDataResp.json();
    const quoteToDisplay = await json[Math.floor(Math.random() * 9)].quote;
    const profile = await Profile.insert({
      name, quote: quoteToDisplay })
    ;
    return profile;
  }
};
