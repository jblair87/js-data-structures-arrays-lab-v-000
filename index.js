const drivers = ["Milo", "Otis", "Garfield"];
drivers;

function destructivelyAppendDriver()
{
  drivers.push("Ralph");
}

function destructivelyPrependDriver()
{
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver()
{
  drivers.pop("Ralph");
}

function destructivelyRemoveFirstDriver()
{
  drivers.shift("Bob");
}

function appendDriver(name){
return [name, drivers]
  
}


function prependDriver(name)
{
  drivers.shift("Bob");
}
