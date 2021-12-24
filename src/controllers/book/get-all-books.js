const getAllBooks = ({ getAllBooksUseCase }) => {
    return async function get(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        
        const { source = {}, ...info } = httpRequest.body;
        source.ip = httpRequest.ip;
        source.browser = httpRequest.headers["User-Agent"];
        const toView = {
          ...info,
          source,
        };
        const bookList = await getAllBooksUseCase(toView);
        console.log('\x1b[32m%s\x1b[0m', "CONTROLLER_TRIGGERED")
        console.log(bookList)
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 200,
          body: { bookList },
        };
      } catch (e) {
        // TODO: Error logging
        console.log(e);
        return {
          headers,
          statusCode: 400,
          body: {
            error: e.message,
          },
        };
      }
    };
  };
  
  export default getAllBooks