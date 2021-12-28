const register = ({ createUserUseCase }) => {
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
        const user = await createUserUseCase(toView);
        console.log('\x1b[32m%s\x1b[0m', "CONTROLLER_TRIGGERED")
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
  
  export default register