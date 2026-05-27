<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="transition-all duration-300">
    <RouterView />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

/* @keyframes appear {
  from {
    opacity: 1;
    scale: 0.5;
  }

  to {
    opacity: 1;
    scale: 1;
  }
}

@keyframes appearleft {
  from {
    opacity: 1;
    transform: translateX(-100px) scale(0.8);
  }

  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

.animation-scroll-left-entry {
  animation: appearleft 0.5s linear;
  animation-timeline: view();
  animation-range: entry 0 cover 40%;
}

.animation-scroll-up-entry {
  animation: appear 0.5s linear;
  animation-timeline: view();
  animation-range: entry 0 cover 40%;
  transform: transtion-all duration-300;
} */
 @keyframes appear {
   from {
     opacity: 0;
     /* Better starting point */
     scale: 0.5;
   }

   to {
     opacity: 1;
     scale: 1;
   }
 }

 @keyframes appearleft {
   from {
     opacity: 0;
     transform: translateX(-100px) scale(0.8);
   }

   to {
     opacity: 1;
     transform: translateX(0) scale(1);
   }
 }

 /* Left slide-in */
 .animation-scroll-left-entry {
   animation: appearleft 0.8s linear forwards;
   /* added 'forwards' */
   animation-timeline: view();
   animation-range: entry 0% cover 40%;
 }

 /* Scale up */
 .animation-scroll-up-entry {
   animation: appear 0.8s linear forwards;
   animation-timeline: view();
   animation-range: entry 0% cover 20%;
   opacity: 0;
 }

/* carousel animation */
@keyframes scroll {
  from {
    translate: 0;
  }

  to {
    translate: -100%;
  }
}

.carousel-container {
  display: flex;
  width: 100%;
  overflow-x: auto;
  gap: 1em;
}

.carousel-container::-webkit-scrollbar {
  display: none;
}

.carousel-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  animation: scroll 20s infinite linear;
  padding-right: 1rem;
}

.carousel-item {
  flex: 0 0 5em;
  align-content: center;
}

/* typing animation */
.animated-text {
  /* font-size: 34px;?\ */
  font-weight: 600;
  min-width: 280px;
}

.animated-text span {
  position: relative;
}

.animated-text span::before {
  content: "Human Resources Practitioner";
  color: white;
  animation: words 8s infinite;
}

@keyframes cursor {
  to {
    border-left: 2px solid #ff7f5000;
  }
}

@keyframes words {

  0%,
  20% {
    content: "Virtual Assistant";
  }

  21%,
  40% {
    content: "Social Media Manager";
  }

  41%,
  60% {
    content: "Graphic Designer";
  }

  61%,
  80% {
    content: "Video Editor";
  }

  /* 81%,
  100% {
    content: "Gamer";
  } */
}

@keyframes typing {

  10%,
  15%,
  30%,
  35%,
  50%,
  55%,
  70%,
  75%,
  90%,
  95% {
    width: 0;
  }

  5%,
  20%,
  25%,
  40%,
  45%,
  60%,
  65%,
  80%,
  85% {
    width: calc(100% + 8px);
  }
}
</style>