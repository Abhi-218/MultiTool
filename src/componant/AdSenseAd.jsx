
import React, { useEffect } from 'react';

// Standard AdSense component matching your exact code format
export const AdSenseAd = ({ 
  adClient = "ca-pub-8444384468445770",
  adSlot = "7134738923",
  adName = "mtsquaread"
}) => {
  useEffect(() => {
    // Load AdSense script if not already loaded
    const existingScript = document.querySelector(`script[src*="pagead2.googlesyndication.com"]`);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }

    // Push ads after script loads
    const pushAd = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    };

    // Small delay to ensure script is loaded
    const timer = setTimeout(pushAd, 100);
    
    return () => clearTimeout(timer);
  }, [adClient]);

  return (
    <div style={{ margin: '20px 0' }}>
      {/* AdSense ad unit - matches your exact format */}
      <ins 
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};