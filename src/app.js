const { static } = require('express');
const express = require('express');
const hbs = require('hbs');
const Path = require('path');
const app = express();
const port = process.env.PORT || 3000;



// * Public Static Path
console.log(Path.join(__dirname, '../public'));
const staticPath = Path.join(__dirname, '../public');
const templates_path = Path.join(__dirname, '../templates/views');
const Partials_path = Path.join(__dirname, '../templates/Patials');



app.set('view engine', 'hbs');
app.set('views', templates_path);
hbs.registerPartials(Partials_path)

app.use(express.static(staticPath));


// * Routing 
app.get('', (req, res) => {
    res.render('index.hbs')
  })

  app.get('/about', (req, res) => {
    res.render("about.hbs")
  })
   
  app.get('/weather', (req, res) => {
    res.render('weather.hbs')
  })

  app.get('*', (req, res) => {
    res.render('404error.hbs', {
      errorMsg: "OpPs! Page Not Found!"
    })
  })




  app.listen(port, ()=> {
      console.log(`Listening to the port Num ${port}`)
  })