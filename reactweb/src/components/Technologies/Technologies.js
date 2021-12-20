import React from 'react'
import {DiFirebase,DiReact,DiZend} from "react-icons/di"
import {Section,SectionDivider,SectionText,SectionTitle} from "../../styles/GlobalComponents"
import {List,ListContainer,ListItem,ListParagraph,ListTitle}  from "./TechnologiesStyles"



const Technologies = () => (

      <Section id='tech'>
          <SectionDivider divider/>
          <SectionTitle>Technologies</SectionTitle>
          <SectionText>
              Lorem ipsum, dolor sit amet consectetur adipisicing 
              elit. Sit, nihil. Distinctio dolorum ducimus totam necessitatibus.
          </SectionText>
          <List>
              <ListItem>
                  <picture>
                      <DiReact size="3rem"/>
                  </picture>
                  <ListContainer>
                      <ListTitle>Front-End</ListTitle>
                      <ListParagraph>
                          Experiece with <br />  React.js 
                      </ListParagraph>
                  </ListContainer>
              </ListItem>


              <ListItem>
                  <picture>
                      <DiFirebase size="3rem"/>
                  </picture>
                  <ListContainer>
                      <ListTitle>Back-End</ListTitle>
                      <ListParagraph>
                      Experience with <br />
                     Node and Databases
                      </ListParagraph>
                  </ListContainer>
              </ListItem>

              <ListItem>
                  <picture>
                      <DiZend size="3rem"/>
                  </picture>
                  <ListContainer>
                      <ListTitle>Front-End</ListTitle>
                      <ListParagraph>
                          Experiece with <br />  React.js 
                      </ListParagraph>
                  </ListContainer>
              </ListItem>
          </List>
          
      </Section>
)
   

export default Technologies
