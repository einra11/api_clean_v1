//Controller's dependent are use-cases
import { 
getAllBooksUseCase,
// createBookUseCase,
// removeBookUseCase,
// updateBookUseCase,
} from "../../use-cases/book/index"

//Local Functions
import getAllBooks from './get-all-books';
// import registerBook from './register-book';
// import removeBook from './remove-book';
// import updateBook from './update-book';

//Initialize Controllers Section
const getAllBooksController = getAllBooks({getAllBooksUseCase});
// const createBookController= registerBook({createBookUseCase});
// const removeBookController = removeBook({removeBookUseCase});
// const updateBookController = updateBook({updateBookUseCase});


const services = Object.freeze({
    getAllBooksController,
    // createBookController,
    // removeBookController, 
    // updateBookController, 
});


//Export interface 'services' and controllers
export default services;
export { 
    getAllBooksController,
    // createBookController,
    // removeBookController, 
    // updateBookController, 
 };