import { plainToClass } from "class-transformer";
import User from "./user.type";

const loadUsers = (): User[] => {
  return plainToClass(User, [
    {
      id: 1,
      name: "Jhon Doe Smith",
      email: "jhondDoe@demo.com",
      address: [
      ],
      contact: [
      ],
      card: [
      ]
    }
  ]);
};

export default loadUsers;
