// setupDatabase.js
import fs from "fs";
import db from "./config/database.js";

const setup = () => {
  const schema = fs.readFileSync("./schema.sql", "utf-8");

  db.query(schema, (err, result) => {
    if (err) {
      console.error("❌ Error setting up the database:", err.message);
      return;
    }
    console.log("✅ Database setup complete.");
    process.exit();
  });
};

setup();
