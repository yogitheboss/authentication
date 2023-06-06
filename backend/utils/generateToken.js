import jwt from 'jsonwebtoken'

const generateToken=(res,userId)=>{
    // generating token by signing userid with jwt secret
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        // token expires in 30 days
        expiresIn:'30d'
    })
    // setting cookie of response to generated token 
    res.cookie('jwt',token,{
        // http only so that it can't be accessed by javascript
        httpOnly:true,
        // secure so that it can only be accessed by https
        secure:process.env.NODE_ENV!=='development',
        // same site so that it can only be accessed by same site i.e. our site
        sameSite:'strict',
        // max age of cookie
        maxAge:30*24*60*60*1000
    })
}

export default generateToken