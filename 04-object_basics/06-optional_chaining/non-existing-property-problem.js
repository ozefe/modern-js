let user = {}; // a user without "address" property

// alert(`Rawdogging it: ${user.address.street}`); // Error!
alert(
    `Using conditional operator ?: ${
        user.address ? user.address.street : undefined
    }`
); // Inelegant

alert(
    `Using conditional operator ?: ${
        user.address
            ? user.address.street
                ? user.address.street.name
                : null
            : null
    }`
); // Very inelegant

alert(
    `Using AND operator &&: ${
        user.address && user.address.street && user.address.street.name
    }`
); // undefined (no error)
