exports.handler = function(event, context, callback) {
  // your server-side functionality
  console.log("=============================");
  console.log(JSON.stringify(event));
  console.log("=============================");
  if (event.httpMethod === "GET") {
    console.log("PUB SUB SUBSCRIBE");
    console.log(event.queryStringParameters["hub.challenge"]);
    return callback(null, {
      statusCode: 200,
      body: event.queryStringParameters["hub.challenge"]
    });
  }
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
};
