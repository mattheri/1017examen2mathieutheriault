<template>
  <footer v-copyright></footer>
</template>

<script>
import { getCurrentYear } from '../currentYear';
export default {
    name: 'Footer',
    directives: {
        copyright: getCurrentYear()
    }
}   
</script>

<style scoped>
    footer {
        height: 6vh;
        width: 100%;
        background-color: #44170B;
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 12px;
    }
</style>