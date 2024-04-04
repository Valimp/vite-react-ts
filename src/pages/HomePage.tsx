import Article from '../components/Article'
import Title from '../components/Title'
import Image from '../components/Image'
import Card from '../components/Card'
import Badge from '../components/Badge'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const HomePage = () => {
  return (
    <>
      <div className="w-full h-[250px] self-center bg-cover bg-center" style={{ backgroundImage: "url(/forest.jpg)" }}></div>
      <span className="sm:text-4xl text-2xl mt-8 text-gray-default">Bonjour ! Je suis</span>
      <h2 className="sm:text-5xl text-3xl mt-8 font-extrabold text-gray-dark">Valentin Chauvet</h2>
      <h3 className="sm:text-4xl text-2xl mt-8 font-black bg-gradient-to-r from-green-default to-green-dark inline-block bg-clip-text text-transparent">un développeur web éco-responsable</h3>
      <img className="self-center mt-10" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Light%20Skin%20Tone.png" alt="Man Technologist Light Skin Tone" width="175" height="175" />
      <Article id="about">
        <Title>à propos de moi</Title>
        <p className='text-gray-default'>
          Passionné par le développement d'application web, et l'éco-conception,
          je souhaite mettre mes compétences au service de projets innovants et respectueux de l'environnement.
        </p>
      </Article>
      <Article>
        <Title>stack technique</Title>     
        <div className='flex gap-3'>
          <Image src='/typescript.svg' alt="typescript" width="50" height="50"/>
          <Image src='/react.svg' alt="react" width="50" height="50"/>
          <Image src='/tailwindcss.svg' alt="tailwindcss" width="50" height="50"/>
          <Image src='/nodejs.svg' alt="nodejs" width="50" height="50"/>
          <Image src='/mongodb.svg' alt="mongodb" width="50" height="50"/>
          <Image src='/postgresql.svg' alt="postgresql" width="50" height="50"/>
        </div>
      </Article>
      <Article>
        <Title>mes centres d'interêts</Title>
        <p className='text-gray-default'>Pendant mon temps libre, je me consacre au tennis, à la moto, et aux jeux de société.</p>
        <p className='text-gray-default'> Ces hobbies égayent ma vie quotidienne, me procurant des sensations fortes et des moments de convivialité.</p>
      </Article>
      <Article id="work">
        <Title>mon travail</Title>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
          <Card url='https://github.com/Valimp/vite-react-ts'>
            <Image src='/project1.jpg' alt="project1" width="400" height="250" />
            <h3 className='text-gray-dark mt-3 text-xl font-bold'>Mon portfolio</h3>
            <p className='text-gray-default mt-2'>Vous y êtes ! Il est beau n'est ce pas ? Restez autant que vous le voudrez.</p>
          </Card>
          <Card url='https://github.com/openfoodfacts/nutripatrol-frontend'>
            <Image src='/project2.jpg' alt="project2" width="400" height="250" />
            <h3 className='text-gray-dark mt-3 text-xl font-bold'>L'interface Nutripatrol</h3>
            <p className='text-gray-default mt-2'>Une interface de moderation de tickets. Et opensource s'il vous plait !</p>
          </Card>
          <Card url='https://github.com/openfoodfacts/nutripatrol'>
            <Image src='/project3.jpg' alt="project3" width="400" height="250"/>
            <h3 className='text-gray-dark mt-3 text-xl font-bold'>L' API Nutripatrol</h3>
            <p className='text-gray-default mt-2'>J'avais dis développeur fullstack, alors je développe aussi des APIs.</p>
          </Card>
        </div>
      </Article>
      <Article id="contact">
        <Title>me contacter</Title>
        <div className='flex gap-10'>
          <Badge url='https://www.linkedin.com/in/valimp/'>
            <FaLinkedin size={40} className='text-gray-default hover:text-gray-default/70' />
          </Badge>
          <Badge url='https://github.com/Valimp'>
            <FaGithub size={40} className='text-gray-default hover:text-gray-default/70' />
          </Badge>
          <Badge email='valentinchauvet.contact@gmail.com'>
            <IoIosMail size={40} className='text-gray-default hover:text-gray-default/70' />
          </Badge>
        </div>
      </Article>
    </>
  )
}

export default HomePage