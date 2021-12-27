const removeBook = ({ removeBookUseCase }) => {
    return async function get(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        //get the httprequest body
        const { source = {}, ...info } = httpRequest.body;
        source.ip = httpRequest.ip;
        source.browser = httpRequest.headers["User-Agent"];
        const toView = {
          ...info,
          source,
          id: httpRequest.params.id,
        };
        const removeItems = await removeBookUseCase(toView);
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 200,
          body: { removeItems },
        };
      } catch (e) {
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
  
export default removeBook;
  