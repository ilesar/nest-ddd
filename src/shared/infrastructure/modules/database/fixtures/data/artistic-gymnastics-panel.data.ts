import { JudgePanelEntityInterface } from '@shared/infrastructure/modules/database/interfaces/judge-panel-entity.interface';

const artisticGymnasticsPanel: JudgePanelEntityInterface = {
  name: '',
  shortName: '',
  juries: [
    {
      name: 'Execution Jury',
      shortName: 'E Jury',
      judges: [
        {
          name: 'Execution Judge 1',
          shortName: 'E1',
        },
        {
          name: 'Execution Judge 2',
          shortName: 'E2',
        },
        {
          name: 'Execution Judge 3',
          shortName: 'E3',
        },
        {
          name: 'Execution Judge 4',
          shortName: 'E4',
        },
        {
          name: 'Execution Judge 5',
          shortName: 'E5',
        },
        {
          name: 'Execution Judge 6',
          shortName: 'E6',
        },
      ],
    },
    {
      name: 'Difficulty Jury',
      shortName: 'D Jury',
      judges: [
        {
          name: 'Difficulty Judge 1',
          shortName: 'D1',
        },
        {
          name: 'Difficulty Judge 2',
          shortName: 'D2',
        },
      ],
    },
    {
      name: 'Line Jury',
      shortName: 'L Jury',
      judges: [
        {
          name: 'Line Judge 1',
          shortName: 'L1',
        },
        {
          name: 'Line Judge 2',
          shortName: 'L2',
        },
      ],
    },
    {
      name: 'Time Jury',
      shortName: 'T Jury',
      judges: [
        {
          name: 'Time Judge 1',
          shortName: 'T1',
        },
        {
          name: 'Time Judge 2',
          shortName: 'T2',
        },
      ],
    },
    {
      name: 'Superior Jury',
      shortName: 'S Jury',
      judges: [
        {
          name: 'Superior Judge',
          shortName: 'S1',
        },
      ],
    },
    {
      name: 'Inquiry Jury',
      shortName: 'I Jury',
      judges: [
        {
          name: 'Inquiry Judge 1',
          shortName: 'I1',
        },
        {
          name: 'Inquiry Judge 2',
          shortName: 'I2',
        },
      ],
    },
  ],
};

export = artisticGymnasticsPanel;
