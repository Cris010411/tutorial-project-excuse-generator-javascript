let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createExcuse(){
	var excu = who[ getRandomInt(4) ] + ' ' +action[getRandomInt(4)] + ' ' +what[ getRandomInt(4) ] +
						' ' + when[ getRandomInt(5) ];
	document.getElementById("excuse").innerHTML = excu;
}