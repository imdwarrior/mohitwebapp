var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articles = {
	var 'article-one': {
		title	 :  'Article One | Mohit' ,
		date	 : 'Feb 17, 2018' , 
		heading	:  'Article One',
		content	 : `<p>
		                    This is the content for Article one This is the ontent for Article one This is the ontent for Article one This is the ontent for Article one
		                    This is the content for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article one
		                    
		                </p>
		            <p>
		                    This is the content for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article oneThis is the ontent for Article one
		            </p>`, 
		},

	var 'article-two' : {
			title	 :  'Article Two | Mohit' ,
			date	 : 'Feb 18, 2018' , 
			heading	:  'Article Two',
			content	 : `<p>
			                    This is the content for Second Article
			            </p>`, 
		},

	var 'article-three': {
			title	 :  'Article Three | Mohit' ,
			date	 : 'Feb 18, 2018' , 
			heading	:  'Article Three',
			content	 : `<p>
			                    This is the content for Third Article
			            </p>`, 
		},

};


function createTemplate(data){
	var title = data.title;
	var date = data.date;
	var heading = data.heading;
	var content = data.content;
	var htmlTemplate = `
	<html>
	<head>
	    <link href=style.css rel="stylesheet"/>
	        <title>
	         ${title}
	        </title>
	    </head>
	    <body>
	        <div>
	      <a href="/">Home</a>
	    </div>
	    <hr/>
	    <h3>
	        ${heading}
	    </h3>
	    <div>
	        ${date}
	    </div>
	    <div>
	    <p>
	         ${content}
	    </p>
	    </div>
	    </body>
	    
	</html>
	`;
	return htmlTemplate;
}

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res){
 res.send(createTemplate(articles[articleName])); 
});

var articleName = req.param.articleName;

app.get('/article-two', function (req, res){
 res.sendFile(path.join(__dirname, 'ui', 'article-two.html')); 
});
app.get('/article-three', function (req, res){
 res.sendFile(path.join(__dirname, 'ui', 'article-three.html')); 
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
