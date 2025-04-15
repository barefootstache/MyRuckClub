/**
 * Vuetify3 Plugin
 */
import {
  createVuetify,
  type VuetifyOptions,
  type ThemeDefinition,
} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// Translations provided by Vuetify
import { en } from 'vuetify/locale';

// Icons
import { aliases, mdi } from 'vuetify/iconsets/mdi';

// Styles
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

const palette = {
  accent: {
    100: '#fce7d4',
    200: '#fad0a8',
    300: '#f7b97f',
    400: '#f6ac67',
    500: '#f49f4f',
    600: '#f39237',
    700: '#f2851f',
    800: '#e9780e',
    900: '#d16c0d',
  },
  primary: {
    100: '#fce9e0',
    200: '#f8c4aa',
    300: '#cb4e11',
    400: '#b3450f',
    500: '#9c3c0d',
    600: '#84330b',
    700: '#6c2a09',
    800: '#552107',
    900: '#3d1805',
  },
  seconday: {
    100: '#d3fafc',
    200: '#aaf6f8',
    300: '#11dde3',
    400: '#10c6cb',
    500: '#0eafb4',
    600: '#0c989c',
    700: '#0a8184',
    800: '#086a6d',
    900: '#075355',
  },
  info: {
    100: '#d9d4fc',
    200: '#b2aaf8',
    300: '#7f71f4',
    400: '#6a59f2',
    500: '#5442f0',
    600: '#3f2aee',
    700: '#2a13ec',
    800: '#2611d4',
    900: '#220fbc',
  },
  error: {
    100: '#fcd9d4',
    200: '#f8b2aa',
    300: '#f47f71',
    400: '#f26a59',
    500: '#f05442',
    600: '#ee3f2a',
    700: '#ec2a13',
    800: '#d42611',
    900: '#bc220f',
  },
  success: {
    100: '#d4fcd9',
    200: '#aaf8b2',
    300: '#71f47f',
    400: '#59f26a',
    500: '#42f054',
    600: '#2aee3f',
    700: '#13ec2a',
    800: '#11d426',
    900: '#0fbc22',
  },
  warning: {
    100: '#fcf9d4',
    200: '#fbf4a7',
    300: '#f7e853',
    400: '#f6e53b',
    500: '#f5e222',
    600: '#f3de0b',
    700: '#dbc80a',
    800: '#c2b109',
    900: '#aa9b08',
  },
  grayscale: {
    100: '#feefe7',
    101: '#feefe7de',
    800: '#2b211d',
    900: '#282320',
    901: '#282320de',
  },
};

const DirtDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: palette.grayscale[900],
    surface: palette.grayscale[100],
    accent: palette.accent[400],
    'accent-hover': palette.accent[600],
    primary: palette.primary[400],
    'primary-hover': palette.primary[500],
    secondary: palette.seconday[400],
    'on-secondary': palette.grayscale[900],
    error: palette.error[400],
    info: palette.info[400],
    success: palette.success[400],
    warning: palette.warning[400],
  },
  variables: {
    'color-white': palette.grayscale[100],
  },
};

const DirtLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: palette.grayscale[100],
    surface: palette.grayscale[900],
    accent: palette.accent[700],
    'accent-hover': palette.accent[900],
    primary: palette.primary[700],
    'primary-hover': palette.primary[800],
    secondary: palette.seconday[700],
    'on-secondary': palette.grayscale[100],
    error: palette.error[700],
    info: palette.info[700],
    success: palette.success[700],
    warning: palette.warning[700],
  },
  variables: {
    'color-white': palette.grayscale[100],
  },
};

const EnergyLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#e9e6e2',
    surface: '#f7f6f3',
    font: '#333333',
    primary: '#ff4500',
    'primary-hover': '#cc3700',
    'primary-light': '#FBE9E7',
    secondary: '#1e90ff',
    'secondary-hover': '#1564b2',
    accent: '#32cd32'
  },
  variables: {
    'color-white': '#f7f6f3',
    'var-radius': '4px',
    'space-micro': '4px',
    'space-mini': '8px',
    'space-small': '16px',
    'space-mid': '32px'
  },
}

/**
 * Vuetify Components
 *
 * @see {@link https://vuetifyjs.com/en/features/treeshaking/}
 */
let vuetifyConfig: VuetifyOptions = {
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
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
    defaultTheme: 'EnergyLightTheme',
    themes: {
      EnergyLightTheme,
      DirtLightTheme,
    },
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