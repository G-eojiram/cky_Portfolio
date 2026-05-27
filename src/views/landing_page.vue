<template>
    <div>
        <!-- Header -->
        <header class="absolute inset-x-0 top-0 z-50">
            <Navbar />
        </header>

        <main class="isolate font-serif scroll-smooth">
            <!-- Hero section -->
            <section id="profile" class="profile-container bg-stone-800">
                <div class="flex flex-col lg:flex-row items-center justify-center gap-x-10 border-b py-[8rem]">
                    <div class="drop-shadow-2xl rounded-full">
                        <img :src="selfportrait" alt="selfportrait" width="500" height="500"
                            class="hover:w-[650px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 rounded-full hover:shadow-xl hover:shadow-amber-300" />
                    </div>
                    <div class="flex flex-col gap-y-2 text-center lg:text-start pt-10 lg:pt-0">
                        <span class="text-2xl lg:text-4xl text-white font-bold">Hello, I'm</span>
                        <h1 class="text-4xl lg:text-6xl font-extrabold text-amber-400">
                            Racky Bonin Gotong
                        </h1>
                        <div class="animated-text text-2xl lg:text-3xl">
                            <span></span>
                        </div>
                        <div class="mt-2 flex flex-col md:flex-row gap-y-2 sm:gap-x-4 items-center lg:justify-start text-sm">
                            <button @click="downloadCV"
                                class="bg-amber-100  w-52 md:w-full px-5 py-3 rounded-xl font-semibold text-gray-600 border transition delay-100 hover:border-teal-800 text-base hover:bg-teal-800 hover:text-white">
                                Download CV
                            </button>
                            <button onclick="location.href = './#contact'"
                                class="bg-amber-100 w-52 md:w-full px-8 py-3 rounded-xl font-semibold text-gray-600 border transition delay-100 hover:border-teal-800 text-base hover:bg-teal-800 hover:text-white">
                                Contact Info
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about">
                <div class="bg-gray-300/30 py-10 px-5 relative isolate">
                    <svg class="absolute inset-0 -z-10 h-full w-full stroke-gray-300/50" aria-hidden="true">
                        <defs>
                            <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1"
                                patternUnits="userSpaceOnUse">
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" stroke-width="0"
                            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
                    </svg>
                    <div class="pb-20 sm:pb-24 xl:pb-0">
                        <div
                            class="animation-scroll-up-entry mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                            <div class="w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                                <div
                                    class="relative md:justify-self-center xl:justify-self-auto aspect-[2/3] md:w-[500px] xl:aspect-auto">
                                    <img class="absolute inset-0 shrink-0 rounded-2xl object-cover"
                                        :src="aboutme" alt="about-profile-pic" />
                                </div>
                            </div>
                            <div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:p-24">
                                <h2
                                    class="text-xl text-center font-bold tracking-tight text-amber-400 sm:text-4xl pb-5">
                                    About Me</h2>
                                <figure class="relative isolate pt-6">
                                    <svg viewBox="0 0 162 128" fill="none" aria-hidden="true"
                                        class="absolute left-0 top-0 -z-10 h-32 stroke-gray-300">
                                        <path id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                                            d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z" />
                                        <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86" />
                                    </svg>
                                    <blockquote
                                        class="text-sm sm:text-base font-bold grid gap-y-3 tracking-wide text-justify leading-8 text-gray-600 sm:leading-9">
                                        <p>
                                            I’m a detail-oriented and creative individual who enjoys
                                            organizing tasks, managing ideas, and helping projects stay
                                            structured and efficient. I naturally pay attention to details
                                            and like planning things carefully before starting, which helps
                                            me stay productive and organized in any work environment.
                                        </p>
                                        <p>
                                            I’m passionate about creativity, digital content, and visual
                                            storytelling. I enjoy working with image editing, video editing,
                                            graphic design, photography, and creative projects that allow me
                                            to express ideas in unique ways. I also enjoy learning new
                                            skills and exploring different creative paths whenever
                                            opportunities come up.
                                        </p>
                                        <p>
                                            As someone who tends to overthink, I use that trait positively
                                            by analyzing situations carefully, anticipating possible
                                            challenges, and making sure tasks are completed properly. I
                                            value clear communication, adaptability, and continuous
                                            improvement, making me reliable both in independent work and
                                            collaborative environments.
                                        </p>
                                    </blockquote>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Education -->
                <div class="bg-stone-800 py-24 sm:py-32">
                    <div class="mx-auto max-w-7xl animation-scroll-up-entry">
                        <h2 class="text-3xl text-center font-bold tracking-tight text-amber-400 pb-10">
                            Education History Timeline</h2>
                        <div class="sm:px-6 lg:px-8">
                            <div class=" grid grid-cols-1 gap-8 overflow-hidden  lg:grid-cols-3">
                                <div v-for="item in education" :key="item.name">
                                    <time :datetime="item.dateTime"
                                        class="flex items-center text-sm ml-5 font-semibold leading-6 text-gray-50">
                                        <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                            <circle cx="2" cy="2" r="2" fill="currentColor" />
                                        </svg>
                                        {{ item.date }}
                                        <div class="absolute -ml-3 h-px w-screen -translate-x-full bg-gray-50 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                                            aria-hidden="true" />
                                    </time>
                                    <div
                                        class=" mt-5 mx-6 p-7 text-center md:text-left rounded-2xl bg-teal-50/10 hover:scale-110 transition-all ease-in-out cursor-text">
                                        <div class="flex flex-col md:flex-row items-center xl:items-start gap-x-4">
                                            <img :src="item.logo" alt="school logo"
                                                class="h-32 w-fit md:h-10 rounded-full object-cover" />
                                            <p class="text-lg font-semibold leading-8 tracking-tight text-amber-400">{{
                                                item.name }}</p>
                                        </div>
                                        <p class="mt-1 tracking-widest text-base leading-7 text-gray-100">
                                            {{ item.level }}
                                        </p>
                                        <p class="mt-1 text-base leading-7 font-bold text-gray-300">{{ item.strand }}
                                        </p>
                                        <p class="mt-1 text-base leading-7 text-gray-100">{{ item.major }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="experience">
                <div class="py-24 sm:py-32 border-b relative isolate">
                    <svg class="absolute inset-0 -z-10 h-full w-full stroke-gray-200" aria-hidden="true">
                        <defs>
                            <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1"
                                patternUnits="userSpaceOnUse">
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" stroke-width="0"
                            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
                    </svg>
                    <div class="mx-auto justify-items-center max-w-7xl">
                        <div class="animation-scroll-up-entry">
                            <h2 class="px-10 text-4xl text-center font-bold tracking-tight text-gray-900">
                                Explore My Experience</h2>
                            <p
                                class="py-14 px-10 border-b border-gray-900/5 text-justify lg:text-center text-base sm:text-lg xl:text-xl text-gray-800 leading-6">
                                I have a strong interest in video editing, especially creating short-form content, and I
                                also enjoy graphic design and photo editing. This creative background helps me in
                                producing visually engaging and well-structured content, while also improving my
                                attention to detail and storytelling skills.</p>
                            <div class="lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:mx-10">
                                <article v-for="(post, index) in experience" :key="post.id" :class="[
                                    'border-b lg:border-0',
                                    index === 2 ? 'lg:col-span-2' : ''
                                ]">
                                    <div
                                        class="lg:bg-gray-50/40 p-10 hover:scale-110 transition-all ease-in-out cursor-text lg:rounded-2xl lg:shadow-md lg:border lg:border-amber-50 shadow-amber-200 py-10 h-full flex flex-col">
                                        <div class="flex flex-col sm:flex-row gap-y-2 items-center gap-x-4 text-base pb-6 mt-auto">
                                            <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
                                            <span class="font-bold rounded-full bg-gray-500/10 px-5 py-1.5 text-teal-600 hover:text-amber-500">
                                                {{ post.category.title }}
                                            </span>
                                        </div>
                                        <p class="text-gray-900 text-base sm:text-lg text-justify leading-relaxed">
                                            {{ post.description }}
                                        </p>
                                        <div class="grid grid-cols-1 md:grid-cols-2 justify-items-center text-center gap-x-4 mt-6">
                                            <img :src="post.author.imageUrl" alt=""
                                                class="h-20 w-fit rounded-full bg-gray-50 object-cover" />
                                            <div>
                                                <p class="font-semibold text-gray-900">{{ post.author.name }}</p>
                                                <p class="text-sm text-gray-600">{{ post.author.role }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- tools and systems carousel animation -->
            <!-- <section class="bg-gray-50 pt-32 pb-36">
                <div class="mx-auto max-w-7xl">
                    <h2 class="text-3xl leading-8 text-gray-800 font-bold text-center pb-16">Tools and Systems</h2>
                   <div class="carousel-container">
                        <div class="carousel-group">
                            <img v-for="(logo, index) in tools" :key="index"
                                class="carousel-item w-[100px] object-cover aspect-3/2" :src="logo.src" :alt="logo.alt"
                                :width="logo.width" :height="logo.height" />
                        </div>
                        <div aria-hidden class="carousel-group">
                            <img v-for="(logo, index) in tools" :key="index"
                                class="carousel-item w-[100px] object-cover aspect-3/2" :src="logo.src" :alt="logo.alt"
                                :width="logo.width" :height="logo.height" />
                        </div>
                    </div>
                </div>
            </section> -->

            <section class="bg-gray-50 pt-32 pb-36">
                <div class="mx-auto max-w-7xl rounded-xl animation-scroll-up-entry">
                    <h2 class="text-3xl leading-8 text-gray-800 font-bold text-center pb-16">Tools and Systems</h2>
                    <div
                        class="mx-auto grid max-w-lg px-10 grid-cols-2 sm:grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-8 lg:px-10">
                        <img v-for="(logo, index) in tools" :key="index" class="object-cover aspect-3/2 animate-bounce"
                            :src="logo.src" :alt="logo.alt" :width="logo.width" :height="logo.height" />
                    </div>
                </div>
            </section>

            <section id="recentworks">
                <div class="bg-white py-24 relative isolate">
                    <svg class="absolute inset-0 -z-10 h-full w-full stroke-gray-300"
                        aria-hidden="true">
                        <defs>
                            <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1"
                                patternUnits="userSpaceOnUse">
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" stroke-width="0"
                            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
                    </svg>
                    <div class="mx-auto max-w-7xl px-10 animation-scroll-up-entry">
                        <div class="mx-auto max-w-2xl text-center">
                            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Browse My Recent Works
                            </h2>
                            <p class="mt-2 text-base sm:text-lg leading-8 text-gray-600">
                                Youtube Thumbnails, Logo Designs, Clothing Line Designs</p>
                        </div>
                        <div
                            class="mx-auto mt-14 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-16 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3">
                            <article v-for="post in thumbnails" :key="post.id"
                                class="relative isolate flex flex-col hover:scale-105 transition-all ease-in-out justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                                <img :src="post.imageUrl" alt=""
                                    class="absolute inset-0 -z-10 h-fit w-fit object-cover" />
                                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                                <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                <div
                                    class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                    <time :datetime="post.datetime" class="mr-8 text-xs">{{ post.date }}</time>
                                    <div class="-ml-4 flex items-center gap-x-4">
                                        <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                            <circle cx="1" cy="1" r="1" />
                                        </svg>
                                        <div class="flex items-center gap-x-2.5 hover:cursor-pointer">
                                            <img :src="post.author.imageUrl" alt=""
                                                class="h-10 w-10 object-cover font-bold leading-6 flex-none rounded-full bg-white/10 text-xs sm:text-base" />
                                            {{ post.author.name }}
                                        </div>
                                    </div>
                                </div>
                                <h3 class="mt-3 text-xs sm:text-base md:text-lg font-semibold leading-6 text-white hover:text-amber-400">
                                    <a :href="post.href" target="_blank">
                                        <span class="absolute inset-0" />
                                        {{ post.title }}
                                    </a>
                                </h3>
                            </article>
                        </div>
                    </div>
                </div>

                <div class="bg-white pb-24 sm:pb-32 px-10 relative isolate">
                    <svg class="absolute inset-0 -z-10 h-full w-full stroke-gray-400"
                        aria-hidden="true">
                        <defs>
                            <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1"
                                patternUnits="userSpaceOnUse">
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" stroke-width="0"
                            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
                    </svg>
                    <div class="mx-auto max-w-7xl animation-scroll-up-entry">
                        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center pb-10">
                            Logo Designs</h1>
                        <div
                            class="-mx-6 grid grid-cols-1 sm:grid-cols-2 gap-0.5 sm:mx-0 sm:rounded-2xl md:grid-cols-3">
                            <div v-for="(logo, index) in logos" :key="index"
                                class="bg-gray-400/5 p-6 sm:p-10 place-content-center">
                                <img class="w-full object-cover hover:scale-125 transition-all ease-in-out cursor-not-allowed"
                                    :src="logo.src" :alt="logo.alt" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-gradient-to-t from-stone-800  pb-24 md:pb-32 lg:pb-40 relative isolate">
                    <svg class="absolute inset-0 -z-10 h-full w-full stroke-stone-900" aria-hidden="true">
                        <defs>
                            <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1"
                                patternUnits="userSpaceOnUse">
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" stroke-width="0"
                            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
                    </svg>
                    <div
                        class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-10 xl:grid-cols-3 animation-scroll-up-entry">
                        <div class="mx-auto max-w-2xl xl:mx-0 animation-scroll-up-entry">
                            <h2
                                class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center xl:text-left">
                                Clothing Line</h2>
                            <img class="aspect-3/2 w-full rounded-2xl object-cover shrink-0" :src="dkmv"
                                alt="Clothing line logo" />
                        </div>
                        <ul role="list"
                            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-5 xl:col-span-2">
                            <li v-for="person in clothings" :key="person.name">
                                <img class="aspect-3/2 w-full rounded-2xl object-cover hover:scale-125 transition-all ease-in-out cursor-not-allowed hover:shadow-2xl hover:border border-gray-200 hover:shadow-gray-400"
                                    :src="person.imageUrl" alt="clothing item" />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer id="contact" class="bg-stone-800">
            <div
                class="mx-auto max-w-7xl px-6 py-20 lg:py:32 sm:py-24 lg:px-8 animation-scroll-up-entry">
                <div class="justify-self-center text-center">
                    <span class="text-gray-100 text-2xl">Get in Touch</span>
                    <h1 class="text-3xl lg:text-5xl font-bold text-amber-500">Contact Me !</h1>
                </div>
                <div class="mt-10 flex justify-center space-x-10">
                    <a v-for="item in footerNavigation.social" :key="item.name" :href="item.href" target="_blank"
                        :title="item.info" class="text-gray-400 hover:text-white">
                        <span class="sr-only">{{ item.name }}</span>
                        <component :is="item.icon" class="h-10 w-10" aria-hidden="true" />
                    </a>
                </div>
                <p class="mt-10 text-center text-xs tracking-widest leading-5 text-gray-500">
                    &copy; 2026 RACKY BONIN GOTONG. All rights reserved.
                </p>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { defineComponent, h } from 'vue'
import Navbar from '@/components/Navigation.vue'

const selfportrait = '/images/person/MyPortrait.png'
const aboutme = '/images/person/AboutMe.png'
const dkmv = '/images/logo/DKMV.png'
const griddtlines = '/images/gridlines.png'
const cvPDF = '/files/cv_VA.pdf'   // Import the PDF

const downloadCV = () => {
    const link = document.createElement('a')
    link.href = cvPDF
    link.download = 'cv_VA.pdf'        // Name of the downloaded file
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

const footerNavigation = {
    social: [
        {
            name: 'Facebook',
            info: 'Racky',
            href: 'https://www.facebook.com/share/1TXgWn8ahM/',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
        {
            name: 'Instagram',
            info: 'crazy30ace',
            href: 'https://www.instagram.com/crazy30ace',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
        {
            name: 'Gmail',
            info: "rckygtng@gmail.com",
            href: 'https://mail.google.com/mail/?view=cm&fs=1&to=rckygtng@gmail.com',
            icon: defineComponent({
                render: () =>
                    h('svg', {
                        xmlns: 'http://www.ws3.org/2000/svg',
                        fill: 'currentColor',
                        viewBox: '0 0 24 24',
                    }, [
                        h('path', {
                            d: 'M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z'
                        }),
                        h('path', {
                            d: 'M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z'
                        }),
                    ]),
            }),
        },

    ],
}

const education = [
    {
        name: 'Don Juan Dela Cruz Central ES',
        logo: '/images/logo/djdces.png',
        level:
            'Elementary School',
        date: '2008 - 2014',
    },
    {
        name: 'Doña Carmen Denia National HS',
        logo: '/images/logo/dcdnhs.png',
        level:
            'Junior and Senior High School',
        strand: 'TVL - ICT',
        major: 'Computer Animation and Programming',
        date: '2014 - 2020',
    },
    {
        name: 'Davao Central College',
        logo: '/images/logo/dcc.png',
        level:
            'Tertiary Education',
        major: 'Human Resource Development Management',
        strand: 'Bachelor of Science in Business Administration',
        date: '2022 - 2026',
    },
]

const experience = [
    {
        id: 2,
        description:
            'I worked as an Outbound Sales Representative in a call center environment, handling both voice and non-voice accounts. My role focused on selling different types of insurance services, including auto, home, and health insurance. I communicated with potential clients, explained insurance coverage options, generated leads, and helped customers choose the best plans based on their needs.',

        date: '2019 - 2021',
        category: { title: 'Call Center Agent', href: '#' },
        author: {
            name: 'Christian Business Center',
            role: 'BPO',
            href: '#',
            imageUrl: '/images/experience/MMMJC.png',
        },
    },
    {
        id: 1,
        description:
            'I was part of a team at Web Leads, a company known for providing high-quality leads to small, medium, and large businesses. The company is recognized for its strong client support, sales training, and commitment to delivering excellent customer service. Through this experience, I developed strong communication, sales, customer service, and lead generation skills while working in a fast-paced and goal-driven environment.',

        date: '2021 - 2022',
        category: { title: 'Virtual Assistant', href: '#' },
        author: {
            name: 'Webleads',
            role: 'Lead Generation',
            imageUrl: '/images/experience/WebLeads.png',

        },
    },

    {
        id: 3,
        description:
            'Admin Staff responsible for handling customer inquiries through voice and non-voice support, managing documents and client information, assisting people, sales , and inventory.',
        date: '2022',
        category: { title: 'Admin Staff', href: '#' },
        author: {
            name: 'HBWW International',
            role: 'Food and Beverage / Beauty Products',
            href: '#',
            imageUrl: '/images/experience/hbww.png',
        },
    },

]

const thumbnails = [
    {
        id: 1,
        title: 'The MONSTER Who Changed Football — Erling Haaland Story',
        href: 'https://www.youtube.com/shorts/VhWFO_hrwx0',
        description:
            '#football #erlinghaaland #soccer',
        imageUrl: '/images/thumbnails/HAALAND.png',
        date: 'May 7, 2026',
        datetime: '2026-05-07',
        author: {
            name: '@Scelebritytalk',
            imageUrl: '/images/logo/1.png',
        },
    },
    {
        id: 2,
        title: 'Why Everyone Is Talking About Cooper Flagg',
        href: 'https://www.youtube.com/shorts/DA8-Pkgx50Y',
        description:
            '#successstory #cooperflagg #nba',
        imageUrl: '/images/thumbnails/NBAFLAGG.png',
        date: 'May 12, 2026',
        datetime: '2026-05-12',
        author: {
            name: '@Scelebritytalk',
            imageUrl: '/images/logo/1.png',
        },
    },
    {
        id: 3,
        title: 'The Rise of Victor Wembanyama │ Future GOAT?',
        href: 'https://www.youtube.com/shorts/342mzGnbtio',
        description:
            '#successstory #victorwembanyama #nba #goat',
        imageUrl: '/images/thumbnails/NBAGOAT.png',
        date: 'May 9, 2026',
        datetime: '2026-05-09',
        author: {
            name: '@Scelebritytalk',
            imageUrl: '/images/logo/1.png',
        },
    },
    {
        id: 4,
        title: 'Nobody Can Guard Luka Dončić',
        href: 'https://www.youtube.com/shorts/JRrFGd2o3qs',
        description:
            '#lucadoncic #successstory #nba',
        imageUrl: '/images/thumbnails/NBALUKA.png',
        date: 'May 9, 2026',
        datetime: '2026-05-09',
        author: {
            name: '@Scelebritytalk',
            imageUrl: '/images/logo/1.png',
        },
    },
    {
        id: 5,
        title: 'From Poverty to Legend Pelé’s Untold Story',
        href: 'https://www.youtube.com/shorts/ijNzLOMZ8HY',
        description:
            '#pele #football #soccer #worldcup',
        imageUrl: '/images/thumbnails/PELE.png',
        date: 'May 5, 2026',
        datetime: '2026-05-05',
        author: {
            name: '@Scelebritytalk',
            imageUrl: '/images/logo/1.png',
        },
    },
    {
        id: 6,
        title: 'Kylian Mbappé: From Wonder Kid to World Cup Star',
        href: 'https://www.youtube.com/shorts/FQZQnsxKGck',
        description:
            '#kylianmbappe #football #successstory',
        imageUrl: '/images/thumbnails/QATAR.png',
        date: 'May 6, 2026',
        datetime: '2026-05-06',
        author: {
            name: '@Scelebritytalk',
            imageUrl: '/images/logo/1.png',
        },
    },
]

const logos = [
    {
        src: '/images/logo/1.png',
        alt: "Scelebritytalk LOGO",
    },
    {
        src: '/images/logo/2.png',
        alt: "LOGO 2",
    },
    {
        src: '/images/logo/3.png',
        alt: "LOGO 3",
    },
    {
        src: '/images/logo/4.png',
        alt: "LOGO 4",
    },
    {
        src: '/images/logo/5.png',
        alt: "LOGO 5",
    },
    {
        src: '/images/logo/DKMV.png',
        alt: "Clothing Line LOGO",
    },
]

const clothings = [
    {
        id: 1,
        imageUrl: '/images/clothing/3whiteV.png',
    },
    {
        id: 2,
        imageUrl: '/images/clothing/3blackV.png',
    },
    {
        id: 3,
        imageUrl: '/images/clothing/2front.png',
    },
    {
        id: 4,
        imageUrl: '/images/clothing/2back.png',
    }, {
        id: 5,
        imageUrl: '/images/clothing/4front.png',
    },
    {
        id: 6,
        imageUrl: '/images/clothing/4back.png',
    },
    {
        id: 7,
        imageUrl: '/images/clothing/1front.png',
    },
    {
        id: 8,
        imageUrl: '/images/clothing/1back.png',
    },
    // More clothings...
]

const tools = [
    {
        src: '/images/tools_system/Canva.png',
        alt: "Canva",
    },
    {
        src: '/images/tools_system/capcut.png',
        alt: "CapCut",
    },
    {
        src: '/images/tools_system/photoshop.png',
        alt: "Photoshop",
    },
    {
        src: '/images/tools_system/gemini-color.png',
        alt: "Gemini",
    },
    {
        src: '/images/tools_system/grok.png',
        alt: "Grok",
    },
    {
        src: '/images/tools_system/Chatgpt.png',
        alt: "ChatGPT",
    },
    {
        src: '/images/tools_system/linkedin.png',
        alt: "LinkedIn",
    },
    {
        src: '/images/tools_system/Dropbox.png',
        alt: "Dropbox",
    },
    {
        src: '/images/tools_system/gmail.png',
        alt: "Gmail",
    },
    {
        src: '/images/tools_system/docs.png',
        alt: "Google Docs",
    },
    {
        src: '/images/tools_system/google-calendar.png',
        alt: "Google Calendar",
    },
    {
        src: '/images/tools_system/google-meet.png',
        alt: "Google Meet",
    },
    {
        src: '/images/tools_system/word.png',
        alt: "Microsoft Word",
    },
    {
        src: '/images/tools_system/excel.png',
        alt: "Microsoft Excel",
    },
    {
        src: '/images/tools_system/powerpoint.png',
        alt: "PowerPoint",
    },
    {
        src: '/images/tools_system/publisher.png',
        alt: "Publisher",
    },
]

// const mobileMenuOpen = ref(false)
</script>