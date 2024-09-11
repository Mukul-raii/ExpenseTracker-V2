class apiError {
    constructor(statusCode ,message,error=[],stack=""){ 
      
        this.statusCode=statusCode
        this.message=message
        this.error=error
        this.stack=stack
        
        if(stack){
            this.stack=stack
        }
        else{
            Error.captureStackTrace(this,apiError)
        }
    }

}

export  default apiError