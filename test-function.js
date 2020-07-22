var Parse = require('parse/node');
Parse.initialize("myAppId", "123");

Parse.serverURL = "http://localhost:1337/parse"

async function testFunction() {
    const user = await Parse.User.logIn("1", "1");
    console.log(user);

    const params = { Post: "FwBHOWPLru" }
    const output = await Parse.Cloud.run("getUserLikes", params);
    console.log(output);
}

testFunction();
