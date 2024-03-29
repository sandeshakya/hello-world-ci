"use strict";
module.exports.byeWorld = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*" // Required for CORS support to work
    },
    body: JSON.stringify({ message: "Good Bye WOrld!", input: event })
  };

  callback(null, response);
};
