const softDelete = ({ softDeleteUserUseCase }) => {
    return async function get(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        
        const { source = {}} = httpRequest.body;
        source.ip = httpRequest.ip;
        source.browser = httpRequest.headers["User-Agent"];
        const toView = {
          source,
          id: httpRequest.params.id,
        };
        const user = await softDeleteUserUseCase(toView);
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 200,
          body: { user },
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
  
  export default softDelete