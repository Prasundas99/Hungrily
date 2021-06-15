import bcrypt from "bcryptjs";

export const mockUsers = [
  {
    name: "Soumava Banerjee",
    email: "soumava.rivu@gmail.com",
    // that's not my true password btw
    password: bcrypt.hashSync("frost1234", 10),
    location: "Saltlake Sector-II",
    geometry: {
      type: "Point",
      coordinates: [88.41419219970702, 22.593092115430846],
    },
    isVolunteer: true,
  },
  {
    name: "Frost Byte",
    email: "frost.byte@xyz.com",
    location: "Howrah Bridge er opor",
    password: bcrypt.hashSync("frost1234", 10),
    geometry: {
      type: "Point",
      coordinates: [88.41899871826172, 22.59372606392931],
    },
  },
  {
    name: "James Moriarty",
    email: "moriarty.story@novel.com",
    location: "baker street, London, England",
    password: bcrypt.hashSync("frost1234", 10),
    geometry: {
      type: "Point",
      coordinates: [88.35170745849608, 22.563927330320414],
    },
  },
  {
    name: "test",
    email: "test.xyz@gmail.com",
    location: "local host",
    password: bcrypt.hashSync("frost1234", 10),
    geometry: {
      type: "Point",
      coordinates: [80.595703125, 26.588527147308614],
    },
  },
];
