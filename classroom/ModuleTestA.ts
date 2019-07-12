// export a variable
export const addressBook = {
  kevin: '1213 N. Wall st.',
  arthur: '2321 S. Wall st.',
};

// export a interface
export interface NameAddressPair {
  [index: number]: [string, string];
}

const getInfo = (name: string): NameAddressPair => [name, addressBook[name]];
// export a function as default
export default getInfo;
