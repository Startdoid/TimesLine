
module.exports = {
  // the database url to connect
	url    : 'mongodb://testman:testman@kahana.mongohq.com:10036/testio',
	url_pg : 'postgres://spmehfcwqqeixv:7yoBcix92QnkjG-Gena3yBneFg@ec2-54-163-255-191.compute-1.amazonaws.com:5432/ddbggkp3jlbmc4?ssl=true',
	imgs   : ['.png', '.jpg', '.jpeg', '.gif', '.bmp'], // only make thumbnail for these
	state  : {
    id: 0,
    mainUserLogged: false,
    usrCRC: null,
    serverRoute: '',
    userId : 0
  }
}; 