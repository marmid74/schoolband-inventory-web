//port
export const port = process.env.PORT || 3333;
//export const mongoHost = process.env.MONGODB_URI || 'mongodb://localhost:27017/fp-dev';
export const mongoHost = process.env.MONGODB_URI || 'mongodb://localhost/mydb';
export const corsHeaders = ['Link'];