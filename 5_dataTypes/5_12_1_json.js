"use strict";

let user = {
  name: "Василий Иванович",
  age: 35
};

let userJson = JSON.stringify(user,null, 2);
let userObj = JSON.parse(userJson);