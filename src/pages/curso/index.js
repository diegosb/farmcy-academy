import React from 'react'
import Layout from '../../components/Layout'
import HeroDetails from '../../components/common/HeroDetails'
import BannerSpecialist from '../../components/common/BannerSpecialist'
import CourseInfo from '../../components/common/CourseInfo'
import workloadIcon from '../../img/icons/ico_cargahoraria.svg'
import listIcon from '../../img/icons/ico_organizacaodeaprendizado.svg'
import cinemaIcon from '../../img/icons/ico_qualidadecinematografica_green.svg'
import availableIcon from '../../img/icons/ico_jadisponivel.svg'
import viewIcon from '../../img/icons/ico_metodologia.svg'
import bgImage from '../../img/BG_Curso_PauloMagoo.png'
import CourseModules from '../../components/CourseModules'

const details = [
  {
    icon: workloadIcon,
    text: 'Carga horária: 4 horas',
  },
  {
    icon: listIcon,
    text: 'Dividido em 4 módulos',
  },
  {
    icon: cinemaIcon,
    text: 'Qualidade cinematográfica',
  },
  {
    icon: viewIcon,
    text: 'Metodologia elaborada pelo próprio especialista',
  },
  {
    icon: availableIcon,
    text: 'Já disponível na plataforma',
  },
]

const modules = [
  {
    title: 'Evolução humana: escolhas e consequências',
    description:
      'Neste módulo você vai revisitar a sua história. Como era o seu comportamento há milhares de anos atrás? Como e porquê se alimentava? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Os pilares do comportamento ancestral',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
  },
  {
    title: 'Alimentação ancestral: das cavernas para a cozinha',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
  },
  {
    title: 'Sedentarismo x Exercício: quem disse que é fácil?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
  },
]

const Course = () => (
  <Layout>
    <HeroDetails
      bgImageMobile={bgImage}
      bgImage={bgImage}
      titleLanding="Evolução humana e alimentação ancestral com Paulo Magoo"
      curriculum={`Entender a história faz parte de uma alimentação saudável. Neste curso, Paulo "Magoo" Behr contextualiza a ancestralidade humana e a conecta com o mundo atual, pontua as diferenças e as principais causas pelas quais sofremos tanto com a má alimentação do mundo moderno.`}
      callActionSmall="Tenha acesso ilimitado por"
      callActionBig="7 dias grátis"
      buttonText="Acesse todo o conteúdo"
    />
    <CourseInfo
      title={`Paulo "Magoo" Behr`}
      description="PaleoCoach, profissional do exercício e palestrante com mais de 30 anos de experiência mudando o corpo e a vida das pessoas, além de contribuir na carreira profissional de milhares de colegas em centenas de cursos ministrados no Brasil e exterior."
      details={details}
    />
    <CourseModules modules={modules} />
    <BannerSpecialist />
  </Layout>
)

export default Course
