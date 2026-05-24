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

.animated-text {
  font-size: 34px;
  font-weight: 600;
  min-width: 280px;
}

.animated-text span {
  position: relative;
}

.animated-text span::before {
  content: "Gamer";
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
    content: "Video Editor";
  }

  41%,
  60% {
    content: "Graphic Designer";
  }

  61%,
  80% {
    content: "Human Resources Practitioner";
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