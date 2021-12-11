export enum RecipeName {
  CreateBoundedContext = 'Create new bounded context',

  CreateEntityWithApi = 'Entity (with API)',

  CreateGraphQlQuery = 'Create GQL query (with query)',
  CreateGraphQlMutation = 'Create GQL mutation (with command)',
  CreateGraphQlSubscription = 'Create GQL subscription (with subscriber)',

  OverrideCreate = 'Override C***',
  OverrideRead = 'Override *R**',
  OverrideUpdate = 'Override **U*',
  OverrideDelete = 'Override ***D',
  OverrideCreateMany = 'Override C*** (M)',
  OverrideReadMany = 'Override *R** (M)',
  OverrideUpdateMany = 'Override **U* (M)',
  OverrideDeleteMany = 'Override ***D (M)',

  CreateCommand = 'Create command (with handler and injectable repositories and services)',
  CreateQuery = 'Create query (with handler and injectable repositories and services)',
  CreateSubscriber = 'Create subscriber (with handler and injectable repositories and services)',
  CreateEvent = 'Create event (with handler and injectable repositories and services)',

  CreateModel = 'Create domain model',
  CreateService = 'Create domain service (with injectable services)',

  Test = 'test',
}
