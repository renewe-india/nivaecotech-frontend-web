import { ReactNode } from "react";
import Footer from "@/components/Footer";
import { Navigation } from "@/components/Navbar";

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navigation />
      <main className="top-20 mt-20 pt-12">{children}</main>
      <Footer />
    </>
  );
};

export default BlogLayout;
