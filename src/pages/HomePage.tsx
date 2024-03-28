import Article from '../components/Article'
import Title from '../components/Title'
import Image from '../components/Image'

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
          <Image src='/typescript.svg'/>
          <Image src='/react.svg' />
          <Image src='/tailwindcss.svg' />
          <Image src='/nodejs.svg' />
          <Image src='/mongodb.svg' />
          <Image src='/postgresql.svg' />
        </div>
      </Article>
      <Article>
        <Title>mes centres d'interêts</Title>
        <p className='text-gray-default'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, ad amet placeat quasi rem alias rerum suscipit doloremque, earum porro voluptatum cupiditate nemo temporibus libero vero eius? Libero, mollitia dignissimos.</p>
        <p className='text-gray-default'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, at.</p>
      </Article>
      <Article id="work">
        <Title>mon travail</Title>
        
      </Article>
      <Article id="contact">
        <Title>me contacter</Title>
      </Article>
    </>
  )
}

export default HomePage