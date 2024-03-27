import Title from '../components/Title'

const HomePage = () => {
  return (
    <>
      <div className="w-full h-[250px] self-center bg-cover bg-center" style={{ backgroundImage: "url(/forest.jpg)" }}></div>
      <span className="sm:text-4xl text-2xl mt-8 text-gray-default">Lorem ipsum dolor sit amet.</span>
      <h2 className="sm:text-5xl text-3xl mt-8 font-extrabold text-gray-dark">Valentin Chauvet</h2>
      <h3 className="sm:text-4xl text-2xl mt-8 font-black bg-gradient-to-r from-green-default to-green-dark inline-block bg-clip-text text-transparent">Lorem, ipsum dolor sit amet consectetur!</h3>
      <img className="self-center mt-10" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Light%20Skin%20Tone.png" alt="Man Technologist Light Skin Tone" width="175" height="175" />
      <article id="about" className='group hover:cursor-default'>
        <Title>à propos de moi</Title>
      </article>
      <article id="work" className='group hover:cursor-default'>
        <Title>mon travail</Title>
      </article>
      <article id="contact" className='groupe hover:cursor-default'>
        <Title>me contacter</Title>
      </article>
    </>
  )
}

export default HomePage