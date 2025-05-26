import { CardTitle, SectionContainer, Title } from "components-styled"
import { Tooltip } from "components-styled/tooltip"
import { CarouselTrack, CarouselWrapper, LogoCard, mySkills, TechCard, TechGrid } from "."

export const Skills = () => {
  return (
    <SectionContainer id='skills'>
      <Title style={{ textAlign: 'center', marginBottom: 0 }}>Skills</Title>
      <CardTitle style={{ textAlign: 'center', marginTop: 1}}>My working stack</CardTitle>
      <CarouselWrapper>
        <CarouselTrack>
          {[...mySkills, ...mySkills].map(({ name, Component }, i) => (
            <Tooltip key={i} label={name}>
              <LogoCard aria-label={name}>
                {Component}
              </LogoCard>
            </Tooltip>
          ))}
        </CarouselTrack>
      </CarouselWrapper>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      <TechGrid>
        {mySkills.map(({ name, Component }) => (
          <Tooltip key={name} label={name}>
            <TechCard>
              {Component}
            </TechCard>
          </Tooltip>
        ))}
      </TechGrid>

      </div>
    </SectionContainer>
  )
}
