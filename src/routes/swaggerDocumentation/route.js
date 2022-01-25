
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../../config/swagger.json'


const swaggerRoutes = ({swaggerRouter}) => {
    swaggerRouter.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
    return swaggerRouter;
}

export default swaggerRoutes;