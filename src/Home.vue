<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  components: {
    FontAwesomeIcon,
  },
}

</script>

<template>
  <div class="ocean">
    <div class="bubble bubble--1"></div>
    <div class="bubble bubble--2"></div>
    <div class="bubble bubble--3"></div>
    <div class="bubble bubble--4"></div>
    <div class="bubble bubble--5"></div>
    <div class="bubble bubble--6"></div>
    <div class="bubble bubble--7"></div>
    <div class="bubble bubble--8"></div>
    <div class="bubble bubble--9"></div>
    <div class="bubble bubble--10"></div>
    <div class="bubble bubble--11"></div>
    <div class="bubble bubble--12"></div>
    <main>
      <h1>L'ISOLA DELLA CONOSCENZA!</h1>
      <RouterLink
        to="/islands"
        style="
          text-decoration: none;
          color: rgb(245, 245, 245);
          justify-items: center;">
        <img id="image" src="/base_island.png" alt="image" />
        <div>Clicca qui per iniziare il gioco <font-awesome-icon icon="arrow-right" style="font-size:smaller"/></div> 
      </RouterLink>
    </main>
  </div>
</template>

<style scoped>
@keyframes animateSprite {
  0% {
    background-position: -600px; /* Starting position moving left sprite */
  }
  20% {
    background-position: 0px; /* Straight on sprite */
  }
  25% {
    background-position: -200px; /* Moving up sprite */
  }
  35% {
    background-position: -400px; /* Moving right sprite */
  }
  40% {
    background-position: -400px;
  }
  50% {
    background-position: -200px; /* Moving up sprite */
  }
  60% {
    background-position: -0px; /* Straight on sprite */
  }
  67% {
    background-position: -600px; /* Moving up sprite */
  }

  100% {
    background-position: -600px;
  }
}

@keyframes swim {
  0% {
    transform: translate(0, 0); /* Starting position */
  }
  20% {
    transform: translate(
      calc(-50vw - 100px),
      0
    ); /* Animate to center of screen */
  }
  25% {
    transform: translate(
      calc(-50vw - 100px),
      0
    ); /* Stay at the center for 1 second */
  }
  35% {
    transform: translate(
      calc(-50vw - 100px),
      -20vh
    ); /* Animate up for 2 seconds */
  }
  50% {
    transform: translate(-25vw, 15vh); /* Animate bottom right for 3 seconds */
  }
  60% {
    transform: translate(-25vw, -20vh); /* Animate up at right of the screen */
  }
  67% {
    transform: translate(-25vw, -20vh);
  }

  100% {
    transform: translate(
      calc(-100vw - 300px),
      0
    ); /* Animate past left past the screen */
  }
}
.ocean {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(0deg, #182848, #2980b9);
}

.bubble {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  background-color: white;
  bottom: -30px;
  opacity: 0.2;
  animation: bubble 15s ease-in-out infinite,
  sideWays 4s ease-in-out infinite alternate;
}

main {
  overflow-y: hidden;
  display: grid;
  height: 100%;
  grid-template-rows: 0.5fr 4.5fr;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
}

main #image {
  grid-row: 2;
  grid-column: 1;
  width: 450px;
  height:450px;
}

h1 {
  grid-column: 1;
  grid-row: 1;
  font-size: 80px;
  text-align: center;
  white-space: nowrap;
}

div {
  grid-column: 1;
  grid-row: 3;
  font-size: 80px;
  text-align: center;
  white-space: nowrap;
}


@keyframes bubble {
  0% {
    transform: translateY(0%);
    opacity: 0.06;
  }
  100% {
    transform: translateY(-120vh);
  }
}

@keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 200px;
  }
}

.bubble--1 {
  left: 10%;
  animation-delay: 0.5s;
  animation-duration: 16s;
  opacity: 0.2;
}

.bubble--2 {
  width: 15px;
  height: 15px;
  left: 40%;
  animation-delay: 1s;
  animation-duration: 10s;
  opacity: 0.1;
}

.bubble--3 {
  width: 10px;
  height: 10px;
  left: 30%;
  animation-delay: 5s;
  animation-duration: 20s;
  opacity: 0.3;
}

.bubble--4 {
  width: 25px;
  height: 25px;
  left: 40%;
  animation-delay: 8s;
  animation-duration: 17s;
  opacity: 0.2;
}

.bubble--5 {
  width: 30px;
  height: 30px;
  left: 60%;
  animation-delay: 10s;
  animation-duration: 15s;
  opacity: 0.1;
}

.bubble--6 {
  width: 10px;
  height: 10px;
  left: 80%;
  animation-delay: 3s;
  animation-duration: 30s;
  opacity: 0.4;
}

.bubble--7 {
  width: 15px;
  height: 15px;
  left: 90%;
  animation-delay: -7s;
  animation-duration: 25s;
  opacity: 0.3;
}

.bubble--9 {
  width: 20px;
  height: 20px;
  left: 50%;
  bottom: 30px;
  animation-delay: -5s;
  animation-duration: 19s;
  opacity: 0.2;
}

.bubble--10 {
  width: 40px;
  height: 40px;
  left: 30%;
  bottom: 30px;
  animation-delay: -21s;
  animation-duration: 16s;
  opacity: 0.3;
}

.bubble--11 {
  width: 30px;
  height: 30px;
  left: 60%;
  bottom: 30px;
  animation-delay: -13.75s;
  animation-duration: 20s;
  opacity: 0.3;
}

.bubble--11 {
  width: 25px;
  height: 25px;
  left: 90%;
  bottom: 30px;
  animation-delay: -10.5s;
  animation-duration: 19s;
  opacity: 0.3;
}
</style>
