const getHomePage = (req, res) => {
  // process data
  // call model
  res.send('Hello World! & nodemon test');
};

const getName = (req, res) => {
  // process data
  // call model
  res.send('<h1>Hello Tienhg2001!</h1>');
};
const getHome = (req, res) => {
  // process data
  // call model
  res.render('sample.ejs');
};

module.exports = { getHomePage, getName, getHome };
