const asyncHandler=(requentHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requentHandler(req,res,next))
        .catch((err)=>{next(err)})
    }
}

export default asyncHandler