exports.handler = function(event, context, callback) {
  // your server-side functionality
  if (event.httpMethod === "GET") {
    console.log("PUB SUB SUBSCRIBE");
    return event.queryStringParameters["hub.challenge"];
  }
  console.log("=============================");
  console.log(JSON.stringify(event));
  console.log("=============================");
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
};
