import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutPage extends React.Component {
  render() {
    return (
      <StaticQuery
        query={aboutPageQuery}
        render={data => {
          const siteTitle = data.site.siteMetadata.title
          return (
            <Layout location={this.props.location} title={siteTitle}>
              <SEO title="About Page" />
              <h1>Welcome</h1>
              <p>
                My name is Rich Dubay. I am a Christ follower, husband, father,
                and nerd. I’m originally from Michigan but I’ve lived for over
                20 years in the South. I currently live in Anderson, South
                Carolina where I root for the Michigan Wolverines, Detroit Red
                Wings, and San Francisco 49ers.
              </p>
              <div className="aboutImage">
                <Image fluid={data.avatar.childImageSharp.fluid} />
              </div>
              <h2>What I Do</h2>
              <p>
                I work in full-time ministry as a web developer for NewSpring
                Church. It is easily the best job I've ever had. I can't imagine
                spending my life in pursuit of a greater calling than seeing
                Jesus change peoples lives and making Him famous through
                technology. I’m also falling more in love with writing. The more
                I do it, the more I love it. One story, one paragraph, one
                sentence, or even one word can change someones life. That’s a
                great power not to be taken lightly. My biggest outlet for this
                creative endeavor is on Medium. I hope to expand on that and
                bring my writing to this site in the near future.
              </p>
              <h2>How I Do It</h2>
              <p>
                I am using a pretty legit 13-inch MacBook Pro (circa 2018). My
                writing currently happens in Bear although I am toying with the
                idea of moving to Ulysses. I’ve also recently started using
                Things to keep everything together and finished as close as
                possible to on-time. This site is built mainly using React in
                Atom. Before that I used Coda and straight up HTML and CSS
                (which I still use for a lot of things). The site is powered by
                Dreamhost. I am powered by caffeine. A lot of caffeine.
              </p>
              <h2>Other Things</h2>
              <p>
                I love pretty much any gadget that Apple makes, and I have a
                fond affection for seeing the workspaces of others. I like
                modern design, old-school hip-hop, and beautifully designed
                software. I also feel like I’m becoming more of a nerd as I get
                older. I am on the board of directors at the Clemson Little
                Theatre, I’ve been to more than one Comic Con (although I
                haven’t started dressing up yet), and I’m beginning to get into
                comic books more and more. Is that a little frightening? I’m not
                sure yet.
              </p>
              <h2>Places You Can Find Me</h2>
              <p>
                I’m available in all the normal places. Facebook, Instagram,
                Twitter, and by email. For the developers in the group, I can
                also be found on Github. I will do my best to respond to you as
                quickly as I can, but please understand that I still love you
                even if I don’t respond.
              </p>
            </Layout>
          )
        }}
      />
    )
  }
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    avatar: file(absolutePath: { regex: "/rich_heav.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
