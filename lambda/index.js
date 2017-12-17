var doc = require('dynamodb-doc');
var dynamo = new doc.DynamoDB();
exports.handler = function(event, context) {
	console.log(JSON.stringify(event));

	var user = event.Records.name;
	var params = {
	    TableName: "Namelist",
	    Item: {
	        "name": user
		    }
	};
	dynamo.putItem(params, function(err, data) {
        if (err) {
        	console.log(err);
        	context.fail('Failed: ' + err);
        } else {
            console.log("Successfully registered user");
            context.succeed("OK");
      }
	});
}
