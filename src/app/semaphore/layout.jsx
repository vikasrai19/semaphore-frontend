// import Navibar from "@/components/header";
import Header from "@/components/header";
// import Sidebar from "@/components/sidebar";
// import Widgets from "@/components/widgets";
import Dashboard from "@/components/dashboard";

export default function Layout({ children }) {
    return (
      <>
      <Dashboard/>

      {children}
      </>
    );
  }