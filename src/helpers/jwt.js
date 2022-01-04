import jwt from 'jsonwebtoken'
import JWTSecret from '../config/config'



export default {
    issue(payload, expiresIn){
        return jwt.sign(payload, JWTSecret.JWTSecret, {
            expiresIn,
        })
    }
}