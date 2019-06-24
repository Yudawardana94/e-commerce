if (process.env.NODE_ENV === 'dev' || !process.env.NODE_ENV) {
	require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const router = require("./routes")
const errHandler = require("./middleware/errHandler")

const port = process.env.PORT;
const database = process.env.DB +''+ process.env.DB_NAME;
console.log(database)
mongoose.connect(database, { useNewUrlParser: true }, err => {
	if (err) console.log(err), console.log('Connection Error. ');
	else console.log('Success connect to mongoose. ');
});

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", router);

app.use(errHandler);

if (process.env.NODE_ENV === 'test') {
	module.exports = app;
} else {
	app.listen(port, () => {
		console.log('Connection Success !!!');
	});
}
