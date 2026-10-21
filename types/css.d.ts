import 'react';

// Allow CSS custom properties (e.g. style={{ '--tc': '#FA7402' }}) in inline styles.
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
