<template>
  <section>
      <Projet v-for="prj in projects" :key="prj.name" :bgImg="prj.bgImg" :technologies="prj.technologies" :name="prj.name" />
  </section>
</template>

<script>
import Projet from '../components/Projet';
export default {
    name: 'Projets',
    components: {
        Projet,
    },
    data: function () {
        return {
            projects: [
                {
                    bgImg: require('../assets/fna.png'),
                    technologies: [
                        {
                            text: 'TypeScript',
                            href: 'https://www.typescriptlang.org/',
                            bg: require('../assets/typescript.jpg')
                        },
                        {
                            text: 'SASS',
                            href: 'https://sass-lang.com/',
                            bg: require('../assets/sass.png')
                        },
                        {
                            text: 'React',
                            href: 'https://reactjs.org/',
                            bg: require('../assets/react.jpg')
                        },
                        {
                            text: 'MongoDB',
                            href: 'https://www.mongodb.com/3',
                            bg: require('../assets/mongodb.jpeg')
                        }
                    ],
                    name: 'FNA'
                },
                {
                    bgImg: require('../assets/solarsystem.png'),
                    technologies: [
                        {
                            text: 'Javascript',
                            href: 'https://www.javascript.com/',
                            bg: require('../assets/js.jpg')
                        },
                        {
                            text: 'Bootstrap',
                            href: 'https://getbootstrap.com/',
                            bg: require('../assets/bootstrap.png')
                        },
                                               {
                            text: 'Three.js',
                            href: 'https://threejs.org/',
                            bg: require('../assets/three.png')
                        },
                    ],
                    name: 'Solar System Representation'
                },
                {
                    bgImg: require('../assets/proaxion.png'),
                    technologies: [
                        {
                            text: 'TypeScript',
                            href: 'https://www.typescriptlang.org/',
                            bg: require('../assets/typescript.jpg')
                        },
                        {
                            text: 'SASS',
                            href: 'https://sass-lang.com/',
                            bg: require('../assets/sass.png')
                        },
                        {
                            text: 'React',
                            href: 'https://reactjs.org/',
                            bg: require('../assets/react.jpg')
                        },
                        {
                            text: 'Firebase',
                            href: 'https://firebase.google.com/',
                            bg: require('../assets/firebase.png')
                        }
                    ],
                    name: 'Proaxion E-Commerce'
                },
                {
                    bgImg: require('../assets/this.png'),
                    technologies: [
                        {
                            text: 'Vue',
                            href: 'https://vuejs.org/',
                            bg: require('../assets/vue.png')
                        },
                        {
                            text: 'Firebase',
                            href: 'https://firebase.google.com/',
                            bg: require('../assets/firebase.png')
                        }
                    ],
                    name: 'Ce Site'
                },
            ]
        }
    }
}
</script>

<style scoped>
    section {
        height: 87vh;
        width: 100%;
        display: flex;
        align-items: center;
        overflow: hidden;
        flex-wrap: wrap;
    }
</style>