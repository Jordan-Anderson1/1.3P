<template>
    <h1>About</h1>
    <section id="about">
          <h2>About me</h2>
          <p>{{ aboutText }}</p>
        </section>
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