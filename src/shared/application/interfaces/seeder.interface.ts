export interface SeederInterface {
  getNewSeeds(): any;
  compareColumns: string[];
  repository: any;
  entity: any;
}
