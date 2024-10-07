import { inject } from '@vercel/analytics';

const VercelAnalyticsPlugin = {
  install(Vue) {
    inject();
  }
};

export default VercelAnalyticsPlugin;