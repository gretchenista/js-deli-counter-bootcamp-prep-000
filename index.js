var katzDeli = [];

function takeANumber (katzDeli, name) {
  katzDeli.push(name);
  return("Welcome, " + name + ". You are number " + katzDeli.length + " in line.");
}


function nowServing (deliLine, name) {
  if (deliLine.length > 0) {
    return("Currently serving " + deliLine.shift(name) + ".");
  }  else {
  return ("There is nobody waiting to be served!");
  }
}


function currentLine (line) {
  var i = 0;
  i++;
 if (line.length > 0) {
   return ("The line is currently " + (i + 1) + ". " + line(i) + ", ");
 } else {
    return("The line is currently empty.");
  }
}