import { AdminModuleOptions } from '@adminjs/nestjs';

export const adminConfig: AdminModuleOptions = {
  adminJsOptions: {
    rootPath: '/admin',
    resources: [],
    branding: {
      companyName: 'Elevien',
      logo: '/logo.png',
    },
    locale: {
      language: 'en',
      translations: {
        labels: {},
      },
    },
  },
  auth: {
    authenticate: async (email, password) => {
      if (email === 'admin' && password === 'digimna5tika')
        return Promise.resolve({ email: 'admin' });
    },
    cookieName: 'admin',
    cookiePassword: 'adminPass',
  },
};
