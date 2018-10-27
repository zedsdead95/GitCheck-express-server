const { expect , assert , should } = require('chai');
const Github = require ('../src/Github');
const mongoDB = require ('../src/mongoDB');

// Tests to see if github class is correctly implemented
describe('GitHub class tests', () => {

  it('should return true', () => {
      const git = new Github("370fe7e7de5oef01692323aed567c9300ab567","https://api.github.com");

      assert.isNotNull(git);
      //assert.equal("370fe7e7de5oef01692323aed567c9300ab567",git.token);
      assert.equal(git.baseUrl,"https://api.github.com");

      git.setToken("qwertz7654321");
      assert.equal("qwertz7654321",git.token);
  });
});

// Tests to see if github API request is correctly made

// Here we had to create a repository that contains files such as README, LICENSE to be sure that
// it wont be modified since it will be only used for this test and wont evolve in the future 
// (Test will be functionnal as long as the user and repo choosed exist)

/*describe('GitHub functions tests', () => {
  it('these functions should return true', () => {
      const git = new Github("370fe2d7de5d5f01692323aedb47c9300ab9bf91","https://api.github.com");

      Promise.all([
        assert.equal("zedsdead95", git.user("zedsdead95")),
        assert.equal("LICENSE",git.licenceData("GitCheck-Initiative")) // recupere les infos de l'utilisateur
      ]);
  });
});
*/

// Tests for mongoDB database connection and database finding infos
describe('Database function test', () => {
  it('should be true', () => {

    let connect = mongoDB.connectToDatabase();
    let dbTest = mongoDB.findRepoInfoFromDatabase("babel","babel");
    assert.notEqual(connect,"Failure");
    assert.isNotNull(dbTest);
  });
});
