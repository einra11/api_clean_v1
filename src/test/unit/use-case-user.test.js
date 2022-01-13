import {  
    loginUserUseCase,
    createUserUseCase,
    softDeleteUserUseCase } from '../../use-cases/user/index'



    describe('Login user', () =>{
        it("will return token ", async() =>{
            const data ={
                email: "admin@gmail.com",
                password: "123"
            }
           let result = await loginUserUseCase(data);
           console.log(result || `No errors found -> Pass`);
           expect(result.token).not.toBeNull();
        });
      
    })

    describe('Register user', () =>{
        it("will create new account and return message with no errors", async() =>{
            const data ={
                email: "user@gmail.com",
                password: "123",
                role : "user",
                status: 'pending'
            }
           let result = await createUserUseCase(data);
           console.log(result || `No errors found -> Pass`);
           expect(result.message).toBe("User registered succesfully");
        });
      
    })

    
    describe('Soft Delete user', () =>{
        it("will soft delete account and return message with no errors", async() =>{
            const data ={
                id: 59
            }
           let result = await softDeleteUserUseCase(data);
           console.log(result || `No errors found -> Pass`);
           expect(result.message).toBe("Account soft deleted");
        });
      
    })