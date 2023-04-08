const express = require('express');

const APIroutes = require('./routes/APIroutes/APIroutes');

const htmlRoutes = require('./routes/htmlRoutes/index');

const app = express();

const fs = require('fs');

const path = require('path');

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use("/api", APIroutes);

app.use("/", htmlRoutes);

app.listen(PORT, function() {

    console.log(`App is now listening on PORT: ${PORT}!`)

});