let name = "Abe Lincolin";
let re = /^(\w+)\s(\w+)$/;
let newname = name.replace(re, "$2, $1")