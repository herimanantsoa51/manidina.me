import React from 'react';

/**
 * JSON-LD Structured Data Component
 * Injecte des données structurées pour le SEO (Schema.org)
 */
const JsonLd = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default JsonLd;
