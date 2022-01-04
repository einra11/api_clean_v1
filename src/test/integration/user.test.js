import {app} from '../../app'
import request from 'supertest'

describe("GET/LOGIN /api/users endpoint", () =>{

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

    describe("Given data : email, ", () => {
        it("should return please enter email", async () =>{
            const response = await request (app)
            .get("/api/users")
            .send({
                password: "123"
            })
            console.log(response.body.error|| "No errors found -> Falied")
            expect(response.body.error).toBe("Please enter email")
        })
    })

    describe("Given data : email, password", () => {
        it("should return please enter password", async () =>{
            const response = await request (app)
            .get("/api/users")
            .send({
                email: "admin@gmail.com",
            })
            console.log(response.body.error|| "No errors found -> Falied")
            expect(response.body.error).toBe("Please enter password")
        })
    })

    
})

describe("POST/REGISTER /api/users endpoint", () =>{
let email = Buffer.from(Math.random().toString()).toString("base64").substr(10, 5);
    describe("Given data: email, password, role, status", () =>{
        it("should return code 200 with no errors", async ()=>{
            const response = await request(app)
            .post("/api/users")
            .send({
                "email": `${email}@gmail.com`,
                "password": "123",
                "role": "god",
                "status": "active"
            })
            console.log(response.body.error|| "No errors found -> Pass")
            expect(response.statusCode).toBe(200)
        })

    })

})


describe("POST/REGISTER /api/users endpoint", () =>{
        describe("Given data: , password, role, status", () =>{
            it("should return please enter email", async ()=>{
                const response = await request(app)
                .post("/api/users")
                .send({
                    "password": "123",
                    "role": "god",
                    "status": "active"
                })
                console.log(response.body.error|| "No errors found -> Pass")
                expect(response.statusCode).toBe(200)
            })
    
        })
    
    })