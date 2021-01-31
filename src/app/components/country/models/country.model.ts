import { Injectable } from '@angular/core';
import { Adapter } from '../../../adapter';

@Injectable({
  providedIn: 'root',
})

export class Country {

  constructor(
    public name: string,
    public topLevelDomain: string[],
    public alpha2Code: string,
    public alpha3Code: string,
    public callingCodes: string[],
    public capital: string,
    public altSpellings: string[],
    public region: string,
    public subregion: string,
    public population: number,
    public latlng: number[],
    public demonym: string,
    public area: number,
    public gini: number,
    public timezones: string[],
    public borders: string[],
    public nativeName: string,
    public numericCode: string,
    public currencies: Currencies[],
    public languages: Languages[],
    public translations: Translations,
    public flag: string,
    public regionalBlocs: RegionalBlocs[],
    public cioc: string
  ) {}

}

export class Translations {
  constructor(
    public de: string,
    public es: string,
    public fr: string,
    public ja: string,
    public it: string,
    public br: string,
    public pt: string,
    public nl: string,
    public hr: string,
    public fa: string
  ) {}
}

export class Currencies {
  constructor(
    public code: string,
    public name: string,
    public symbol: string
  ) {}
}

export class Languages {
  constructor(
    public iso639_1: string,
    public iso639_2: string,
    public name: string,
    public nativeName: string
  ) {}
}

export class RegionalBlocs {
  constructor(
    public acronym: string,
    public name: string,
    public otherNames: string[]
  ) {}
}

export class CountryAdapter implements Adapter<Country> {
  adapt(item: any): Country {
    return new Country(
      item.name,
      item.topLevelDomain,
      item.alpha2Code,
      item.alpha3Code,
      item.callingCodes,
      item.capital,
      item.altSpellings,
      item.region,
      item.subregion,
      item.population,
      item.latlng,
      item.demonym,
      item.area,
      item.gini,
      item.timezones,
      item.borders,
      item.nativeName,
      item.numericCode,
      item.currenciescies,
      item.languagesges,
      item.translationsations,
      item.flag,
      item.regionalBlocsalBlocs,
      item.cioc
    );
  }
}

export class TranslationsAdapter implements Adapter<Translations> {
  adapt(item: any): Translations {
    return new Translations(
      item.de,
      item.es,
      item.fr,
      item.ja,
      item.it,
      item.br,
      item.pt,
      item.nl,
      item.hr,
      item.fa
    );
  }

}

export class CurrenciesAdapter implements Adapter<Currencies> {
  adapt(item: any): Currencies {
    return new Currencies(
      item.code,
      item.name,
      item.symbol
    );
  }
}

export class LanguagesAdapter implements Adapter<Languages> {
  adapt(item: any): Languages {
    return new Languages(
      item.iso639_1,
      item.iso639_2,
      item.name,
      item.nativeName
    );
  }
}

export class RegionalBlocsAdapter implements Adapter<RegionalBlocs> {
  adapt(item: any): RegionalBlocs {
    return new RegionalBlocs(
      item.acronym,
      item.name,
      item.otherNames
    );
  }
}
