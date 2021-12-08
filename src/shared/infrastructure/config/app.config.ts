export const appConfig = {
  environment: process.env.APP_ENV,
  processesEnabled: process.env.DISABLE_PROCESSES !== 'true',
  silentLogs: process.env.SHOW_SILENT_LOGS === 'true',
};
