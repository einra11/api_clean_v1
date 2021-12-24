import pg from 'pg';

import connect from '../config/db'

const connects = connect({ pg });

const services = Object.freeze({ connects });

export default  services;
export { connects }