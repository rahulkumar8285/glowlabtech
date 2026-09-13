// Ensure window.fetch has a setter if an environment script or polyfill reassigns it
if (typeof window !== 'undefined') {
  try {
    const origFetch = window.fetch ? window.fetch.bind(window) : undefined;
    let currentFetch = origFetch;
    Object.defineProperty(window, 'fetch', {
      get() {
        return currentFetch;
      },
      set(fn) {
        currentFetch = typeof fn === 'function' ? fn.bind(window) : fn;
      },
      configurable: true,
      enumerable: true,
    });
    if (typeof Window !== 'undefined' && Window.prototype) {
      const desc = Object.getOwnPropertyDescriptor(Window.prototype, 'fetch');
      if (desc && !desc.set) {
        Object.defineProperty(Window.prototype, 'fetch', {
          get() {
            return currentFetch;
          },
          set(fn) {
            currentFetch = typeof fn === 'function' ? fn.bind(window) : fn;
          },
          configurable: true,
          enumerable: true,
        });
      }
    }
  } catch {
    // Ignore if not redefinable
  }
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
