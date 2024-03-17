function createPetList() {
  const petList = [];

  function addElement(element) {
    if (!element) {
      return petList;
    }

    petList.push(element);
  }

  return addElement;
}

const myPetList = createPetList();

myPetList('michi');
myPetList('firulais');
console.log(myPetList());

// A better solution that I found in the community
function createPetList() {
  const pets = [];
  return (info) => (info ? pets.push(info) : pets);
}
