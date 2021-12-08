import { JuryEntityInterface } from '@shared/infrastructure/modules/database/interfaces/jury-entity.interface';

export interface JudgePanelEntityInterface {
  name: string;
  shortName: string;
  juries: JuryEntityInterface[];
}
