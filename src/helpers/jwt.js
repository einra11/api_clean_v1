import jwt from 'jsonwebtoken'
import config from '../config/config'

const secret = "PFERD_IN_DER_WAND"

export default {
    issue(payload, expiresIn){
        return jwt.sign(payload, config.JWTSecret, {
            expiresIn,
        })
    }
}