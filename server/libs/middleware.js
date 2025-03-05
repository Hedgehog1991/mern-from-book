export const errorHandler = (err, req, res, next) => {
    const defaultMessage = "Technical Issues Try again later"
    const {status, message, error} = err;
    if (error){
        console.log(error)
    }
    res.status(status).json({message: message || defaultMessage})
}