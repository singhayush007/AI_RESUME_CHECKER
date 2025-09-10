const express = require("express");

const app = express();
const PORT = 4000;

require("./conn");
app.use(express.json());

const UserRoutes = require("./Routes/user");
const resumeRoutes = require('./Routes/resume')
app.use("/api/resume", resumeRoutes); // 👈 yeh add karo
app.use("/api/user", UserRoutes);
app.listen(PORT, () => {
  console.log(" backend is Running on port", PORT);
});


