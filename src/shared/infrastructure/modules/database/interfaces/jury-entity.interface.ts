import { JudgeEntityInterface } from '@shared/infrastructure/modules/database/interfaces/judge-entity.interface';

export interface JuryEntityInterface {
  name: string;
  shortName: string;
  judges: JudgeEntityInterface[];
}
