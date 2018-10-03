const drivers = ["Milo", "Otis", "Garfield"];
drivers;
const appendDriver = drivers.push("Broom");

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
let appendDriver = drivers.push("Broom");
}


function prependDriver()
{
  drivers.shift("Bob");
}
