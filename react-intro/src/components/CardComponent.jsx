import React from "react";
import { MenuHeader } from "@/components/MenuHeader";
import { ImageSection } from "@/components/ImageSection";
import { MainTitle } from "@/components/MainTitle";
import { Paragraph } from "@/components/Paragraph";
import { FooterSection } from "@/components/FooterSection";

export const CardComponent = () => {
  return (
    <div className="layout">
      <MenuHeader />
      <ImageSection />
      <MainTitle />
      <Paragraph />
      <FooterSection />
    </div>
  );
};
