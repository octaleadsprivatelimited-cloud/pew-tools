import { Outlet } from "react-router-dom";
import { TopBar } from "./TopBar";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const AppLayout = () => (
  <div className="flex min-h-screen flex-col">
    <TopBar />
    <Header />
    <main className="flex-1 bg-[#f5f7fa]">
      <Outlet />
    </main>
    <Footer />
  </div>
);
