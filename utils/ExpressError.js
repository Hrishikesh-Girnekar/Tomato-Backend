class ExpressError extends Error{
    constructor(success, message){
        super();
        this.success = success;
        this.message = message;
    }
}

module.exports = ExpressError;