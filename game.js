function Target(health, hits){
  this.health = health;
  this.hits = hits;
}

var ike = new Target(100, 0)
var kyle = new Target(150, 0)

function Item(name, modifier, description){
  this.name = name
  this.modifier = modifier
  this.description = description
}

var items = {
forcefield:new Item("forcefield", 2, "Blocks half of the attack damage"),
block:new Item("block", 2, "Blocks half of the attack damage"),
heal:new Item('heal',  -2, "Heals you for double the attack damage" )
}

console.log(items.forcefield.description)

function playAgain(){
  ike.health = 100;
  ike.hits = 0;
  document.getElementById('health').innerText = 'Health: ' + ike.health
  document.getElementById('hits').innerText = 'Hits: ' + ike.hits
  document.getElementById('ike').innerHTML = '<img src="http://vignette2.wikia.nocookie.net/southpark/images/f/f5/Ike_2.png/revision/latest?cb=20160402113234">'
  document.getElementById('block').disabled = false;
  document.getElementById('forceField').disabled = false;
}

function kick() {
  ike.health = ike.health - 10;
  ike.hits = ike.hits + 1;
  if (ike.health <= 0) {
    document.getElementById('block').disabled = true;
  }
  if (ike.health <= 0) {
    document.getElementById('forceField').disabled = true;
  }
  update()
}

function punch(){
  ike.health = ike.health - 20;
  ike.hits = ike.hits + 1;
   if (ike.health <= 0) {
    document.getElementById('block').disabled = true;
  }
  if (ike.health <= 0) {
    document.getElementById('forceField').disabled = true;
  }
  update()
}

function finishHim(){
  ike.health = ike.health - 25;
  ike.hits = ike.hits + 1;
   if (ike.health <= 0) {
    document.getElementById('block').disabled = true;
  }
  if (ike.health <= 0) {
    document.getElementById('forceField').disabled = true;
  }
  update()
}

function update(){
  if(ike.health <= 0){
    ike.health = 0
    // document.getElementById('ike').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/zkcNLtn2gtk?autoplay=1" frameborder="0" allowfullscreen controls=0 false></iframe>'
  }
  document.getElementById('health').innerHTML = 'Health: ' + ike.health;
  document.getElementById('hits').innerHTML = 'Hits: ' + ike.hits;
}


function block(){
  ike.health = ike.health + 5;
  document.getElementById('block').disabled = true;
  document.getElementById('defense').innerHTML = 'Ike is being blocked for 5 damage'
  setTimeout(function() {
    document.getElementById('defense').innerHTML = ''
  }, 5000);
}

function forceField(){
  ike.health = ike.health + 10;
  document.getElementById('forceField').disabled = true;
  document.getElementById('defense').innerHTML = 'Ike has a forcefield deflecting 10 damage'
  setTimeout(function() {
    document.getElementById('defense').innerHTML = ''
  }, 5000);
}


