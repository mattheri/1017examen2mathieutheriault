export const getCurrentYear = () => {
    return {
        inserted: function(el) {
            const year = new Date(Date.now()).getFullYear();
            el.innerText = `Copyright ©️ ${year} - Mathieu Thériautl - All Rights Reserved`
        } 
    }
}