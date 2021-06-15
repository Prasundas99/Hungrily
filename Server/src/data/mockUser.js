import bcrypt from "bcryptjs";

export const mockUsers = [
  {
    name: "Soumava Banerjee",
    email: "soumava.rivu@gmail.com",
    // that's not my true password btw
    password: bcrypt.hashSync("frost1234", 10),
    location: "Saltlake Sector-II",
    isVolunteer: true,
  },
  {
    name: "Frost Byte",
    email: "frost.byte@xyz.com",
    location: "Howrah Bridge er opor",
    password: bcrypt.hashSync("frost1234", 10),
  },
  {
    name: "James Moriarty",
    email: "moriarty.story@novel.com",
    location: "baker street, London, England",
    password: bcrypt.hashSync("frost1234", 10),
  },
  {
    name: "test",
    email: "test.xyz@gmail.com",
    location: "local host",
    password: bcrypt.hashSync("frost1234", 10),
  },
];
