const ADDRESS_BOOK = {
  kevin: '1223 S. wall st.',
  arthur: '2132 N. wall st.',
};

const getAddress = name => [name, ADDRESS_BOOK[name]];
export default getAddress;


