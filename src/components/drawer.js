import * as React from "react"

import { Button, CloseButton, Drawer, Heading, Portal, Tabs} from "@chakra-ui/react"
import ChakraWrapper from "./ChakraWrapper"
import { Link } from "gatsby"

export default function SideBar(){
  return (
    <ChakraWrapper>
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm">
          Menu
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner padding="4">
          <Drawer.Content rounded="md">
            <Drawer.Body>
              <Heading fontWeight="semibold">Tutorials</Heading>
              <br/>
              <Tabs.Root
              defaultValue="frontend"
              variant="plain"
              
              css={{
                "--tabs-indicator-bg": "colors.gray.subtle",
                "--tabs-indicator-shadow": "shadows.xs",
                "--tabs-trigger-radius": "radii.full",
            }}
    >
      <Tabs.List>
        <Tabs.Trigger value="frontend">Frontend</Tabs.Trigger>
        <Tabs.Trigger value="backend">Backend</Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="frontend">
       <h3>
        <Link to="/html">Html</Link>
       </h3>
       <h3>
        <Link to="/css">CSS</Link>
       </h3>
       <h3>
        <Link to="/react">ReactJS</Link>
       </h3>
       <h3>
        <Link to="/markdown">Markdown</Link>
       </h3>
       <h3>
        <Link to="/angular">AngularJS</Link>
       </h3>
       <h3>
        <Link to="/vuejs">VueJS</Link>
       </h3>
       <h3>
        <Link to="/gatsbyjs">GatsbyJS</Link>
       </h3>
       <h3>
        <Link to="/nextjs">NextJS</Link>
       </h3>
       <h3>
        <Link to="/astrojs">AstroJS</Link>
       </h3>
      </Tabs.Content>

      {/*Backend Page Links*/}
      <Tabs.Content value="backend">
        <h3>
        <Link to="/java">Learn Java</Link>
       </h3>
       <h3>
        <Link to="/jpa">Learn JPA</Link>
       </h3>
       <h3>
        <Link to="/spring-boot">Spring Boot</Link>
       </h3>
       <h3>
        <Link to="/quarkus">Quarkus</Link>
       </h3>
       <h3>
        <Link to="/c">Learn C</Link>
       </h3>
       <h3>
        <Link to="/python">Python</Link>
       </h3>
       <h3>
        <Link to="/javafx">JavaFX</Link>
       </h3>
       <h3>
        <Link to="/golang">GoLang</Link>
       </h3>
       <h3>
        <Link to="/kotlin">Kotlin</Link>
       </h3>
      </Tabs.Content>
    </Tabs.Root>

            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
    </ChakraWrapper>
  )
}
