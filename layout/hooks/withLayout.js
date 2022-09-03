import { NextPage } from "next";
import React, { useMemo } from "react";
import Layout from "..";
import HomeProvider from "context/home/HomeContext";
// add context for Auth to wrap layout with auth values
export const WithLayout = (Page) => {
  const LayoutPage = (props) => {
    return useMemo(() => (
        <>
          <HomeProvider>
            <Layout>
                <Page {...props} />
            </Layout>
          </HomeProvider>
        </>
    ), [props]);
  };

  return LayoutPage;
};
