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
                Carolina where I root for the{" "}
                <a href="https://mgoblue.com/index.aspx?path=football">
                  Michigan Wolverines
                </a>
                , <a href="https://www.nhl.com/redwings">Detroit Red Wings</a>,
                and <a href="https://www.49ers.com/">San Francisco 49ers</a>. Oh
                yeah, my favorite sports teams are <em>very</em> popular here.{" "}
                <span role="img" aria-label="joy">
                  😂
                </span>
              </p>
              <div className="about">
                <Image fluid={data.avatar.childImageSharp.fluid} />
              </div>
              <div className="about">
                <em>
                  My beautiful wife and I at the top of the Sky Needle in
                  Seattle.
                </em>
              </div>{" "}
              <h2>What I Do</h2>
              <p>
                I work in full-time ministry as a web developer for{" "}
                <a href="https://newspring.cc/">NewSpring Church</a>. It is
                easily the best job I've ever had. I can't imagine spending my
                life in pursuit of a greater calling than seeing Jesus change
                peoples lives and making Him famous through technology.
              </p>
              <p>
                I’m also a writer. I am passionate about helping people find
                their purpose, rediscover their passions, and how to tie these
                together into what you do. This site is where I get to talk
                about these things. I also write about God, technology, writing
                (ironically), and other sundry things.
              </p>
              <p>
                I’ve also started working on a book.{" "}
                <span role="img" aria-label="grimace">
                  😬
                </span>
              </p>
              <p>
                I fall more in love with writing all the time. The more I do it,
                the more I love it. One story, one paragraph, one sentence, or
                even one word can change someones life. That’s a great power not
                to be taken lightly. Also, the personal blog has taken a hit
                recently, but it's do for a comeback. I want to be here when it
                does.
              </p>
              <h2>How I Do It</h2>
              <p>
                I am using a pretty legit 13-inch MacBook Pro (circa 2018). My
                writing currently happens in{" "}
                <a href="http://www.bear-writer.com/">Bear</a> although I am
                toying with the idea of moving to{" "}
                <a href="https://ulysses.app/">Ulysses</a>. I’ve also recently
                started using{" "}
                <a href="https://culturedcode.com/things/">Things</a> to keep
                everything together and finished as close as possible to
                on-time. This site is built with{" "}
                <a href="https://www.gatsbyjs.org/">Gatsby</a> and edited with{" "}
                <a href="https://atom.io/">Atom</a>. Before this, my site was
                straight up <a href="https://reactjs.org/">React</a> and{" "}
                <em>before that</em> I used{" "}
                <a href="https://panic.com/coda/">Coda</a> and HTML and CSS
                (which I still use for a lot of things). The site is powered by{" "}
                <a href="https://www.netlify.com/">Netlify</a>. I am powered by
                caffeine. A lot of caffeine.
              </p>
              <h2>Other Things</h2>
              <p>
                I love pretty much any gadget that{" "}
                <a href="https://www.apple.com/">Apple</a> makes, and I have a
                fond affection for seeing the workspaces of others. I like
                modern design, old-school hip-hop, and{" "}
                <a href="http://dayoneapp.com/">beautifully</a>{" "}
                <a href="https://tapbots.com/tweetbot/">designed</a>{" "}
                <a href="https://culturedcode.com/things/">software</a>. I also
                feel like I’m becoming more of a nerd as I get older. I am on
                the board of directors at the{" "}
                <a href="http://clemsonlittletheatre.com/">
                  Clemson Little Theatre
                </a>
                , I’ve been to more than one Comic Con (although I haven’t
                started dressing up yet), and I’m beginning to get into comic
                books more and more. Is that a little frightening? I’m not sure
                yet.
              </p>
              <h2>Places You Can Find Me</h2>
              <p>
                I’m available in all the normal places.{" "}
                <a href="https://www.facebook.com/richarddubay">Facebook</a>,{" "}
                <a href="https://www.instagram.com/richarddubay/">Instagram</a>,{" "}
                <a href="https://twitter.com/richarddubay">Twitter</a>, and by{" "}
                <a href="mailto:rich@richarddubay.com">email</a>. For the
                developers in the group, I can also be found on{" "}
                <a href="https://github.com/richarddubay">Github</a>. I will do
                my best to respond to you as quickly as I can, but please
                understand that I still love you even if I don’t respond.
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
