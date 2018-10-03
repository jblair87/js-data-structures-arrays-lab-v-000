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