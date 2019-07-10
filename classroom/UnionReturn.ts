type AddressType = string | undefined;

const findAddress = (name: string): AddressType => {
  const addressMap = {
    tom: 'address A',
    joe: 'address B',
  };
  return addressMap[name];
};

console.log(findAddress('tom'));
console.log(findAddress('kevin'));
