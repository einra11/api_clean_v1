import app from '../../app'
import request from 'supertest'

describe("POST /api/books Endpoint", () =>{

    describe("Given data : title, author, ratings, serial", () =>{
      it("Should respond a status 200 code & success", async () =>{
            const response = await request(app)
                .post("/api/books")
                .send ({ 
                    title: "Title",
                    author: "Author",
                    ratings: "Ratings",
                    serial: "Serial"
            })
            .end(done)
            expect(response.statusCode).toBe(200)
            console.log(response.body);
        })
    })
    

    // describe("Given data: , author , rating, serial", ()=>{

    // })

    // decribe("Given data: title, , rating, serial", () =>{

    // })

    // describe("Given data : title, author, , serial", () =>{

    // })

    // describe("Given data : title, author, ratings", () =>{
        
    // })

})