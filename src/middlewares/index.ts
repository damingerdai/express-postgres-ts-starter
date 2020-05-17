import cookieParser from 'cookie-parser';
import { BodyParserMiddleware } from './body-parser';

export const middlewares = [
    BodyParserMiddleware, cookieParser()
];
