// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multipleNumeric(menu);

// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu",
// };

function multipleNumeric(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === "number") {
      obj[prop] *= 2;
    }
  }
}
