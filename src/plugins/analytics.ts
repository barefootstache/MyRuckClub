import { inject } from '@vercel/analytics';

const VercelAnalyticsPlugin = {
  install() {
    inject();
  }
};

export default VercelAnalyticsPlugin;