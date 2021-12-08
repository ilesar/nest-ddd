import * as authConfig from '@shared/infrastructure/config/auth.config';

export const amplifyConfig = {
  region: authConfig.region,
  userPoolId: authConfig.userPoolId,
  userPoolWebClientId: authConfig.clientId,
};
