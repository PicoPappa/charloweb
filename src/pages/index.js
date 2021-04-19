import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSectionBr from "../components/HeroSection/indexBr"
import FeaturesSectionBr from "../components/Features/indexBr"
import StaffSectionBr from "../components/Staff/indexBr"
import PricingSectionBr from "../components/Pricing/indexBr"
import FaqAccordion from "../components/Faq"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSectionBr />
    <FeaturesSectionBr />
    <StaffSectionBr />
    {/* <JourneySection /> */}
    <PricingSectionBr />
    
    <FaqAccordion />
  </Layout>
  
)

export default IndexPage
