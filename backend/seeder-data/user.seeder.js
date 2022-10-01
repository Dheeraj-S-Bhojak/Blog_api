import bcrypt from "bcrypt";

/**
 * This is A array which stores data for User
 */

const Users_data = [
  {
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    password: bcrypt.hashSync("123456", 10),
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png",
    bio: "hello my name is Leanne Graham",
    role: ["Author"],
  },
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png",
    isAdmin: true,
    bio: "hello i'm Admin User",
    role: ["Author", "Reviewer"],
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png",
    bio: "hello my name is John Doe",
    role: ["Author", "Reviewer"],
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png",
    bio: "hello my name is Jane Doe",
    role: ["Reviewer"],
  },
];

export default Users_data;
