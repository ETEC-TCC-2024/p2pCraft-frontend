export class ServerRegisterDto {
  name: string;

  mapConfig: {
    seed: string;
    version: string;
  };

  constructor(name: string, seed: string, version: string) {
    this.name = name;
    this.mapConfig = { seed, version };
  }
}
