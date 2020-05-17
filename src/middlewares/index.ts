import cookieParser from 'cookie-parser';
import * as helmet from 'helmet';

import { BodyParserMiddleware } from './body-parser';

export const middlewares = [
    BodyParserMiddleware, 
    cookieParser(),
    helmet.noShiff(),
    helmet.hsts({
        maxAge: 518400
    })
];
