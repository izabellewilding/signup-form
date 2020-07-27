exports.handler = function (event, context, callback) {
  console.log("bodyy", event.body);
  callback(null, {
    statusCode: 204,
  });
};
