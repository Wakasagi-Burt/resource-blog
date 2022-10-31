const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const controllers = require('./controllers');
const Model = require('./models');

const sequelize = require('./config/connection');
const router = require('./controllers');
const Sequelizestore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;




const hbs = exphbs.create({});

const sess = {

  secret: 'resource blog',
  cookie: {},

  secret: 'Tech blog secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },

  resave: false,
  saveUnintialized: true,
  store: new Sequelizestore({
    db:sequelize
  })
};

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', controllers);






sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});