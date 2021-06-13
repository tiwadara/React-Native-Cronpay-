class Banks {
  abbr: string | undefined;
  id: string | undefined;
  name!: string;

  constructor() {
    this.abbr, this.id, this.name;
  }
}

export default new Banks();
