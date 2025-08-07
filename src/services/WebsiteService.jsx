import React from 'react';
import WebsiteHero from '../components/WebsiteHero'; // ✅ No curly braces needed if it's a default export

export const WebsiteService = () => {
  return (
    <div>
      <WebsiteHero />
    </div>
  );
};
