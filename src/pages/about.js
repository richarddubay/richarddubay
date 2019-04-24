import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"
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
              <section className="about">
                <div className="aboutContent">
                  <h1>Welcome</h1>
                  <p>
                    My name is Rich Dubay. I am a Christ follower, husband,
                    father, and nerd. I’m originally from Michigan but I’ve
                    lived for over 20 years in the South. I currently live in
                    Anderson, South Carolina where I root for the{" "}
                    <OutboundLink href="https://mgoblue.com/index.aspx?path=football">
                      Michigan Wolverines
                    </OutboundLink>
                    ,{" "}
                    <OutboundLink href="https://www.nhl.com/redwings">
                      Detroit Red Wings
                    </OutboundLink>
                    , and{" "}
                    <OutboundLink href="https://www.49ers.com/">
                      San Francisco 49ers
                    </OutboundLink>
                    . Oh yeah, my favorite sports teams are <em>very</em>{" "}
                    popular here.{" "}
                    <span role="img" aria-label="joy">
                      😂
                    </span>
                  </p>
                  <div className="aboutImage">
                    <div className="aboutImageGrid">
                      <Image fluid={data.avatar.childImageSharp.fluid} />
                      <em>
                        My beautiful wife and I at the top of the Sky Needle in
                        Seattle.
                      </em>
                    </div>
                  </div>{" "}
                  <h2>What I Do</h2>
                  <p>
                    I work in full-time ministry as a software engineer at{" "}
                    <OutboundLink href="https://newspring.cc/">
                      NewSpring Church
                    </OutboundLink>
                    . It is easily the best job I’ve ever had. I can't imagine
                    spending my life in pursuit of a greater calling than seeing
                    Jesus change peoples lives and making Him famous through
                    technology.
                  </p>
                  <p>
                    I’m also a writer. I am passionate about helping people find
                    their purpose and rediscover their passions. That’s the main
                    purpose of this site. I also write about God, technology,
                    writing (ironically), and other sundry things.
                  </p>
                  <p>
                    I’ve also started working on a book.{" "}
                    <span role="img" aria-label="grimace">
                      😬
                    </span>
                  </p>
                  <p>
                    I fall more in love with writing all the time. The more I do
                    it, the more I love it. One story, one paragraph, one
                    sentence, or even one word can change someones life. That’s
                    a great power not to be taken lightly. Also, the personal
                    blog has taken a hit recently, but it's do for a comeback. I
                    want to be here when it does.
                  </p>
                  <h2>How I Do It</h2>
                  <p>
                    I am using a pretty legit 13-inch MacBook Pro (circa 2018).
                    My writing currently happens in{" "}
                    <OutboundLink href="http://www.bear-writer.com/">
                      Bear
                    </OutboundLink>{" "}
                    although I am toying with the idea of moving to{" "}
                    <OutboundLink href="https://ulysses.app/">
                      Ulysses
                    </OutboundLink>
                    . I’ve also recently started using{" "}
                    <OutboundLink href="https://culturedcode.com/things/">
                      Things
                    </OutboundLink>{" "}
                    to keep everything together and finished as close as
                    possible to on-time. This site is built with{" "}
                    <OutboundLink href="https://www.gatsbyjs.org/">
                      Gatsby
                    </OutboundLink>{" "}
                    and edited with{" "}
                    <OutboundLink href="https://atom.io/">Atom</OutboundLink>.
                    Before this, my site was straight up{" "}
                    <OutboundLink href="https://reactjs.org/">
                      React
                    </OutboundLink>{" "}
                    and <em>before that</em> I used{" "}
                    <OutboundLink href="https://panic.com/coda/">
                      Coda
                    </OutboundLink>{" "}
                    and HTML and CSS (which I still use for a lot of things).
                    The site is powered by{" "}
                    <OutboundLink href="https://www.netlify.com/">
                      Netlify
                    </OutboundLink>
                    . I am powered by caffeine. A lot of caffeine.
                  </p>
                  <h2>Other Things</h2>
                  <p>
                    I love pretty much any gadget that{" "}
                    <OutboundLink href="https://www.apple.com/">
                      Apple
                    </OutboundLink>{" "}
                    makes, and I have a fond affection for seeing the workspaces
                    of others. I like modern design, old-school hip-hop, and{" "}
                    <OutboundLink href="http://dayoneapp.com/">
                      beautifully
                    </OutboundLink>{" "}
                    <OutboundLink href="https://tapbots.com/tweetbot/">
                      designed
                    </OutboundLink>{" "}
                    <OutboundLink href="https://culturedcode.com/things/">
                      software
                    </OutboundLink>
                    . I also feel like I’m becoming more of a nerd as I get
                    older. I am on the board of directors at the{" "}
                    <OutboundLink href="http://clemsonlittletheatre.com/">
                      Clemson Little Theatre
                    </OutboundLink>
                    , I’ve been to more than one Comic Con (although I haven’t
                    started dressing up yet), and I’m beginning to get into
                    comic books more and more. Is that a little frightening? I’m
                    not sure yet.
                  </p>
                  <h2>Places You Can Find Me</h2>
                  <p>
                    I’m available in all the normal places.{" "}
                    <OutboundLink href="https://www.facebook.com/richarddubay">
                      Facebook
                    </OutboundLink>
                    ,{" "}
                    <OutboundLink href="https://www.instagram.com/richarddubay/">
                      Instagram
                    </OutboundLink>
                    ,{" "}
                    <OutboundLink href="https://twitter.com/richarddubay">
                      Twitter
                    </OutboundLink>
                    , and by{" "}
                    <OutboundLink href="mailto:rich@richarddubay.com">
                      email
                    </OutboundLink>
                    . For the developers in the group, I can also be found on{" "}
                    <OutboundLink href="https://github.com/richarddubay">
                      Github
                    </OutboundLink>
                    . I will do my best to respond to you as quickly as I can,
                    but please understand that I still love you even if I don’t
                    respond.
                  </p>
                </div>
              </section>
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
