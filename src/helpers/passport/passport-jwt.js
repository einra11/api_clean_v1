import userDb from "../../data-access/users/index"
import {loginUSER_ENTITY} from "../../entities/user/index"
import Passport from "passport";
import PassportJWT from 'passport-jwt'

export const configureJWTStrat = ({userDb, loginUSER_ENTITY}) =>{
    return async function tokenize(data){
        const opts = {
                jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey : "PFERD_IN_DER_WAND"
        }
        let entity = await loginUSER_ENTITY({data});

        Passport.use(new PassportJWT.Strategy(opts,(paylod, done) =>{
            
            try {
                
            } catch (error) {
                
            }
        }))
    }
  
}


// const opts = {
//     jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey : "PFERD_IN_DER_WAND"
// }
// Passport.use(new PassportJWT.Strategy(opts,(paylod, done) => {
//     const data = paylod
//     let entity = loginUSER_ENTITY({data});
    
// }));