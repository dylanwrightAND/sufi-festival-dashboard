import dotenv from 'dotenv';

dotenv.config();

const whitelist = [process.env.CLIENT_URL];

export const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}