let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

function isEmpty(obj) {
  for (let _ in obj) {
    return false;
  }
  return true;
}
