/**
 * Vuetify3 Plugin
 */
import { createVuetify, type VuetifyOptions } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// Translations provided by Vuetify
import { en } from 'vuetify/locale';

// Icons
import { aliases, mdi } from 'vuetify/iconsets/mdi';

// Styles
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

/**
 * Vuetify Components
 *
 * @see {@link https://vuetifyjs.com/en/features/treeshaking/}
 */
let vuetifyConfig: VuetifyOptions = {
  icons: {
    defaultSet: 'mdi',
    aliases,
    // : {
    //   ...aliases,
    //   instagram: mdiInstagram,
    //   linktree: mdiPalmTree,
    //   sandlot: mdiBeach,
    //   facebook: mdiFacebook,
    //   email: mdiEmail,
    //   homepage: mdiWeb,
    //   fediverse: mdiMastodon,
    // },
    sets: {
      mdi,
    }
  },
  // Internationalization (i18n)
  // https://vuetifyjs.com/en/features/internationalization/#internationalization-i18n
  locale: {
    locale: 'en',
    fallback: 'en',
    messages: { en },
  },
  // Theme
  // https://vuetifyjs.com/en/features/theme/
  theme: {
    defaultTheme: 'dark',
  },
};

if (import.meta.env.DEV) {
  // Disable treeshaking for DEV mode.
  vuetifyConfig = {
    components,
    directives,
    ...vuetifyConfig,
  };
}
export default createVuetify(vuetifyConfig);

// Export for test.
export { components, directives };

