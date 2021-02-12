<template>
  <footer v-copyright></footer>
</template>

<script>
export default {
    name: 'Footer',
    directives: {
        copyright: {
            inserted: function(el) {
                const year = new Date(Date.now()).getFullYear();
                el.innerText = `Copyright ©️ ${year} - Mathieu Thériautl - All Rights Reserved`
            }
        }
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