import * as React from "react";
import { BrowserRouter, Outlet, Link, Routes, Route } from "react-router-dom";
import {
  Header,
  AppShell as MantineAppShell,
  Title,
  MantineProvider,
} from "@mantine/core";

export const AppShell: React.FunctionComponent<{
  title: string;
  colorScheme?: "light" | "dark";
}> = ({ title, colorScheme }) => {
  return (
    <MantineProvider
      theme={{
        colorScheme,
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <MantineAppShell
        header={
          <Header
            height={60}
            p="xs"
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
              },
            })}
            sx={{
              display: "flex",
            }}
          >
            <Title>{title}</Title>
          </Header>
        }
        padding="md"
      >
        <div>hello</div>
      </MantineAppShell>
    </MantineProvider>
  );
};
