import i18n, { ThirdPartyModule } from 'i18next';
import { enUS } from '../domain/locales';

const resources = {
  'en-US': enUS,
};

export function initI18n(modules: ThirdPartyModule[]) {
  modules.forEach((module) => i18n.use(module));

  i18n.init({
    resources,
    fallbackLng: 'en-US',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
