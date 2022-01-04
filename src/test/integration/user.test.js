import {app} from '../../app'
import request from 'supertest'

describe("POST/LOGIN /api/users endpoint", () =>{

    describe("Given data : email, password", () => {
        it("should return email and token and a status 200", async () =>{
            const response = await request (app)
            .get("/api/users")
            .send({
                email: "admin@gmail.com",
                password: "123"
            })
            console.log(response.body.error|| "No errors found -> Pass")
            expect(response.statusCode).toBe(200)
        })
    })

    

})