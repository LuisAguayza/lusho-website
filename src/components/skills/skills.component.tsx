import { CardTitle, Img, SectionContainer, Title } from "components-styled"
import { Tooltip } from "components-styled/tooltip"
import { mySkills, TechCard, TechGrid } from "."

export const Skills = () => {
  return (
    <SectionContainer id='skills'>
      <Title style={{ textAlign: 'center', marginBottom: 0 }}>Skills</Title>
      <CardTitle style={{ textAlign: 'center', marginTop: 1}}>My working stack</CardTitle>
        <TechGrid>
        {mySkills.map(({ name, src }) =>
          <Tooltip label={name}>
            <TechCard>
              <Img src={src} />
            </TechCard>
          </Tooltip>
        )}
        </TechGrid>
    </SectionContainer>
  )
}
