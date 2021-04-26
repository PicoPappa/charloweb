import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSectionBr from "../components/HeroSection/indexBr"
import NeedsSection from "../components/Journey/indexBr"
import FeaturesSectionBr from "../components/Features/indexBr"
import StaffSectionBr from "../components/Staff/indexBr"
import PricingSectionBr from "../components/Pricing/indexBr"
import FaqAccordion from "../components/Faq"

const IndexPage = () => (
  <Layout>
    <SEO title="Charlo Brasil" />
    <HeroSectionBr />
    <FeaturesSectionBr />
        <NeedsSection />
    <StaffSectionBr />

    <PricingSectionBr />
    
    <FaqAccordion />
  </Layout>
  
)

export default IndexPage
