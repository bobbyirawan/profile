import React from 'react'
import go from "../../assets/go.png";

import { FaReact, FaUbuntu } from 'react-icons/fa'
import { DiAndroid, DiGit, DiHtml5 } from 'react-icons/di'
import { GoGithubAction } from 'react-icons/go'
import { SiKotlin, SiMysql, SiNginx, SiStyledComponents } from 'react-icons/si'
import { AiFillGithub } from "react-icons/ai";
import { 
  TechStackContainer,
  Heading,
  TechStackRow,
  TechStackColumn,
  LableStack
} from './skills.styles'

const Skills = () => {
  return (
    <TechStackContainer name="skills">
      <Heading>SKILLS</Heading>
      <TechStackRow>
        <TechStackColumn>
          <FaReact  style={{color: "#272D40"}}/>
          <LableStack>React</LableStack>
        </TechStackColumn>
        <TechStackColumn>
          <DiHtml5 style={{color: "red"}}/>
          <LableStack>Html5</LableStack>
        </TechStackColumn>
        <TechStackColumn>
          <img src={go} style={{width: "100%"}} alt="go" />
          <LableStack>Go</LableStack>
        </TechStackColumn>
        <TechStackColumn>
          <SiStyledComponents style={{color: "yellowgreen"}} />
          <LableStack>Styled Component</LableStack>
        </TechStackColumn>
        <TechStackColumn>
          <SiMysql style={{color: "#09c6f9"}}/>
          <LableStack>MySql</LableStack>
        </TechStackColumn> 
        <TechStackColumn>
          <SiKotlin style={{color: "#ccccff"}}/>
          <LableStack>Kotlin</LableStack>
        </TechStackColumn>

        <TechStackColumn>
          <DiAndroid style={{color: "orange"}}/>
          <LableStack>Android Sdk</LableStack>
        </TechStackColumn>

        <TechStackColumn>
          <AiFillGithub style={{color: "black"}}/>
          <LableStack>Github</LableStack>
        </TechStackColumn>  

        <TechStackColumn>
          <DiGit style={{color: "red"}}/>
          <LableStack>Git</LableStack>
        </TechStackColumn>

        <TechStackColumn>
          <GoGithubAction style={{color: "black"}} />           
          <LableStack>Github Action</LableStack>
        </TechStackColumn>

        <TechStackColumn>
          <SiNginx style={{color: "#006600"}}/>
          <LableStack>Nginx</LableStack>
        </TechStackColumn>

        <TechStackColumn>
          <FaUbuntu style={{color: "red"}}/>
          <LableStack>Ubuntu</LableStack>
        </TechStackColumn>
        {/* <GrGolang /> */}


      </TechStackRow>

    </TechStackContainer>
  )
}

export default Skills
