import {app} from '../../app'
import request from 'supertest'

let token;
beforeEach(async () =>{
    let getTokenRes = await request (app)
    .get("/api/users")
    .send({
        email: "admin@gmail.com",
        password: "123"
    })
    token = getTokenRes.body.user.token
})

describe("POST /api/books Endpoint", () =>{

    describe("POST Given data : title, author, ratings, serial", () =>{
      it("Should respond a status 200 code & success", async () =>{
            const response = await request(app)
                .post("/api/books")
                .set('Authorization', `Bearer ${token}`)
                .send ({ 
                        title : "Test",
                        author : "Author",
                        ratings : "5",
            })
            console.log(token)
            console.log(response.body.error|| "No errors found -> Pass")
            expect(response.statusCode).toBe(200)
        })
    })
    

    describe("Given data: , author , rating, serial", ()=>{
        it("must have a title!", async () =>{
            const response = await request(app)
                .post("/api/books")
                .set('Authorization', `Bearer ${token}`)
                .send ({ 
                        author : "Author",
                        ratings : "5",
                        serial : "teest2"
            })
            console.log(response.body.error || "No errors found -> Failed")
            expect(response.statusCode).toBe(400);
            expect(response.body.error).toBe("Book must have a title"); 
        })
    })

    
    describe("Given data: title, , rating, serial", ()=>{
        it("must have a Author!", async () =>{
            const response = await request(app)
                .post("/api/books")
                .set('Authorization', `Bearer ${token}`)
                .send ({ 
                        title : "test",
                        ratings : "5",
                        serial : "teest2"
            })
            console.log(response.body.error || "No errors found -> Failed")
            expect(response.statusCode).toBe(400);
            expect(response.body.error).toBe("Book must have a author");
        })
    })


    describe("Given data : title, author, , serial", () =>{
        it("must give 0 default value of 0 for rating if not indicated", async () =>{
            const response = await request(app)
                .post("/api/books")
                .set('Authorization', `Bearer ${token}`)
                .send ({ 
                        title : "test",
                        author : "Author",
                        serial : "123456789"
            })
            console.log(response.body.error|| "No errors found -> Pass, Expected to have default rating = 0")
            expect(response.body.bookList.book.result.rating).toBe(0);
        })
    })

    describe("Given data : title, author, ratings", () =>{
        it("must have a serial", async () =>{
            const response = await request(app)
                .post("/api/books")
                .set('Authorization', `Bearer ${token}`)
                .send ({ 
                        title : "test",
                        author : "Author",
                        ratings : "0",
            })
            console.log(response.body.error || `No errors found -> Pass, generated unique serial ${response.body.bookList.book.result.serial}`)
            expect(response.body.bookList.book.result.serial).not.toBeNull();
        })
    })

})

describe("GET /api/books Endpoint", () =>{
    it("Should respond a status 200 code & success", async () =>{
        const response = await request(app)
            .get("/api/books")
            .set('Authorization', `Bearer ${token}`)
        console.log(response.body.error || "No errors found -> Pass")
        expect(response.statusCode).toBe(200)
    })
})

describe("PATCH /api/books/:id Endpoint", () =>{

    describe("PATCH Given data : title, author, ratings, serial", () =>{
        it("Should respond a status 200 code & success", async () =>{
            const response = await request(app)
                .patch("/api/books/45")
                .set('Authorization', `Bearer ${token}`)
                .send({
                    title: "Updated title",
                    author: "Updated Author",
                    ratings : "5",
                    //Serial is optional and can be edited
                })
            console.log(response.body.error || "No errors found -> Pass")
            expect(response.statusCode).toBe(200)
        })
    })

    
    describe("PATCH Given data : title, author, ratings, serial but wrong ID", () =>{
        it("Should respond a status 500 Route not found", async () =>{
            const response = await request(app)
                .patch("/api/books/69")
                .set('Authorization', `Bearer ${token}`)
                .send({
                    title: "Updated titles",
                    author: "Updated Author",
                    ratings : "5",
                })
            console.log(response.body.error || "No errors found -> Failed")
            expect(response.statusCode).toBe(400) &&  expect(response.body.error).toBe("Could not found id")
        })
    })


})

describe("DELETE /api/books/:id Enpoint Code", ()=>{
    
    describe("DELETE Code 200/Success", () =>{
        it("DELETE has id paramater provided", async () =>{
            const response = await request(app)
                .delete("/api/books/44")
                .set('Authorization', `Bearer ${token}`)
    
            console.log(response.body.error || "No errors found -> Pass")
            expect(response.statusCode).toBe(200)
        })
    })

    describe("DELETE Code 400/Not Found or Id not found", ()=>{
        it("DELETE has id paramater provided", async () =>{
            const response = await request(app)
                .delete("/api/books/43")
                .set('Authorization', `Bearer ${token}`)
                
            console.log(response.body.error || "No errors found -> Pass")
            expect(response.statusCode).toBe(400) &&  expect(response.body.error).toBe("Could not found id")
        })
    })

})



