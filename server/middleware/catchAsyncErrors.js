module.exports = (theFunc) => (req, res, next) => {
    Promise.resolve(theFunc(req, res, next)).catch(
        next);
};// high order fn= a fn is calling inside a fn , 