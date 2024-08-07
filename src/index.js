import { configDotenv } from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

configDotenv();

connectDB()
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Failed:", error);
  });

// iffie function     ;(async () => {})();
// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}`);
//     } catch (error) {
//         console.error("Error", error);
//         throw error;
//     }
// })();
