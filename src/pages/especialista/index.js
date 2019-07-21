import React from 'react'
import Layout from '../../components/Layout'
import HeroDetails from '../../components/common/HeroDetails'
import BannerSpecialist from '../../components/common/BannerSpecialist'
import CourseInfo from '../../components/common/CourseInfo'
import interviewIcon from '../../img/icons/ico_entrevistacom.svg'
import listIcon from '../../img/icons/ico_organizacaodeaprendizado.svg'
import cinemaIcon from '../../img/icons/ico_qualidadecinematografica_green.svg'
import availableIcon from '../../img/icons/ico_jadisponivel.svg'
import viewIcon from '../../img/icons/ico_pontodevista.svg'
import bgImage from '../../img/BG_Curso_WalterWillet.png'

const details = [
  {
    icon: interviewIcon,
    text: 'Entrevista com Dr. Walter Willet',
  },
  {
    icon: listIcon,
    text: 'Conteúdo organizado por assuntos',
  },
  {
    icon: cinemaIcon,
    text: 'Qualidade cinematográfica',
  },
  {
    icon: viewIcon,
    text:
      'O ponto de vista do Dr. Walter Willet sobre o mundo da alimentação direto no seu celular',
  },
  {
    icon: availableIcon,
    text: 'Já disponível na plataforma',
  },
]

const Specialist = () => (
  <Layout>
    <HeroDetails
      bgImageMobile={bgImage}
      bgImage={bgImage}
      title="Aprenda sobre saúde e alimentação com Dr. Walter Willet"
      curriculum="Walter C. Willett, é um médico americano e pesquisador de nutrição. Atualmente, Willett é o professor Fredrick John Stare de Epidemiologia e Nutrição na Escola de Saúde Pública de Harvard e foi o presidente de seu departamento de nutrição de 1991 a 2017."
      callActionSmall="Tenha acesso ilimitado por"
      callActionBig="7 dias grátis"
      buttonText="Acesse todo o conteúdo"
    />
    <CourseInfo
      name="Dr. Walter Willet"
      description="Aqui vai um texto não muito grande vendendo o conteúdo que está na plataforma e que a pessoa vai poder acessar assim que assinar."
      details={details}
    />
    <BannerSpecialist />
  </Layout>
)
Specialist.propTypes = {}
Specialist.defaultProps = {}

export default Specialist
