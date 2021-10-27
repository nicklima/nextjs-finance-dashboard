import React, { ReactNode } from "react";

import Header from "components/Header";
import Footer from "components/Footer";

import { Main } from "styles/shared"

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

export default Layout;
