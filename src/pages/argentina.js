import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import FeaturesSection from "../components/Features"
import PricingSection from "../components/Pricing"
import StaffSection from "../components/Staff"
import FaqAccordion from "../components/Faq"
import HeroSectionBr from "../components/HeroSection/indexBr"
import FeaturesSectionBr from "../components/Features/indexBr"
import StaffSectionBr from "../components/Staff/indexBr"
import PricingSectionBr from "../components/Pricing/indexBr"
import NeedsSectionArg from "../components/Journey/indexArg"

const IndexPageArg = () => (
  <Layout>
    <SEO title="Charlo Argentina" />
    <HeroSectionBr />
    <FeaturesSectionBr />
    <NeedsSectionArg></NeedsSectionArg>
    <StaffSectionBr />
    {/* <JourneySection /> */}
    <PricingSectionBr />
    
    <FaqAccordion />
  </Layout>
  
)

export default IndexPageArg
