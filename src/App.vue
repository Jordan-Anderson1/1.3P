<template>
  <div id="app">
  <head>
    <title>Jordan Anderson's Portfolio</title>
    <link rel="icon" href="./favicon.png">
  </head>

  <body>
    <header>
      <h1>{{ siteTitle }}</h1>
    </header>
    

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <router-view></router-view>

      

    

    <footer>
      &copy; 2023 Jordan Anderson's Portfolio. All rights resevered. 
    </footer>
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

<style>
  /* Apply styles to the overall app container */
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  /* Style the header */
  header {
    background-color: #3498db;
    color: white;
    padding: 20px;
  }

  /* Style the navigation links */
  nav {
    background-color: #2c3e50;
    padding: 10px;
  }

  nav a {
    color: white;
    text-decoration: none;
    margin-right: 20px;
  }

  /* Style the main content sections */
  main {
    padding: 20px;
  }

  section {
    margin-bottom: 40px;
    padding: 20px;
    border: 2px solid #3498db; /* Add a border */
    border-radius: 10px; /* Rounded corners */
    background-color: #f2f2f2; /* Background color */
  }

  section h2 {
    font-size: 24px; /* Larger heading font size */
  }

  section p {
    font-size: 16px; /* Smaller paragraph font size */
  }

  /* Style the footer */
  footer {
    background-color: #34495e;
    color: white;
    padding: 10px;
  }

  /* Style the checkbox input for subscribing */
  #subscribe {
    margin-left: 10px;
  }
</style>




