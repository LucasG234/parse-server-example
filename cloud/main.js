Parse.Cloud.job("clean-old", async (request) => {
    // params: passed in the job call
    // headers: from the request that triggered the job
    // log: the ParseServer logger passed in the request
    // message: a function to update the status message of the job object
    const { params, headers, log, message } = request;
    
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);
    
    // date object represents the date one week from current
    var date = new Date();
    var dateOffset = (24*60*60*1000) * 7;
    date.setTime(date.getTime() - dateOffset);

    query.lessThan("createdAt", date);
    const results = await query.find();
    
    for (let i = 0; i < results.length; i++) {
        var post = results[i];
        post.destroy()
    }

    return "Number found: " + results.length;
});
