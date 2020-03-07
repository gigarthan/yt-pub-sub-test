exports.handler = function(event, context, callback) {
  // your server-side functionality
  console.log("=============================");
  console.log(JSON.stringify(event));
  console.log("=============================");
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
};
