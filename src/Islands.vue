<script>
import { useDataStore } from "@/stores/store";
import { useQuestionsStore } from "@/stores/questions";
import GoogleCSE from "@/components/GoogleCSE.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import GeminiAI from "./components/GeminiAI.vue";
export default {
  setup() {
    const dataStore = useDataStore();
    const questionsStore = useQuestionsStore();
    let islandComplete = false;
    return {
      dataStore,
      questionsStore,
      islandComplete,
    };
  },
};
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
    <main id="islands">
      <RouterLink to="/island/1/1" id="isla1" style="text-decoration: none">
        <div class="islandComplete" v-if="this.islandComplete == true">
          <img
            src="/island1.png"
            alt="island1"
            style="height: 350px; width: 350px; opacity: 50%"
          />
        </div>
        <img
          src="/island1.png"
          alt="island1"
          style="height: 350px; width: 350px"
          v-else
        />
        <div class="subjects">SPORT</div>
      </RouterLink>
      <RouterLink to="/island/2/1" id="isla2" style="text-decoration: none">
        <img
          src="/island2.png"
          alt="island2"
          style="height: 350px; width: 350px"
        />
        <div class="subjects">NATURA</div>
      </RouterLink>
      <RouterLink to="/island/3/1" id="isla3" style="text-decoration: none">
        <img
          src="/island3.png"
          alt="island3"
          style="height: 350px; width: 350px"
        />
        <div class="subjects">GEOGRAFIA</div>
      </RouterLink>
      <RouterLink to="/island/4/1" id="isla4" style="text-decoration: none">
        <img
          src="/island4.png"
          alt="island4"
          style="height: 350px; width: 350px"
        />
        <div class="subjects">SCIENZA</div>
      </RouterLink>
      <RouterLink
        to="/islands/treasure"
        id="isla5"
        style="text-decoration: none"
      >
        <img
          src="/island5.png"
          alt="island5"
          style="height: 350px; width: 350px"
        />
        <div class="subjects">TESORO</div>
      </RouterLink>
    </main>
  </div>
</template>

<style scoped>
#islands {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;
}

#isla1 {
  grid-column: 1;
  grid-row: 2;
}

#isla2 {
  grid-column: 1;
  grid-row: 1;
}

#isla3 {
  grid-column: 3;
  grid-row: 1;
}

#isla4 {
  grid-column: 3;
  grid-row: 2;
}
#isla5 {
  grid-column: 2;
  grid-row: 1 / span 2;
}

.subjects {
  font-size: 40px;
  text-align: center;
  text-decoration: none;
  color: bisque;
}

#islands img {
  width: 300px;
  height: 300px;
  aspect-ratio: 2/3;
}

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
