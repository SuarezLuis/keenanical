// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kennanical",
  description:
    'Keenanical, an AI powered defancy-fier and fancy-fier to ease communications with "Those who find themselves compelled to articulate in ornate and grandiloquent verbiage sans necessity."',
  authors: { name: "Luis Suarez", url: "https://github.com/suarezluis" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark">{children}</MantineProvider>
      </body>
    </html>
  );
}
