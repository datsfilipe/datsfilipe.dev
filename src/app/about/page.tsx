import { Title } from '../../components/Title'
import { Paragraph } from '../../components/Paragraph'
import { Section } from '../../components/Section'
import { Card } from '../../components/Card'
import { CustomLink } from '../../components/CustomLink'
import { MdCircle } from 'react-icons/md'
import Image from 'next/image'
import { CardsList } from '../../components/CardsList'

const comeFromLeftAnimation = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 }
}

const comeFromRightAnimation = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 }
}

const comeFromBottomAnimation = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
}

export default function About () {
  return (
    <div className='pb-12 mx-auto w-10/12 max-md:w-11/12'>
      <Section
        className='max-lg:flex-col items-center [&>*]:mt-12 max-xl:mt-10'
        variants={comeFromBottomAnimation}
      >
        <Image
          src='https://avatars.githubusercontent.com/u/76636791?v=4'
          quality={100}
          width={500}
          height={500}
          alt='Filipe Lima, me.'
          className='rounded-3xl shadow-lg transition-all hover:shadow-xl shadow-neutral-800 dark:shadow-black dark:hover:shadow-black hover:shadow-neutral-800'
        />
        <div className='ml-12 max-xl:max-w-3xl max-2xl:max-w-4xl max-lg:ml-0'>
          <Title className='font-serif'>
            I&apos;m Filipe Lima, a Front-end Web Developer working remotely from Brazil.
          </Title>
          <Paragraph className='mt-7 text-xl max-lg:mt-6 max-md:text-lg text-neutral-700 dark:text-neutral-200'>
            I&apos;m a product-focused Developer based in Brazil. I love solving problems and building rich interfaces to allow users to have the best experience possible with the solutions I make.
          </Paragraph>
          <Paragraph className='mt-7 text-xl max-lg:mt-4 max-md:text-lg text-neutral-700 dark:text-neutral-200'>
            As a programmer, I&apos;m about to finish my first professional year, at that time I&apos;m building together with another partner a website that allows people to find and allocate buffets for events. I&apos;m currently working for a local agency.
          </Paragraph>
          <Paragraph className='mt-7 text-xl max-lg:mt-4 max-md:text-lg text-neutral-700 dark:text-neutral-200'>
            I&apos;ve plans on graduating and goals to achieve. I think the best way to finish things is committing yourself till the end. Other than programming and Linux stuff, I like history, movies and games.
          </Paragraph>
        </div>
      </Section>
      <Section
        className='flex-col mx-auto mt-12 max-w-[50rem]'
        variants={comeFromLeftAnimation}
      >
        <Title className='mb-10 ml-auto font-serif w-fit'>
          Experience
        </Title>
        <CardsList listId={0}>
          <Card>
            <div className='mr-2 w-32 h-full max-md:w-16'>
              2022 - Now
            </div>
            <div className='w-full'>
              <em className='flex flex-wrap'>
                Front-end Developer -&nbsp;<CustomLink href='https://casadosdados.com.br/solucao/cnpj/octaldev-solucoes-e-tecnologia-ltda-40237988000121' target='_blank'>Octal Dev</CustomLink>
              </em>
              <Paragraph className='mt-2 mb-2'>
                Creator of tools such as the component library and the boilerplates being used alongside the projects. Currently building an website for users to find and allocate buffets for events like an e-commerce platform. Collaborated closely with the the project managers to track the objectives and stabilish deliveries.
              </Paragraph>
              <div className='flex flex-wrap items-center'>
                <span className='flex items-center'><MdCircle />&nbsp;React</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;CSSModules</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;WebSockets</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;Context API</span>
              </div>
            </div>
          </Card>
          <Card>
            <div className='mr-2 w-32 h-full max-md:w-16'>
              2018 - 2018
            </div>
            <div className='w-full'>
              <em className='flex flex-wrap'>
                Monitor in Computer Technician Course Extension Project -&nbsp;<CustomLink href='https://portal.ifma.edu.br/inicio' target='_blank'>IFMA</CustomLink>
              </em>
              <Paragraph className='mt-2 mb-2'>
                I was a monitor in the Computer Technician Course Extension Project, whose objective was to bring this knowledge to students from other technical courses. 60 hours of workload.
              </Paragraph>
              <div className='flex flex-wrap items-center'>
                <span className='flex items-center'><MdCircle />&nbsp;Windows</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;Office</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;Internet</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;Hardware</span>&nbsp;
              </div>
            </div>
          </Card>
          <Card>
            <div className='mr-2 w-32 h-full max-md:w-16'>
              2018 - 2021
            </div>
            <div className='w-full'>
              <em className='flex flex-wrap'>
                Computer Technician -&nbsp;<CustomLink href='https://portal.ifma.edu.br/inicio' target='_blank'>IFMA</CustomLink>
              </em>
              <Paragraph className='mt-2 mb-2'>
                I was an excellent programming student, which gave me the opportunity to participate in events such as FLISOL (Latin American Free Software Installation Festival), where I fell in love with Linux and open source. I finished high school as a Computer Technician at the Federal Institute of Maranhão.
              </Paragraph>
              <div className='flex flex-wrap items-center'>
                <span className='flex items-center'><MdCircle />&nbsp;Programming logic</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;Web Development</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;Networks</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;Hardware</span>&nbsp;
              </div>
            </div>
          </Card>
        </CardsList>
      </Section>
      <Section
        className='flex-col mx-auto mt-12 max-w-[50rem]'
        variants={comeFromRightAnimation}
      >
        <Title className='mr-auto mb-10 font-serif w-fit'>
          Side Projects
        </Title>
        <CardsList listId={1}>
          <Card>
            <div className='mr-2 w-32 h-full max-md:w-16'>
              2022
            </div>
            <div className='w-full'>
              <em className='flex flex-wrap'>
                React Bad Apple -&nbsp;<CustomLink href='http://react-bad-apple.vercel.app/' target='_blank'>Repository</CustomLink>
              </em>
              <Paragraph className='mt-2 mb-2'>
                It&apos;s an npm package that allows user to transform frame images into an ascii playable component and use alongside React projects.
              </Paragraph>
              <div className='flex flex-wrap items-center'>
                <span className='flex items-center'><MdCircle />&nbsp;React</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;ESBuild</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;Typescript</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;Vite</span>&nbsp;
              </div>
            </div>
          </Card>
          <Card>
            <div className='mr-2 w-32 h-full max-md:w-16'>
              2021
            </div>
            <div className='w-full'>
              <em className='flex flex-wrap'>
                Ignews -&nbsp;<CustomLink href='https://ignews-datsfilipe.vercel.app/' target='_blank'>Repository</CustomLink>
              </em>
              <Paragraph className='mt-2 mb-2'>
                I&apos;s an news in post format app. It was made with a lot of cool technologies and librarys, such as Stripe, Next Auth, PrismicCMS, FaunaDB, etc. The focus was learning about CSR (Client Side Rendering), SSR (Server Side Rendering) and SSG (Static Site Generation).
              </Paragraph>
              <div className='flex flex-wrap items-center'>
                <span className='flex items-center'><MdCircle />&nbsp;React</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;Next.js</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;Typescript</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;Jest</span>&nbsp;
              </div>
            </div>
          </Card>
          <Card>
            <div className='mr-2 w-32 h-full max-md:w-16'>
              2022
            </div>
            <div className='w-full'>
              <em className='flex flex-wrap'>
                React Jokenpo -&nbsp;<CustomLink href='https://react-jokenpo-alpha.vercel.app/' target='_blank'>Repository</CustomLink>
              </em>
              <Paragraph className='mt-2 mb-2'>
                I&apos;s an rock, scissor, paper game kind of different. In this game you pick up your winner and see if it stands up until the end. I was inspired by an random gif that I saw at internet, hope you like.
              </Paragraph>
              <div className='flex flex-wrap items-center'>
                <span className='flex items-center'><MdCircle />&nbsp;React</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;Context API</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;Typescript</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;Vite</span>&nbsp;
              </div>
            </div>
          </Card>
          <Card>
            <div className='mr-2 w-32 h-full max-md:w-16'>
              2022
            </div>
            <div className='w-full'>
              <em className='flex flex-wrap'>
                datsfilipe.dev -&nbsp;<CustomLink href='https://github.com/datsfilipe/datsfilipe.dev' target='_blank'>Repository</CustomLink>
              </em>
              <Paragraph className='mt-2 mb-2'>
                It&apos;s this very place we are right now. Personal website to show some attributes I have. I&apos;m also building it in Next.js version 13 with all the experimental features.
              </Paragraph>
              <div className='flex flex-wrap items-center'>
                <span className='flex items-center'><MdCircle />&nbsp;React</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;Next.js</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;Typescript</span>&nbsp;
                <span className='flex items-center'><MdCircle />&nbsp;Framer Motion</span>&nbsp;
              </div>
            </div>
          </Card>
        </CardsList>
        <Paragraph className='text-neutral-600 dark:text-neutral-400'>
          In order to see more of my personal projects/repositorys, please visit my github profile and take a look, here&apos;s the link:&nbsp;<CustomLink href='https://github.com/datsfilipe' target='_blank'>datsfilipe</CustomLink>
        </Paragraph>
      </Section>
    </div>
  )
}
