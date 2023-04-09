import { useEffect } from 'react';
import nProgress from 'nprogress';
import '@/assets/styles/ProgressBar.css';

export default function ProgressBar() {
  useEffect(() => {
    nProgress.configure({
      parent: 'nav',
      showSpinner: false,
      minimum: 0.15,
    });
    nProgress.start();
    return () => {
      nProgress.done();
    };
  });

  return null;
}
