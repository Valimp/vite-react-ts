const HomePage = () => {
  return (
    <>
      <div className="w-full h-[250px] self-center bg-cover bg-center" style={{ backgroundImage: "url(/forest.jpg)" }}></div>
      <span className="sm:text-4xl text-2xl mt-8 text-gray-default">Bonjour, je suis</span>
      <h2 className="sm:text-5xl text-3xl mt-8 font-extrabold">Valentin Chauvet</h2>
      <h3 className="sm:text-4xl text-2xl mt-8 font-bold bg-gradient-to-r from-green-default to-green-dark inline-block bg-clip-text text-transparent">Un développeur fullstack passionné !</h3>
    </>
  )
}

export default HomePage