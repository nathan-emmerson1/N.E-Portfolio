function AboutMe() {
  return (
   <div className="relative min-h-screen flex" id="about">
  <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-2xl">
    <div className="w-3/4 flex justify-between">
      <div className="pr-5 mr-6 w-2/3  break-words">
      <strong className="pb-10">About me</strong>
      <br></br>
        <p>
          I am a 25-year-old Maori Software Developer, and I consider myself to be a solution-oriented person, always seeking new challenges. My goal is to expand my knowledge and expertise in software development and continue pushing the boundaries of the Tech industry.
        </p>
        <br className="pt-6"></br>
        <p>
          My journey started with primary military experience, where I developed discipline, perseverance, and leadership skills. These experiences have shaped my approach to both work and life. I'm committed to lifelong learning, continually expanding my skill set to stay ahead of technological advancements.
        </p>
      </div>
      <div className="w-1/3 text-center">
        <img src="images/profile-pic.jpg" alt="profile-pic.jpg" className="rounded-full">
        </img>
      </div>
    </div>
  </div>
</div>
  )
}
export default AboutMe
