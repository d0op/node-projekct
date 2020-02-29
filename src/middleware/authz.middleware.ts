import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import configuration from '../config/enviroment';

export const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${configuration.issuer}.well-known/jwks.json`,
    }),

    // Validate the audience and the issuer.
    audience: configuration.audience,
    issuer: `${configuration.issuer}`,
    algorithms: ['RS256'],
});
