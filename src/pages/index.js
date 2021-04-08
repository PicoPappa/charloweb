import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import FeaturesSection from "../components/Features"
import JourneySection from "../components/Journey"
import PricingSection from "../components/Pricing"
import StaffSection from "../components/Staff"
import FaqAccordion from "../components/Faq"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <FeaturesSection />
    <StaffSection />
    {/* <JourneySection /> */}
    <PricingSection />
    
    <FaqAccordion />
  </Layout>
  
)

export default IndexPage
