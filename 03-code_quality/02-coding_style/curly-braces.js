// if (condition) {
//     // do this
//     // ...and that
//     // ...and that
// }

// Bad styles
if (n < 0) {alert(`Power ${n} is not supported`);}

if (n < 0)
  alert(`Power ${n} is not supported`);

// Good styles
if (n < 0) alert(`Power ${n} is not supported`);

if (n < 0) {
    alert(`Power ${n} is not supported`);
}
