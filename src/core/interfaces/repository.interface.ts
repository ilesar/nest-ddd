export interface RepositoryInterface<M> {
  load(id: string, relations?: string[]);
  loadBy(options: any);
  loadSome(ids: string[], relations?: string[]);
  loadMany(ids: string[], relations?: string[]);
  loadManyBy(where: any);
  store(model: M);
  storeMany(models: M[]);
}
