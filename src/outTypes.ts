// galim suteikti pravarde(alias) bet kokiam tipui

type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

const user2: User = {
  id: 2,
  name: 'Jane',
  isAdmin: false,
};

const user1: User = {
  id: 1,
  name: 'James',
  isAdmin: true,
};

const usersArr: User[] = [];

function userInfo(userObj: User) {
  // userObj.name;
  const rez = `${userObj.name} is ${userObj.isAdmin ? '' : 'not '}admin`;
  // userObj.name is admin
  // userObj.name is not admin
  console.log(rez);
}

export {};
