import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';

// Component Imports
import Layout from '../components/layout';
import SEO from '../components/seo';

class Airship extends React.Component {
  render() {
    return (
        <StaticQuery
            query={airshipQuery}
            render={(data) => {
                return (
                    <Layout>
                        <SEO title="Airship" />
                        <section className="resume">
                            <section className="header">
                                <Image
                                    fluid={data.image.childImageSharp.fluid}
                                />
                            </section>
                            <section className="resume-wrapper">
                                <section className="left">
                                    <section className="profile">
                                        <h2>Profile Statement</h2>
                                        <p>A software developer with over 20 years of experience, I’ve spent my career creating web sites, apps, and custom software for many customers including the consumer finance industry, United States Air Force, and the Church. My most recent experience has been working on a custom app written using React Native, Node, and GraphQL.</p>
                                    </section>
                                    <section className="experience">
                                        <h2>Experience</h2>
                                        <div>
                                            <h3>Software Engineer</h3>
                                            <h4><em>NewSpring Church | Anderson, SC | 2013 – Present</em></h4>
                                            <ul>
                                                <li>Using C# and the .NET Framework I worked exclusively on the Rock ChMS platform for the first 2-3 years to help get it to launch. One of the highlights of that was working with a teammate to build the checkin system we use at all of our campuses for all of our events.</li>
                                                <li>Worked on 3 different apps using a whole host of fun technologies. These include Meteor/Cordova, React, React Native, and React Native Web for front end technologies. MongoDB and Rock ChMS for databases. Heroku and AWS for servers. And everyone’s favorite Redis for caching. </li>
                                                <li>Created processes, led meetings, and guided our teams through the Scrum process as the Scrum Master for each of the individual sub-teams on the Web team.</li>
                                                <li>Led the development and customer support teams responsible for the day-to-day operations of the Web team. </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3>Software Developer</h3>
                                            <h4><em>Various Government Contractors | Warner Robins, GA & Macon, GA | 2005 – 2013</em></h4>
                                            <ul>
                                                <li>Created, maintained, and upgraded various ASP.NET web applications utilizing Visual Basic and C#.</li>
                                                <li>Managed projects through all the phases of the system life cycle.</li>
                                                <li>Communicated directly with customers (contractors, civilian, and military) to gather requirements, fix bugs and provide system support.</li>
                                                <li>Designed and managed databases in SQL Server.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3>Programmer/Analyst</h3>
                                            <h4><em>Allied Business Systems | Macon, GA | 1998 – 2005</em></h4>
                                            <ul>
                                                <li>Designed, developed and maintained two separate client/server software applications written for use in the consumer finance industry using Visual Basic and Quick Basic.</li>
                                                <li>Provided second level technical systems support by closely working with our Support and Quality Assurance departments as well as our customers to solve complex system issues.</li>
                                                <li>Created detailed documents including descriptions of user needs, program functions and steps required to develop or modify systems.</li>
                                                <li>Led and supported the system development team in all phases of the system life cycle including business process and system analysis, detailed solution design and development, unit testing and debugging.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3>Business Associate / System Engineer in Development</h3>
                                            <h4><em>Electronic Data Systems (EDS) | Southfield, MI | 1997 – 1998</em></h4>
                                            <ul>
                                                <li>Provided direct customer support for General Motors payroll personnel at each of their plants in the United States.</li>
                                                <li>Created and maintained functional payroll system documentation increasing resolution response time to customers.</li>
                                                <li>Trained new employees to the payroll customer support department.</li>
                                            </ul>
                                        </div>
                                    </section>
                                </section>
                                <section className="right">
                                    <section className="education">
                                        <h2>Education</h2>
                                        <h4><strong>Bachelor of Science</strong></h4>
                                        <p><strong>Computer Science</strong></p>
                                        <div className="school">
                                            <p><em>Eastern Michigan University</em></p>
                                            <p>Ypsilanti, MI</p>
                                            <p>1992 - 1997</p>
                                        </div>
                                    </section>
                                    <section className="technicalSkills">
                                        <h2>Technical Skills</h2>
                                        <p><strong>Primary:</strong> React | React Native | Node | GraphQL | Javascript</p>
                                        <p><strong>Also:</strong> .NET | C# | SQL | HTML | CSS</p>
                                    </section>
                                    <section className="other">
                                        <h2>Other Things</h2>
                                        <p>Over the past 4 years I've served as a member, Vice President, and President of the Board of Directors at the Clemson Little Theatre.</p>
                                    </section>
                                    <section className="contact">
                                        <h2>Contact Me</h2>
                                        <p><strong>Email: </strong><a href="mailto:richardtdubayjr@gmail.com">richardtdubayjr@gmail.com</a></p>
                                        <p><strong>Phone: </strong><a href="tel:4787182289">478.718.2289</a></p>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </Layout>
                )
            }}
        />
    );
  }
}

export const airshipQuery = graphql`
  query AirshipQuery {
    image: file(absolutePath: { regex: "/rich-to-airship.png/" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Airship;
