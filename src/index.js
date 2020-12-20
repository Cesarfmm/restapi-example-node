const express = require('express');
const app = express();
const morgan = require('morgan');
//middleware
//Es un middleware para la captura de solicitudes HTTP para Node.js para su posterior registro y seguimiento.
app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}));
//le permite al servidor poder resivir formato json y entenderlo
app.use(express.json());
//settings
app.set('port',process.env.PORT || 8080);

//importando las rutas a el archivo principal
app.use(require('./routes/index'));
app.use('/api/Product', require('./routes/Product'));
app.use('/api/users', require('./routes/users'));
//staring the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
})