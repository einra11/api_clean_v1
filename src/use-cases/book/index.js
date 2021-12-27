//Dependecies can be data-access and entity
import bookDB from '../../data-access/books/index'
import { registerBook_ENTITY, updateBook_ENTITY } from '../../entities/book/index';


//Local functions
import getAllBooks from './get-all-books';
import createBook from './register-book';
import updateBook from './update-book';
import removeBook from './remove-book';


//Initialize Use Cases Section
const getAllBooksUseCase = getAllBooks({bookDB});
const createBookUseCase = createBook({bookDB, registerBook_ENTITY});
const updateBookUseCase = updateBook({bookDB, updateBook_ENTITY});
const removeBookUseCase = removeBook({bookDB});
// console.log(updateBook)


//Export interface 'services'
const services = Object.freeze({
    getAllBooksUseCase,
    createBookUseCase,
    updateBookUseCase,
    removeBookUseCase,

});

export default services;
export {
    getAllBooksUseCase,
    createBookUseCase,
    updateBookUseCase,
    removeBookUseCase,
 };


