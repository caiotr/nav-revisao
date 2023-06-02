import React from "react";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "overview",
        }}
      />
      <Drawer.Screen
        name="telaA" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Tela A",
          title: "overview",
        }}
      />
    <Drawer.Screen
        name="telaB" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Tela B",
          title: "overview",
        }}
      />
    </Drawer>
  );
}