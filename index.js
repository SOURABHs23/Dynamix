import express from "express";
import { url } from "./constant.js";
import { checklistRules } from "./config/rules.js";
import axios from "axios";

const app = express();

// Serve static files for fronetend
app.use(express.static("public"));

// only one api call to fetch the data and evaluate the rules it will be called direcly by frontend as of now
app.get("/fetch", async (req, res) => {
  try {
    console.log("inside");
    const { data } = await axios.get(url);
    //   console.log(data);
    const results = checklistRules.map((rule) => ({
      name: rule.name,
      status: rule.condition(data) ? "Passed" : "Failed",
    }));
    console.log(results);
    res.json({ results });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error fetching or evaluating checklist." });
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
