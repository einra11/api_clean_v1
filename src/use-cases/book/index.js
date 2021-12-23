//Dependecies can be data-access and entity
import bookDB from '../../data-access/books/index'


//Local functions
import getAllBooks from './get-all-books';
import registerBook from './register-book';
import removeBook from './remove-book';
import updateBook from './update-book';

//Initialize Use Cases Section
export const getAllBooksUseCase = getAllBooks({bookDB})
export const updateBookUseCase = registerBook({bookDB})
export const removeBookUseCase = removeBook({bookDB})
export const updateBookUseCase = updateBook({bookDB})


//Export interface 'services'
export const services = Object.freeze({
    getAllBooksUseCase,
    updateBookUseCase,
    removeBookUseCase,
    updateBookUseCase,
});
