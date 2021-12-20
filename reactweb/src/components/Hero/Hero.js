import React from 'react'
import {Section,SectionText,SectionTitle} from "../../styles/GlobalComponents"
import Button from "../../styles/GlobalComponents/Button"
import {LeftSection} from "./HeroStyles"


const Hero = () => (
     <Section row nopadding>
         <LeftSection>
             <SectionTitle main center>
              Welcome to <br /> My Personel Dolphin
             </SectionTitle>
             <SectionText>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quasi minus veniam distinctio adipisci porro temporibus vero autem perferendis minima? Veniam natus delectus dignissimos laboriosam?
             </SectionText>
             <Button  onClikck={()=> window.location = "https://google.com"}>Lear More</Button>
         </LeftSection>
     </Section>
)
  

export default Hero
