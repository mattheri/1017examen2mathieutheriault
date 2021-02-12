<template>
  <article :style="inlineBg">
      <ul>
          <a v-for="tech in technologies" :key="tech.text" :href="tech.href"><li :style="{ backgroundImage: `url(${tech.bg})` }"></li></a>
      </ul>
  </article>
</template>

<script>
export default {
    name: 'Projet',
    props: ['bgImg', 'technologies', 'name'],
    computed: {
        bgImage() {
            return this.bgImg;
        },
        inlineBg() {
            return {
                backgroundImage: `url("${this.bgImage}")`
            }
        }
    }
}
</script>

<style scoped>
    article {
        background-size: cover;
        background-position: center;
        height: 50%;
        width: 50%;
        min-width: 300px;
        max-height: 30rem;
        background-color: black;
        transition: transform .2s;
        position: relative;
    }
    article:hover {
        transform: scale(1.1);
        z-index: 1;
    }
    article:hover::before {
        background-color: rgba(0, 0, 0, 0.600);
    }
    article:hover li {
        opacity: 1;
    }
    article::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        transition: background-color .2s;
        z-index: -1;
    }
    ul {
        width: 100%;
        height: 100%;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        perspective: 1000px;
        margin: 0;
        padding: 0;
    }
    li {
        width: 200px;
        height: 25px;
        padding: .5rem;
        color: white;
        transition: transform .2s, opacity 0.2s;
        border: white 2px solid;
        margin: 0;
        opacity: 0;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    li:hover {
        transform: translateZ(100px);
    }
</style>