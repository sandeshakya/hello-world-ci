const helloWorld = require("../functions/HelloWorld").helloWorld;
const byeWorld = require("../functions/ByeWorld").byeWorld;
describe("helloWorld", () => {
  var event = {};
  var context = {};
  var resp = {};

  it("should call helloWorld function with success", done => {
    var callback = (ctx, data) => {
      console.log(data);
      resp = data;
      done();
    };
    helloWorld(event, context, callback);
    expect(resp.statusCode).toBe(200);
  });
});
describe("byeWorld", () => {
  var event = {};
  var context = {};
  var resp = {};

  it("should call byeWorld function with success", done => {
    var callback = (ctx, data) => {
      console.log(data);
      resp = data;
      done();
    };
    byeWorld(event, context, callback);
    expect(resp.statusCode).toBe(200);
  });
});
