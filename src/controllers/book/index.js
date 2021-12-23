//Controller's dependent are use-cases
import { 
getAllBooksUseCase,
updateBookUseCase,
removeBookUseCase,
updateBookUseCase,
} from "../../use-cases/book/index"

//Local Functions
import getAllBooks from './get-all-books';
import registerBook from './register-book';
import removeBook from './remove-book';
import updateBook from './update-book';

//Initialize Controllers Section
export const getAllBooksController = getAllBooks({getAllBooksUseCase});
export const updateBookController= registerBook({updateBookUseCase});
export const removeBookController = removeBook({removeBookUseCase});
export const updateBookController = updateBook({updateBookUseCase});

//Export interface 'services'
export const services = Object.freeze({
    getAllBooksController,
    updateBookController,
    removeBookController, 
    updateBookController, 
});