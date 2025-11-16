export type City = {
  nom: string;
  code: string;
  population: number;
  codeDepartement: string;
  codeRegion: string;
};

export type Department = {
  nom: string;
  code: string;
  codeRegion: string;
};

export type CityFiltersType = {
  department: string;
  populationMin?: number;
  populationMax?: number;
};
