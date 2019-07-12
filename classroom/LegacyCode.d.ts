interface NameAddresPair {
  [index: number]: [string, string];
}

declare function getAddress(name: string): NameAddresPair;

export default getAddress;
