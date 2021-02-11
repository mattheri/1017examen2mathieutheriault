<template>
  <header>
      <nav>
          <ul>
              <li>
                  <a href='#'>
                    Accueil
                  </a>
              </li>
              <li>
                  <a href='#'>
                    Projets
                  </a>
              </li>
              <li>
                  <a href='#'>
                    Contact
                  </a>
              </li>
          </ul>
      </nav>
  </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    header, nav {
        width: 100%;
        height: 7vh;
        background-color: #44170B;
        background: rgba( 68, 23, 11, 0.25 );
        box-shadow: 0 8px 28px 0 rgba( 68, 23, 11, 0.25 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
    }
    ul {
        margin: 0;
        height: 100%;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    li {
        margin: 0 2rem;
        position: relative;
        animation: appear 500ms cubic-bezier(0.87, 0, 0.13, 1) 0ms forwards;
    }
    li:first-of-type {
        margin-left: 0;
    }
    li:last-of-type {
        margin-right: 0;
    }
    li::before {
        content: '';
        width: 100%;
        height: 3px;
        position: absolute;
        background-color: #FCD892;
        bottom: -2px;
        border-radius: 50px;
        transform: scaleX(0);
        transition-property: transform;
        transition-duration: 250ms;
        transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
        transform-origin: left;
    }
    li::after {
        content: '';
        width: 100%;
        height: 3px;
        position: absolute;
        background-color: #D6754C;
        bottom: -2px;
        left: 0;
        border-radius: 50px;
        transform: scaleX(0);
        transition-property: transform;
        transition-duration: 250ms;
        transition-delay: 260ms;
        transform-origin: right;
        transition-delay: 250ms;
        transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
        z-index: 1;
    }
    li:hover::before, li:hover::after {
        transform: scaleX(1);
    }
    a {
        text-decoration: none;
        color: white;
        text-transform: uppercase;
    }
    @keyframes appear {
        0% {
            opacity: 0;
            transform: translateX(-15px);
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateX(0);
        }
    }
</style>