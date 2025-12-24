
const requestLogger = (req, res, next) => {
    console.log(req.method);
    console.log(req.url);
    console.log(new Date);
    next()
}

export {
    requestLogger
}