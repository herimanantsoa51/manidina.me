/**
 * Icon Component — renders inline SVG icons by name
 * Each icon returns a fragment wrapping all its paths
 */
export default function Icon({ name, size = 24, className = '' }) {
  const renderIcon = () => {
    switch (name) {
      case 'brain':
        return <><path d="M12 2a7 7 0 0 1 7 7c0 2.1-1 4-2.5 5.2V17h-9v-2.8C6 13 5 11.1 5 9a7 7 0 0 1 7-7z"/><path d="M9 17h6v2H9v-2zm1-12a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></>;
      case 'code':
        return <><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></>;
      case 'globe':
        return <><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>;
      case 'database':
        return <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></>;
      case 'lightning':
        return <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>;
      case 'rocket':
        return <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></>;
      case 'chart':
        return <><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></>;
      case 'scan':
        return <><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M3 17v2a2 2 0 0 0 2 2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M17 21h2a2 2 0 0 0 2-2v-2"/></>;
      case 'mail':
        return <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>;
      case 'map':
        return <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>;
      case 'social':
        return <><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></>;
      case 'sparkles':
        return <><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M5.5 15.5L7 17l-1.5 1.5L4 17l1.5-1.5z"/><path d="M18 13l1 1.5L20.5 13 19 11.5 18 13z"/></>;
      case 'plane':
        return <><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></>;
      case 'robot':
        return <><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="8.5" cy="15.5" r="1.5"/><circle cx="15.5" cy="15.5" r="1.5"/><path d="M12 3v4"/><path d="M12 7h2m-2 0h-2"/></>;
      case 'recycle':
        return <><path d="M7 19h10"/><path d="M9 15l-3 4 3 4"/><path d="M15 15l3 4-3 4"/><path d="M12 3v12"/><path d="M7 7l5-5 5 5"/></>;
      case 'agriculture':
        return <><path d="M12 2v20"/><path d="M8 6h8"/><path d="M6 12h12"/><path d="M3 16h18"/></>;
      default:
        return <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>;
    }
  };

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {renderIcon()}
    </svg>
  );
}
