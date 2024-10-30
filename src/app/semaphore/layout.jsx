import Sidebar from "@/components/sidebar";

export default function Layout({ children }) {
    return (
      <>
      <Sidebar/>
      {children}
      </>
    );
  }