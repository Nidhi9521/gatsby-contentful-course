import React from "react";
import { createGlobalStyle } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Header from "./Header";
const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Open Sans', sans-serif;
    line-height: 1.2;
    margin: 0;
    padding: 0;
    
  }
  h1{
    font-size: 2em;
  }
`;

export const Layout = ({ children }) => {
  
  // console.log(result.allContentfulMenu);
  // result.allContentfulMenu.nodes.forEach((element) => {
  //   console.log(element.entryTitle);
  //   element.menuItem.forEach((d) => {
  //     console.log(d.label);
  //     d.subMenuItem?.forEach((a) => {
  //       console.log(a.label);
  //     });
  //   });
  // });
  return (
    <div>
      <GlobalStyle />
      <Header />
      <section>{children}</section>
      
    </div>
  );
};
