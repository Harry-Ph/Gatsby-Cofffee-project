import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGulp } from "react-icons/fa";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";
const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="About Us"
        styleClass="about-background"
      />
      <Info />
    <FaGulp />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about-background.jpeg" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`;

export default AboutPage
