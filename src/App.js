import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import './style.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { SpringGrid } from 'react-stonecutter';

function App()
{  return (
  <section>
    <script src="https://unpkg.com/scrollreveal@4"></script>
  <section class="hero is-fullheight">

    <div class="hero-head ">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item ">

            </a>
           
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA " class="navbar-menu">
            <div class="navbar-end">

              <a class="navbar-item is-active has-text-white-ter">

                Home
              </a>
              <span class="navbar-item">  
              <a href="https://www.linkedin.com/in/harshita-bhatt" target="_blank" class = "button is-primary is-inverted has-text-primary">Visit my LinkedIn</a>
              </span>
              <span class="navbar-item">  
              <a href="https://github.com/harshita3" target="_blank" class = "button is-primary">Visit my Github</a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>


    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title has-text-white-ter">
          I'm Harshita
        </h1>
        <h2 class="subtitle has-text-white-ter">
         I am a student at the University of Wisconsin Madison. <br />
         I am studying <i>Computer Science</i>, <i>Economics</i>, <i>Math</i>, and <i>Developmental Economics.</i> <br />
         Here's a quick snapshot of my undergraduate work!
        </h2>
       
      </div>
      <img src="https://i.ibb.co/HVksYMC/circle-cropped-2.png"/>
    </div>


    <div class="hero-foot">
      <nav class="tabs">
        <div class="container">
          <ul>
           <a href = "#work"> <li><a>Work Experience</a></li></a>
            <a href = "#extra"><li><a>Leadership & Extracurriculars</a></li></a>
            <a href = "#projects"><li><a>Projects</a></li></a>
          </ul>
        </div>
      </nav>
    </div>

  </section>

<body>
{/* <section class="section has-background is-primary">
    <div class="container">
      <h1 class="title has-text-centered">What am I studying at the University of Wisonconsin-Madison?</h1>
      <h2 class="subtitle has-text-centered is-size-80">
      <br /><br /><br />
     <Slide left>  Computer Science </Slide> <br /><br />
     <Slide left>  Economics </Slide> <br /><br />
     <Slide left>  Mathematics </Slide> <br /><br />
     <Slide left>  Developmental Economics </Slide> <br /><br />
     <Slide left>  Leadership </Slide> <br /><br />
        <br /><br />

      </h2>
    </div>
  </section> */}


   <section class="section has-background">
<a name = "work"></a><h1 class="title has-text-centered"> <br />Work Experience</h1>
   <Timeline lineColor={'#ddd'}>
  <TimelineItem
    key="001"
    dateText="06/2020 – Present"
    style={{ color: '#e8a87c !important'}}
  >
    <h4><strong>Analytics Intern, Discover Financial Services</strong></h4>
    <h4><i>Clean, model, and analyze data to determine success of Discover’s various business endeavors</i></h4>
    <p> <br />
    Projects worked on: <strong>Discover Self Service Portal</strong> - singlehandedly coded applicaition for users to pull data to model and analyze 
    <br /> <br />
    Used SQL, Python, Dash, Snowflake and AWS to create and deploy application. 
    <br /> <br />
    Learned about the business behind personal loans and credit cards and the data and analytics fueling their business strategies.
    <br /> <br />
    Perform validation and testing of models to ensure adequacy and reformulate models as necessary <br /><br />
    Formulate mathematical or situation models of problems, relating constants and variables, restrictions, alternatives, conflicting
    objectives, and their numerical parameters <br /> <br />
    Collaborate with senior management to identify and solve problems and clarify management objectives <br /> <br />
    Present the result of mathematical modeling and data analysis to management or other end users <br /> <br />
    Collaborate with others at Discover to ensure successful implementation of chosen problem solutions<br /> <br />
    </p>
  </TimelineItem>
  <TimelineItem
    key="001"
    dateText="01/2020 – Present"
    style={{color: '#e8a87c !important'}}
  >
    <h3 style={{ color: "black" }}><strong>Business Consultant, Business and Entrepreneurship Clinic</strong></h3>
    <h4 style={{ color: "black" }}><i>Provide free business advice and services for Wisconsin based startups</i></h4>
    <p> <br />
    Work with the Business and Entrepreneurship Clinic to support the Director and MBA Consultants and analyze issues facing
    startups <br /> <br />
    Companies worked with: <strong> Hello Loom, Dryp, EnvEco Consulting, FixedPicks, Curlz of Glory, Cider House of Wisconsin, Offshot Photography, Lev Apparel, Chipper Golf, Cultured Decedance, Atrility</strong> and many more!
    <br /> <br />
    Perform tasks such as overall business strategy, target market analysis, market sizing, pricing structure, revenue modeling,
    operations, customer acquisition, strategy, accounting, proforma analysis, competitive analysis, IP evaluation,
    and determining future trends <br /> <br />
    Significantly expand business support for entrepreneurs in the local community, starting with researchers at UW-Madison
    </p>
  </TimelineItem>
  <TimelineItem
    key="001"
    dateText="05/2019 – 12/2019"
    style={{color: '#e8a87c !important'}}
  >
    <h3 style={{ color: "black" }}><strong>Software Developer, Liberty Mutual</strong></h3>
    <h4 style={{ color: "black" }}><i>Application developer for single source application data monitoring tool</i></h4>
    <p> <br />
    Projects worked on: <strong>Pulse Health </strong>(single source data monitoring tool), <strong>Educational Platform</strong> (marketing platform for PHD Shield
    application), <strong>Liberty Lock </strong> (password security application) <br /> <br />
    Coded in react to build front-end of multiple agile teams’ projects and applications <br /> <br />
    Integrated API calls into platform to retrieve data from DataDog, New Relic, and App Dynamics <br /> <br />
    Collaborated with Data Insights team to create data storing strategies and present and analyze data <br /> <br />
    Helped conduct successful discovery and framing session to test importance and effectiveness of applications worked on during
    the summer<br /> <br />
  Third place winner and employee favorite winner at Liberty Mutual intern hackathon 
    </p>
  </TimelineItem>
  <TimelineItem
    key="001"
    dateText="05/2018 – 03/2020"
    style={{color: '#e8a87c !important'}}
  >
    <h3 style={{ color: "black" }}><strong>Research Data Analyst, Epistemic Analytics</strong></h3> <br />
    <h4 style={{ color: "black" }}><i>Performed data analytics to measure educational effectiveness</i></h4>
    <br />
    <p>
    Projects worked on: <strong>Trajectory Analysis Using ENA</strong>, <strong> Analysis of Multi-Modal Learning Data</strong>, <strong>Automated Coding to Study</strong>,
    <strong>Instructional Coaching Programs</strong>, <strong>nCoder</strong> <br /> <br />
    Modeled coded data in to compare different networks both visually and statistically to reflect the weighted structure of
    connections <br /> <br />
    Developed, validated, and implemented automated coding schemes in R from raw data in collaboration with global partners <br /> <br />
    Marketed lab’s statistical tools and approaches to multiple research groups and universities <br /> <br />
    Presented at multiple analytics and data science conferences sharing important knowledge with others <br /> <br />
    One of few undergraduates to lead workshops in data science conference to show lab’s novel approaches and statistical tools
    </p>
  </TimelineItem>
  
 
</Timeline>


 </section>






</body>
  <section class="has-background-grey-lighter">
    <div class="container">
    <a name = "extra"></a> <h1 class="title">Leadership & Extracurriculars</h1> <hr />
    </div>
    <nav class="level is-mobile">
  <div class="level-item has-text-centered">
    <div>

      <p class="heading">Secretary</p>
      <p class="title">Coding for Good</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Mentor</p>
      <p class="title">Lead@Econ</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Volunteer</p>
      <p class="title">Badger Volunteers</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Tutor</p>
      <p class="title">Teaching k-12 students</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Research Analyst</p>
      <p class="title">SDW Alumni</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Volunteer</p>
      <p class="title">YWCA IT Fridays</p>
    </div>
  </div>
</nav>
  </section>


<section class="section has-background1 ">
    <div class="container">
    <a name = "projects"></a> 
      <h1 class="title has-text-white-ter">Projects</h1> <hr />
    </div>
    <nav class="level is-mobile">
  <div class="level-item has-text-centered">
    <div>

      <p class="title has-text-white-ter">Rewind</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="title has-text-white-ter">What Makes an Inventor Analysis</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="title has-text-white-ter"> Liberty Lock</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="title has-text-white-ter">Globalization and the Youth</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="title has-text-white-ter">AWS DeepRacer</p>
    </div>
  </div>

</nav>
  </section>


  <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>Created and Designed </strong> by Harshita Bhatt.<br />
      <p>  <strong>email:  </strong> hbhatt3@wisc.edu <strong>  phone number:</strong> (262)-271-4822</p>


    </p>
  </div>
</footer>



  </section>

  )}
export default App;
