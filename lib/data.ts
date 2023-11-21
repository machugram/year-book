const personsData = require('./personsdata.json');
export interface PersonType {
  name: string;
  quote: string;
  image: any;
  linkedin: string;
}
//160 persons
export const persons: PersonType[] = personsData["persons"]