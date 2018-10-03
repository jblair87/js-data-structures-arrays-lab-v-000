const drivers = ["Milo", "Otis", "Garfield"];
drivers;
const appendDriver =  ["Milo", "Otis", "Garfield"];
appendDriver;

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

function appendDriver()
{
  appendDriver.unshift("Broom");
}


function prependDriver()
{
  drivers.shift("Bob");
}
