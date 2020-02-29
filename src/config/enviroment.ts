import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.PORT) {
    console.log('failed to load port from .env');
    process.exit(1);
}

export default {
    port: process.env.PORT,
    audience: process.env.AUTH0_AUDIENCE,
    issuer: process.env.AUTH0_ISSUER,
};
