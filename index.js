const drivers = ["Milo", "Otis", "Garfield"];
drivers;
let appendDriver = drivers.push("Broom");

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
appendDriver;
}


function prependDriver()
{
  drivers.shift("Bob");
}
