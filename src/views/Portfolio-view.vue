<template>
    <section id="portfolio">
        <h2>Portfolio</h2>
        <ul>
          <li v-for="project in projects" :key="project.id">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return{
            projects:  [
        {id: 1, title: 'Project 1', description: 'Description of project one'}, 
        {id: 2, title: 'Project 2', description: 'Description of project two'},
        {id: 3, title: 'Project 3', description: 'Description of project three'},

      ]
        }
    }
}

</script>