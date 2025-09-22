const useAdSense = () => {
  useEffect(() => {
    const loadAdSense = () => {
      if (typeof window !== 'undefined' && !window.adsbygoogle_loaded) {
        window.adsbygoogle_loaded = true;
        
        const script = document.createElement('script');
        script.async = true;
        script.crossOrigin = 'anonymous';
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8444384468445770`;
        
        document.head.appendChild(script);
      }
    };

    loadAdSense();
  }, []);
};
