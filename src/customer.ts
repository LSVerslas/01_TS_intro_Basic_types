type Customer = {
    name: string;
    age: number;
    buySum: number;
    isDriver: boolean;
  };

  const customersArr: Customer[] = [
    {
      name: 'James',
      age: 25,
      buySum: 100,
      isDriver: true,
    },
    {
      name: 'Jane',
      age: 35,
      buySum: 200,
      isDriver: false,
    },
    {
      name: 'John',
      age: 45,
      buySum: 300,
      isDriver: true,
    },
    {
      name: 'Jack',
      age: 55,
      buySum: 400,
      isDriver: false,
    },
    {
      name: 'Jill',
      age: 65,
      buySum: 500,
      isDriver: true,
    },
  ];

  function allSums(arr: Customer[]): number {
    return arr.reduce((total, cObj) => total + cObj.buySum, 0);
  }
  const sumSum = allSums(customersArr);
  console.log(`sumSum ===`, sumSum);