//Controller's dependent are use-cases
import { 
getAllBooksUseCase,
createBookUseCase,
updateBookUseCase,
removeBookUseCase,
} from "../../use-cases/book/index"

//Local Functions
import getAllBooks from './get-all-books';
import createBook from './register-book';
import updateBook from './update-book';
import removeBook from './remove-book';


//Initialize Controllers Section
const getAllBooksController = getAllBooks({getAllBooksUseCase});
const createBookController= createBook({createBookUseCase});
const updateBookController = updateBook({updateBookUseCase});
const removeBookController = removeBook({removeBookUseCase});




const services = Object.freeze({
    getAllBooksController,
    createBookController,
    updateBookController, 
    removeBookController, 
});


//Export interface 'services' and controllers
export default services;
export { 
    getAllBooksController,
    createBookController,
    updateBookController, 
    removeBookController, 

 };