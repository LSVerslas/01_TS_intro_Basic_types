const user1 = {
  id: 1,
  name: 'James',
  isAdmin: true,
};

// user1.isAdmin = false;

// user1.town = 'London'; // negalima

const user2 = {
  id: 2,
  name: 'Jane',
  isAdmin: false,
};

function userInfo(userObj: { id: number; name: string; isAdmin: boolean }) {
  // userObj.name;
  const rez = `${userObj.name} is ${userObj.isAdmin ? '' : 'not '}admin`;
  // userObj.name is admin
  // userObj.name is not admin
  console.log(rez);
}
userInfo(user2);
userInfo(user1);
userInfo({ name: 'Jane', isAdmin: false });
