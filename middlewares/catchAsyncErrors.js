export default (func) => (req, res, next) =>
  Promise.resolve(func(req, res, next)).catch(next);

// Pass a function(func) as middleware and return
// a function with 3 arguments(res, req, next) as callback
