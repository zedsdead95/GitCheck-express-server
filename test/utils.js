const { assert } = require('chai');
const Github = require('../src/Github');
const mongoDB = require('../src/mongoDB');

// Tests to see if github class is correctly implemented
describe('GitHub class tests', () => {
  it('should return true', () => {
    const git = new Github('370fe7e7de5oef01692323aed567c9300ab567', 'https://api.github.com');

    assert.isNotNull(git);
    assert.equal(git.baseUrl, 'https://api.github.com');
    git.setToken('qwertz7654321');
    assert.equal('qwertz7654321', git.token);
  });
});

// Tests to see if github API request is correctly made

// Here we had to create a repository that contains files such as README, LICENSE to be sure that
// it wont be modified since it will be only used for this test and wont evolve in the future
// (Test will be functionnal as long as the user and repo choosed exist)
// Tests for mongoDB database connection and database finding infos
describe('Database function test', () => {
  it('should be true', () => {
    const connect = mongoDB.connectToDatabase();
    const dbTest = mongoDB.findRepoInfoFromDatabase('babel', 'babel');
    assert.notEqual(connect, 'Failure');
    assert.isNotNull(dbTest);
  });
});
