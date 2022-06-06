import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let reports = [];

// ---------- GET ----------

router.get("/", (req, res) => {
    res.send(reports);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    // sending report's data associated with that id
    const usefullReport = reports.find((report) => report.id === id);

    const foundReport = reports.find((report) => usefullReport.cmdtyName === report.cmdtyName );

    // compute average
    let avg = foundReport.price / foundReport.convFctr;

    res.json({ "_id": id,
    "cmdtyName": foundReport.cmdtyName,
    "cmdtyID": foundReport.cmdtyID,
    "marketID":foundReport.marketID,
    "marketName": foundReport.marketName,
    "users": foundReport.userID,
    "priceUnit": "Kg",
    "price": avg,
    });

    // sending just the id
    // console.log("request to id:", id);
    // res.send(req.params);
});

// ---------- POST ----------

router.post("/", (req, res) => {
    const report = req.body;

    //   console.log("new report:", req.body);
    reports.push({ ...report, id: uuidv4() });

    res.json({"status": "success",
                "note": ` Data added from user ${report.userID}  for commodity ${report.cmdtyName} to the temp db`});
            });

// ---------- DELETE ----------

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    reports = reports.filter((report) => report.id !== id);

    res.send(`report with id ${id} deleted from temp db`);
});

// ---------- PATCH ---------- (partial modification)

router.patch("/:id", (req, res) => {
    // receiving a req parameter id -- that specefies which report to update
    const { id } = req.params;

    const reportToBeUpdated = reports.find((report) => report.id === id);

    // then we take all the things coming from the client
    // -- and if we have a perticular value update it into db
    const { userID, marketID, marketName, cmdtyID, cmdtyName, priceUnit, convFctr, price } = req.body;

    if (userID) reportToBeUpdated.userID = userID;
    if (marketID) reportToBeUpdated.marketID = marketID;
    if (marketName) reportToBeUpdated.marketName = marketName;
    if (cmdtyID) reportToBeUpdated.cmdtyID = cmdtyID;
    if (cmdtyName) reportToBeUpdated.cmdtyName =cmdtyName ;
    if (priceUnit) reportToBeUpdated.priceUnit =priceUnit ;
    if (convFctr) reportToBeUpdated.convFctr =convFctr ;
    if (price) reportToBeUpdated.price =price ;
    // res.send(req.body);
    res.send(`report with id ${id} has been updated`);
});

export default router;

// sample data -->
// {
    //   "userID": "user-2",
    //   "marketID": "market-1",
    //   "marketName": "Vashi Navi Mumbai",
    //   "cmdtyID": "cmdty-1",
    //   "cmdtyName": "Potato",
    //   "priceUnit": "Quintal",
    //   "convFctr": 100,
    //   "price": 1600
//   },

//   {
        // "userID": "user-1",
        // "marketID": "market-1",
        // "marketName": "Vashi Navi Mumbai",
        // "cmdtyID": "cmdty-1",
        // "marketType": "Mandi",
        // "cmdtyName": "Potato",
        // "priceUnit": "Pack",
        // "convFctr": 50,
        // "price": 700
    
//   },

