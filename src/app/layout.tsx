import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/notifications/styles.css';
import '../styles/globals.scss';

import React, { FC, ReactNode } from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';

export const metadata = {
  title: "Torin's DAPPS Demo",
};

/**
 * RootLayout component to wrap around the main application.
 * @param {ReactNode} children - Content to be rendered inside the layout.
 */
const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">
    <head>
      <ColorSchemeScript />
      <link rel="shortcut icon" href="/favicon.svg" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
      />

      <meta
        httpEquiv="Content-Security-Policy"
        content="script-src 'self' 'unsafe-inline' 'unsafe-eval'; object-src 'none';"
      />
    </head>
    <body>
      <MantineProvider>{children}</MantineProvider>
    </body>
  </html>
);

export default RootLayout;
