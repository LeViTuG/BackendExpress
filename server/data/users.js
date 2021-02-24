const bcrypt = require("bcryptjs");

const users = [
    {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('12345678', 10),
        userRole: 1,
        phoneNumber: 0372736002
    },
    {
      name: 'User',
      email: 'user@gmail.com',
      password: bcrypt.hashSync('12345678', 10),
      userRole: 0,
      phoneNumber: 0372222002
    }
    
]

module.exports = users;
