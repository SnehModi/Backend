import { configDotenv } from "dotenv";
import connectDB from "./db/index.js";

configDotenv();

connectDB();

// iffie function
// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}`);
//     } catch (error) {
//         console.error("Error", error);
//         throw error;
//     }
// })();
