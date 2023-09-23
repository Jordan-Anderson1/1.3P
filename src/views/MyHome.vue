<template>
    <div id="app">
    <head>
      <title>Jordan Anderson's Portfolio</title>
    </head>
  
    <body>

      <router-view></router-view>
  
      <main>
        <section id="home">
          <h2>Welcome to my portfolio</h2>
          <p>Here I showcase my projects and skills</p>
        </section>
        <section id="about">
          <h2>About me</h2>
          <p>{{ aboutText }}</p>
        </section>
  
        <section id="portfolio">
          <h2>Portfolio</h2>
          <ul>
            <li v-for="project in projects" :key="project.id">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
            </li>
          </ul>
          </section>
          <section id="contact">
            <h2>Contact Me</h2>
            <p>Email: {{ contactEmail }}</p>
            <label for="subscribe">Subscribe to Newsletter:</label>
            <input type="checkbox" id="subscribe" v-model="subscribe">
          </section>
        
  
      </main>
  
      
    </body>
  </div>
  
    
  </template>

<script>


export default {
  data () {
    return{
      name: 'App',
      siteTitle: 'Jordan Anderson Portfolio',
      aboutText: 'I am a passionate web developer with expertise in web development. I am currently completing my bachelor degree of computer science at Deakin University',
      projects:  [
        {id: 1, title: 'Project 1', description: 'Description of project one'}, 
        {id: 2, title: 'Project 2', description: 'Description of project two'},
        {id: 3, title: 'Project 3', description: 'Description of project three'},

      ],
      contactEmail: 'andersonjor@deakin.edu.au',
      subscribe: false,
    }
  }  
}
</script>