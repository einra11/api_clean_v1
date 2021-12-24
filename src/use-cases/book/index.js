//Dependecies can be data-access and entity
import bookDB from '../../data-access/books/index'


//Local functions
import getAllBooks from './get-all-books';
// import createBook from './register-book';
// import removeBook from './remove-book';
// import updateBook from './update-book';

//Initialize Use Cases Section
const getAllBooksUseCase = getAllBooks({bookDB})
// const createBookUseCase = createBook({bookDB})
// const removeBookUseCase = removeBook({bookDB})
// const updateBookUseCase = updateBook({bookDB})


//Export interface 'services'
const services = Object.freeze({
    getAllBooksUseCase,
    // createBookUseCase,
    // removeBookUseCase,
    // updateBookUseCase,
});

export default services;
export {
    getAllBooksUseCase,
    // createBookUseCase,
    // removeBookUseCase,
    // updateBookUseCase,
 };

