import React from "react";
import PageWrapper from "../containers/wrapper";
import { DashHeaderContainer } from "../containers/dashHeader";
import { DashboardContainer } from "../containers/dashboard";
import { RichTextEditor } from '../components';


export default function Dash() {
  return (
    <PageWrapper>
      <DashHeaderContainer></DashHeaderContainer>
      <DashboardContainer>
        <RichTextEditor />
      </DashboardContainer>
    </PageWrapper>
  );
}
