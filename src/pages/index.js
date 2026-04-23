import * as React from "react"
import { tutorialPageTitle} from "../components/layout.module.css"
import HomePageLayout from "../components/layout/home-page-layout";
import SEO from "../components/seo/seo";
import {gridContainer1, gridItem} from "../components/layout.module.css"
import { Link } from "gatsby";




/**
 * Root container
 */
export default function IndexPage(){

return(
  <div>
    {/*SEO component*/}
    <SEO
    title="Home Page | CodeinJar"
    description="Master Java programming with codeinjar.com! Explore beginner to advanced tutorials, coding examples, and real-world projects. Learn Java at your pace with easy-to-follow guides and expert tips. Additionally, explore in-depth tutorials on Python, Spring Boot, JavaFX, JavaScript, Angular, React, and more."
    pathname="/"
    >
      <meta name="msvalidate.01" content="7F8F59031152E2C156F3C24042E50470" />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3915214503079584"
     crossorigin="anonymous"></script>
    </SEO>

  <HomePageLayout>
    {/*Home page title section*/}
    <div className={tutorialPageTitle}>
        <p>Tutorials</p>
    </div>
    
    <Tutorial />
  </HomePageLayout>
  </div>
)
}



/**
 * All tutorials
 */
const Tutorial=()=>{
  return(
    <div className={gridContainer1}>
      {
        tutorials.map((data)=>(
          <div className={gridItem}>
            <div>
              <p>
                <Link to={data.url} activeStyle={{ color: "blue" }}>{data.title}</Link>
              </p>
              
            </div>
            <div>
              <p>{data.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}




//all posts
const tutorials=[
  {
    id: "1",
    title: "Java",
    description: "Java is a high-level, class-based, object-oriented general-purpose programming language intended to let programmers write once, run anywhere.",
    url: "/java",
    photo: "photo-url"
  },
  {
    id: "2",
    title: "JPA",
    description: "Jakarta Persistence or JPA is a JakartaEE API specification that provides Java developers with an object/relational mapping facility for managing relational data in enterprise Java applications.",
    url: "/jpa",
    photo: "photo-url"
  },
  {
    id: "3",
    title: "Spring Boot",
    description: "Spring Boot is an open-source, microservice-based Java web framework offered by Spring, particularly useful for software engineers developing database driven web apps and microservices but it is quite popular to build REST APIs.",
    url: "/spring-boot",
    photo: "photo-url"
  },
  {
    id: "4",
    title: "Spring Data JPA",
    description: "Spring Data JPA is an ORM framework that provides repository support for the Jakarta Persistence API (JPA). It eases development of applications with a consistent programming model that need to access JPA data sources.",
    url: "/spring-data-jpa",
    photo: "photo-url"
  },
  {
    id: "5",
    title: "Quarkus",
    description: "Quarkus is a full-stack Java framework that optimizes Java for containers and serverless, cloud, and Kubernetes environments. If you already have used Spring Boot, you love it.",
    url: "/quarkus",
    photo: "photo-url"
  },
  {
    id: "6",
    title: "Thymeleaf",
    description: "Thymeleaf is a server side Java template engine that works on both web and standalone environments and the purpose of it's to build fullstack Java web applications with the help of Spring Boot or Micronaut.",
    url: "/thymeleaf",
    photo: "photo-url"
  },
  {
    id: "7",
    title: "Freemarker",
    description: "Apache FreeMarker is a free Java-based template engine, originally focusing on dynamic web page generation with MVC software architecture.",
    url: "/freemarker",
    photo: "photo-url"
  },
  {
    id: "8",
    title: "Quarkus Qute",
    description: "Qute is a templating engine designed specifically to meet the Quarkus needs. The usage of reflection is minimized to reduce the size of native images.",
    url: "/quarkus-qute",
    photo: "photo-url"
  },
  {
    id: "9",
    title: "JavaScript",
    description: "JavaScript and TypeScript both are scripting/compiled Programming Languages and used to build dynamic and interactive web pages that can handle user interactions.",
    url: "/javascript",
    photo: "photo-url"
  },
  {
    id: "10",
    title: "React",
    description: "React is a web based JavaScript library that is used to develop native user interfaces and it is quite popular to build single page web applications amongst frontend developers.",
    url: "/react",
    photo: "photo-url"
  },
  {
    id: "11",
    title: "Angular",
    description: "Angular is an open source Typescript based mobile/desktop application framework that primarily used for developing single page web applications(SPA).",
    url: "/angular",
    photo: "photo-url"
  },
  {
    id: "12",
    title: "GatsbyJS",
    description: "Gatsby is a React-based open source static site generator with performance, scalability and security built-in that helps developers build blazing fast websites and apps.",
    url: "/gatsbyjs",
    photo: "photo-url"
  },
  {
    id: "13",
    title: "JavaFX",
    description: "JavaFX is an open source, next generation client application platform for desktop, mobile and embedded systems built on Java.",
    url: "/javafx",
    photo: "photo-url"
  },
]

