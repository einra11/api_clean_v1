import Passport from "passport";
import PassportJWT from 'passport-jwt'
import SECRET_KEY from '../../config/config'
import UserDb from '../../data-access/users/index'


export const configureJWTStrat = () =>{
    const opts = {
        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey : SECRET_KEY.JWTSecret
    }
    Passport.use(new PassportJWT.Strategy(opts, async (paylod, done) => {
        const {email} = paylod;
        try {
            const verified = await UserDb.authenticate({email})

            if (verified) {
                return done(null, true);
            }else{
                return done(null, false);
            }
        } catch (error) {
            return done(error, false);
        }


    }));
}