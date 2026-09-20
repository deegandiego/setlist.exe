"use client";

import { useState } from "react";

import AppShell from "../components/AppShell/AppShell";
import SetlistView from "../components/Views/SetlistView";
import SongsView from "../components/Views/SongsView";
import AboutView from "../components/Views/AboutView";
import CustomizeView from "../components/Views/CustomizeView";

export default function Home() {
  const [activeTab, setActiveTab] = useState("setlist");

  function renderView() {
    switch (activeTab) {
      case "setlist":
        return <SetlistView />;

      case "songs":
        return <SongsView />;

      case "about":
        return <AboutView />;

      case "customize":
        return <CustomizeView />;

      default:
        return <SetlistView />;
    }
  }

  return (
    <AppShell
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {renderView()}
    </AppShell>
  );
}