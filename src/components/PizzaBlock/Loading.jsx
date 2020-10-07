import React from 'react';
import ContentLoader from 'react-content-loader';

export default function Loading() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="131" cy="132" r="113" />
      <rect x="0" y="270" rx="3" ry="3" width="280" height="28" />
      <rect x="0" y="309" rx="6" ry="6" width="280" height="84" />
      <rect x="133" y="272" rx="0" ry="0" width="5" height="1" />
      <rect x="0" y="411" rx="3" ry="3" width="79" height="31" />
      <rect x="126" y="403" rx="22" ry="22" width="151" height="44" />
    </ContentLoader>
  );
}
