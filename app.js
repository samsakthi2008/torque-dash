const express = require('express');
const path = require('path');
const cors = require('cors');
const { sequelize } = require('./models');
const config = require('./config/config');
const exphbs = require('express-handlebars');
const flash = require('connect-flash');
const session = require('cookie-session');
const passport = require('passport');
const User = require('./models').User;
require('./config/passport')(passport);

const app = express();

// Configure middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(logger('combined'));
app.use(session({
    keys: config.session.keys,
    maxAge: 24 * 60 * 60 * 1000
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

// Set templating engine
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

// Define routes
app.use('/', require('./routes/web.js'));
app.use('/api', require('./routes/api.js'));
// Since this is the last middleware used, assume 404, as nothing else responded.
app.use('*', require('./routes/404.js'));

// Connect to database and sync models
sequelize.sync(
    // {force:true}
    )
    .then(() => {
        console.log('Connection to database successfully established');  
        
        // User.create({
        //     email: 'test@contoso.com',
        //     password : 'heslo'
        // });

        // Start server
        app.listen(config.port, () => console.log(`Listening on port ${config.port}`));

    }).catch((err) => {
        console.log('Error connecting to the database:', err.message);
});
