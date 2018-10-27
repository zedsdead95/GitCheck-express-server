var MongoClient = require('mongodb').MongoClient, assert = require('assert')

var url = 'mongodb://localhost:27017/gitcheck';

function connectToDatabase(){
  let res;
  MongoClient.connect(url, function(err, db) {
    //assert.equal(null, err);
    if(err!= null){
      res="Failure";
    }
    else {
      console.log("Connected successfully to server");
      db.close();
      res = "Success";
    }
  });
  return res;
}

//connectToDatabase();
//insertRepoInfoToDatabase();

function insertRepoInfoToDatabase(username,reponame,readmeData,licenseData,conductData,contributingData,eslintData,testData){

    MongoClient.connect(url, function(err, db) {
        //assert.equal(null, err);
        console.log("Connected successfully to server");
      
                
        // Get the documents collection
        var collection = db.collection('infos');

        var newRepoInfo = {"username" : username,"reponame" :reponame,
                           "readme" : readmeData,"license" : licenseData,
                           "conduct" : conductData,"contributing": contributingData,
                           "eslint" :eslintData , "test" : testData}
        // Insert a document
        collection.insertOne(newRepoInfo);
                

      db.close();
    });
}

console.log(findRepoInfoFromDatabase("babel","babel"));

function findRepoInfoFromDatabase(username,reponame){

    MongoClient.connect(url, function(err, db) {
        //assert.equal(null, err);
        //console.log("Connected successfully to server");
      
                
        // Get the documents collection
        var collection = db.collection('infos');

        
        // Find a document
        //collection.find({'username': username,"reponame" :reponame }).toArray().then((val) => {console.log(val)});  
        collection.find({'username': username,"reponame" :reponame },{ _id:0,"username" : 0,"reponame" :0}).toArray().then((val) => {console.log(val)});  

      db.close();
    });
}

module.exports = {
  connectToDatabase,
  findRepoInfoFromDatabase,
  insertRepoInfoToDatabase,
};

