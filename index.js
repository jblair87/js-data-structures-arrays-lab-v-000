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

function appendDriver("Broom")
{
appendDriver = drivers.push("Broom");
  appendDriver;
}


function prependDriver()
{
  drivers.shift("Bob");
}
