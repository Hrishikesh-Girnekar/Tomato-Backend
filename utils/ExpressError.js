class ExpressError extends Error{
    constructor(success, message){
        super();
        this.success = success;
        this.message = message;
    }
}

export default ExpressError;