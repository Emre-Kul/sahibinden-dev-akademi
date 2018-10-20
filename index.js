const App = require("./api/app.js");
const app = new App();

app.start(process.env.PORT || 9999);
