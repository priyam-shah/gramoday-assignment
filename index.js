import express from "express";
import bodyParser from "body-parser";

import reportRoutes from "./routes/reports.js";

const app = express();
const PORT = 5050;
// app.set("PORT", process.env.PORT || 8080);

// initialize bodyparser middleware
app.use(bodyParser.json());

app.use("/reports", reportRoutes);

// route
app.get("/", (req, res) => {
    console.log("TEST");

    res.send("Hello from HomePage");
});

app.listen(PORT, () =>
    console.log(`server running on port: http://localhost:${PORT}`)
);
