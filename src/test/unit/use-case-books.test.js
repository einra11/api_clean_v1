import {
    getAllBooksUseCase,
    createBookUseCase,
    updateBookUseCase,
    removeBookUseCase,
 } from '../../use-cases/book/index';


 describe('GET all books', () =>{
     it("will display all the book", async() =>{
        let result = await getAllBooksUseCase();
        console.log(result || `No errors found -> Pass`);
        expect(result).not.toBeNull();
     });
   
 })

 describe('POST create book', () =>{
    it("will create book", async() =>{
        const data = {
            title: "Test123",
            author: "Test22",
            ratings: "5",
        }
       let result = await createBookUseCase(data);
       console.log(result || `No errors found -> Pass`);
       expect(result.message).toBe("Book registered succesfully");
    });
})

describe('PATCH book', () =>{
    it("will update book", async() =>{
        const data = {
            title: "Updated Testing",
            author: "Updated Testing",
            ratings: "4",
            id: 51
        }
       let result = await updateBookUseCase(data);
       console.log(result || `No errors found -> Pass`);
       expect(result.message).toBe("Book updated succesfully");
    });
  
})

describe('DELETE Book', () =>{
    const data = {
        id: 54
    }
    it("will delete specific book", async() =>{
       let result = await removeBookUseCase(data);
       console.log(result || `No errors found -> Pass`);
       expect(result.message).toBe("Item deleted successfully.");
    });
  
})

