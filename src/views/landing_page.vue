<template>
    <div class="bg-white">
        <!-- Header -->
        <header class="absolute inset-x-0 top-0 z-50">
            <Navbar />
        </header>

        <main class="isolate font-serif">
            <!-- Hero section -->
            <section id="profile" class="profile-container bg-amber-400">
                <div class="flex flex-col lg:flex-row items-center justify-center gap-x-10 border-b py-[8rem]">
                    <div class="drop-shadow-2xl rounded-full">
                        <img :src="selfportrait" alt="selfportrait" width="500" height="500"
                            class="hover:w-[650px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 rounded-full hover:shadow-xl hover:shadow-amber-300" />
                    </div>
                    <div class="flex flex-col gap-y-2 text-center lg:text-start pt-10 lg:pt-0">
                        <span class="text-xl lg:text-2xl text-white font-bold">Hello, I'm</span>
                        <h1 class="text-5xl lg:text-6xl font-extrabold">
                            Racky Bonin Gotong
                        </h1>
                        <div class="animated-text">
                            <span></span>
                        </div>
                        <div class="mt-2 flex gap-x-4 justify-center lg:justify-start text-sm">
                            <button onclick="window.open('./assets/resume-marijoe.pdf')"
                                class="bg-amber-100 px-5 py-3 rounded-xl font-semibold text-gray-600 border transition delay-100 hover:border-teal-800 text-sm hover:bg-teal-800 hover:text-white">
                                Download CV
                            </button>
                            <button onclick="location.href = './#contact'"
                                class="bg-amber-100 px-8 py-3 rounded-xl font-semibold text-gray-600 border transition delay-100 hover:border-teal-800 text-sm hover:bg-teal-800 hover:text-white">
                                Contact Info
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about">
                <div class="bg-gray-300/30 py-10">
                    <div class="pb-20 sm:pb-24 xl:pb-0">
                        <div
                            class="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                            <div class="-mt-32 xl:mt-16 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                                <div
                                    class="relative md:justify-self-center xl:justify-self-auto aspect-[2/3] md:w-[500px] xl:aspect-auto">
                                    <img class="absolute inset-0 shrink-0 aspect-3/2 rounded-2xl object-cover"
                                        :src="aboutme" alt="about-profile-pic" />
                                </div>
                            </div>
                            <div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:p-24">
                                <h2
                                    class="text-3xl text-center font-bold tracking-tight text-gray-400 sm:text-4xl pb-5">
                                    About Me</h2>
                                <figure class="relative isolate pt-6 sm:pt-12">
                                    <svg viewBox="0 0 162 128" fill="none" aria-hidden="true"
                                        class="absolute left-0 top-0 -z-10 h-32 stroke-gray-300">
                                        <path id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                                            d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z" />
                                        <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86" />
                                    </svg>
                                    <blockquote
                                        class="text-base font-bold grid gap-y-3 tracking-wide text-justify leading-8 text-gray-600 sm:leading-9">
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
                                    <!-- <figcaption class="mt-8 text-base">
                                        <div class="font-semibold text-amber-400">Racky Bonin Laruga Gotong</div>
                                        <div class="mt-1 text-gray-400">CEO of Workcation</div>
                                    </figcaption> -->
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="overflow-hidden p-10 bg-white flex justify-center border-b">
                    <div class="p-10 mx-auto px-6 lg:px-8 justify-items-center max-w-7xl">
                        <h2
                            class="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl pb-16 lg:pb-10">
                            About Me</h2>
                        <div class="flex flex-col lg:flex-row gap-y-5 items-center ">
                            <div class="flex justify-center">
                                <img :src="aboutme" alt="about-profile-pic"
                                    class="md:w-[500px] aspect-3/2 shrink-0 object-scale-down" />
                            </div>
                            <div
                                class="p-10 md:p-20 grid bg-amber-50/20 border gap-y-5 border-gray-300 shadow-md h-fit rounded-3xl text-base hover:lg:text-xl lg:text-lg leading-6 transition-all delay-100 text-justify hover:p-16 hover:bg-white hover:shadow-md hover:border-amber-100 hover:shadow-amber-200">
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
                            </div>
                        </div>
                    </div>
                </div> -->
                <!-- Education -->
                <div class="bg-teal-800 py-24 sm:py-32">
                    <h2 class="text-3xl text-center font-bold tracking-tight text-amber-400 sm:text-2xl pb-10">Education
                        History Timeline</h2>
                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden xl:mx-0 xl:max-w-none xl:grid-cols-3">
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
                                <div class="mt-5 mx-6 p-7 rounded-2xl bg-gray-50/10">
                                    <p class="text-lg font-semibold leading-8 tracking-tight text-amber-400">{{
                                        item.name }}</p>
                                    <p class="mt-1 tracking-widest text-base leading-7 text-gray-100">{{ item.level }}
                                    </p>
                                    <p class="mt-1 text-base leading-7 font-bold text-gray-300">{{ item.strand }}</p>
                                    <p class="mt-1 text-base leading-7 text-gray-100">{{ item.major }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="experience">
                <div class="py-24 sm:py-32 bg-white border-b">
                    <div class="mx-auto justify-items-center max-w-7xl">
                        <div>
                            <h2 class="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Explore
                                My Experience</h2>
                            <p
                                class=" p-14 border-b border-gray-900/5 text-justify lg:text-center text-lg xl:text-xl text-gray-700 leading-6">
                                I have a strong interest in video editing, especially creating short-form content, and I
                                also enjoy graphic design and photo editing. This creative background helps me in
                                producing visually engaging and well-structured content, while also improving my
                                attention to detail and storytelling skills.</p>
                            <div class="lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 mx-10">

                                <!-- Card 1 -->
                                <article v-for="(post, index) in experience" :key="post.id" :class="[
                                    'border-b lg:border-0',
                                    index === 2 ? 'lg:col-span-2' : ''
                                ]">

                                    <div
                                        class="lg:bg-gray-50/40 lg:rounded-2xl lg:shadow-md lg:border lg:border-amber-50 shadow-amber-200 p-10 h-full flex flex-col">
                                        <div class="flex items-center gap-x-4 mb-6">
                                            <img :src="post.author.imageUrl" alt=""
                                                class="h-10 w-fit rounded-full bg-gray-50 object-cover" />

                                            <div>
                                                <p class="font-semibold text-gray-900">{{ post.author.name }}</p>
                                                <p class="text-sm text-gray-600">{{ post.author.role }}</p>
                                            </div>
                                        </div>

                                        <h3 class="text-xl font-semibold text-gray-900 mb-3">
                                            {{ post.title || post.category.title }}
                                        </h3>

                                        <p class="text-gray-900 text-justify leading-relaxed flex-1">
                                            {{ post.description }}
                                        </p>

                                        <div class="flex items-center gap-x-4 text-xs pt-6 mt-auto">
                                            <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
                                            <span class="font-bold rounded-full bg-amber-50 px-5 py-1.5 text-amber-500">
                                                {{ post.category.title }}
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <!-- <div class="mt-16 justify-items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
                                <article v-for="post in experience" :key="post.id" class="border-b lg:border-0">
                                    <div>
                                        <div class="flex">
                                            <div class="relative flex items-center gap-x-4">
                                                <img :src="post.author.imageUrl" alt=""
                                                    class="h-10 w-fit rounded-full bg-gray-50" />
                                                <div class="text-sm leading-6">
                                                    <p class="font-semibold text-gray-900">
                                                        <a :href="post.author.href">
                                                            <span class="absolute inset-0" />
                                                            {{ post.author.name }}
                                                        </a>
                                                    </p>
                                                    <p class="text-gray-600">{{ post.author.role }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="group relative ">
                                            <h3
                                                class="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                                <a :href="post.href">
                                                    <span class="absolute inset-0" />
                                                    {{ post.title }}
                                                </a>
                                            </h3>
                                            <p class="text-lg text-justify leading-6 text-black">{{ post.description
                                                }}</p>
                                        </div>

                                        <div
                                            class="flex items-center gap-x-4 text-xs pt-5 pb-10">
                                            <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
                                            <h1
                                                class="relative z-10 font-bold leading-6 rounded-full bg-amber-50 px-5 py-1.5 text-gray-600 hover:bg-amber-400 hover:text-white">
                                                {{
                                                    post.category.title }}</h1>
                                        </div>
                                    </div>
                                </article>
                            </div> -->
                        </div>
                    </div>
                </div>
            </section>

            <!-- tools and systems -->
            <section class="bg-gray-50 pt-32 pb-36">
                <div class="mx-auto max-w-7xl rounded-xl">
                    <h2 class="text-3xl leading-8 text-gray-800 font-bold text-center pb-16">Tools and Systems</h2>
                    <div
                        class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-8 lg:px-10">
                        <img v-for="(logo, index) in tools" :key="index" class="object-cover aspect-3/2" :src="logo.src"
                            :alt="logo.alt" :width="logo.width" :height="logo.height" />
                    </div>
                </div>
            </section>

            <section id="recentworks">
                <div class="bg-white py-24 sm:py-32">
                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                        <div class="mx-auto max-w-2xl text-center">
                            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Browse My Recent
                                Designs
                            </h2>
                            <p class="mt-2 text-lg leading-8 text-gray-600">Youtube Thumbnails</p>
                        </div>
                        <div
                            class="mx-auto px-10 mt-14 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <article v-for="post in thumbnails" :key="post.id"
                                class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                                <img :src="post.imageUrl" alt=""
                                    class="absolute inset-0 -z-10 h-fit w-fit object-cover" />
                                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                                <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                                <div
                                    class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                    <time :datetime="post.datetime" class="mr-8">{{ post.date }}</time>
                                    <div class="-ml-4 flex items-center gap-x-4">
                                        <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                            <circle cx="1" cy="1" r="1" />
                                        </svg>
                                        <div class="flex items-center gap-x-2.5 hover:cursor-pointer">
                                            <img :src="post.author.imageUrl" alt=""
                                                class="h-10 w-10 object-cover font-bold leading-6 flex-none rounded-full bg-white/10 text-base" />
                                            {{ post.author.name }}
                                        </div>
                                    </div>
                                </div>
                                <h3 class="mt-3 text-lg font-semibold leading-6 text-white hover:text-amber-400">
                                    <a :href="post.href" target="_blank">
                                        <span class="absolute inset-0" />
                                        {{ post.title }}
                                    </a>
                                </h3>
                            </article>
                        </div>
                    </div>
                </div>

                <div class="bg-white pb-24 sm:pb-32 px-10">
                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                        <h1 class="mt-2 mb-16 text-lg text-center leading-8 text-gray-600">Logo Designs</h1>
                        <div
                            class="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
                            <div v-for="(logo, index) in logos" :key="index"
                                class="bg-gray-400/5 p-6 sm:p-10 place-content-center">
                                <img class="w-full object-cover" :src="logo.src" :alt="logo.alt" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white pb-24 md:pb-32 lg:pb-40">
                    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                        <div class="mx-auto max-w-2xl xl:mx-0">
                            <h2 class="text-lg leading-8 text-gray-600 text-center xl:text-left">Clothing Line</h2>
                            <img class="aspect-3/2 w-full rounded-2xl object-cover shrink-0" :src="dkmv"
                                alt="Clothing line logo" />
                        </div>
                        <ul role="list"
                            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-5 xl:col-span-2">
                            <li v-for="person in clothings" :key="person.name">
                                <img class="aspect-3/2 w-full rounded-2xl object-cover" :src="person.imageUrl"
                                    alt="clothing item" />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- tools and systems
            <section class="bg-amber-50/20 py-24 border-y">
                <div class="mx-auto max-w-7xl px-6 lg:px-8 pb-10">
                    <h2 class="text-lg leading-8 text-gray-700 text-center pb-14">Tools and Systems</h2>
                    <div
                        class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-8">
                        <img v-for="(logo, index) in tools" :key="index" class="object-cover aspect-3/2" :src="logo.src"
                            :alt="logo.alt" :width="logo.width" :height="logo.height" />
                    </div>
                </div>
            </section> -->

            <section id="contact" class="contact-container">
                <div class="mx-auto max-w-7xl p-24 pb-32">
                    <div class="bg-teal-700/10 rounded-3xl p-24">
                        <div class="justify-self-center text-center">
                            <span class="text-gray-500 text-xl">Get in Touch</span>
                            <h1 class="text-5xl font-bold text-teal-700">Contact Me !</h1>
                        </div>

                        <div
                            class="flex justify-self-center my-[2rem] border border-teal-700 rounded-2xl w-fit px-10 py-4 text-teal-700  hover:text-white hover:bg-teal-500 hover:border-teal-400 hover:cursor-pointer hover:font-bold transition-all duration-200">
                            <a href="mailto:rckygtng@gmail.com" class="flex gap-x-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                                    viewBox="0 0 48 48">
                                    <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z">
                                    </path>
                                    <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z">
                                    </path>
                                    <polygon fill="#e53935"
                                        points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17">
                                    </polygon>
                                    <path fill="#c62828"
                                        d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z">
                                    </path>
                                    <path fill="#fbc02d"
                                        d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z">
                                    </path>
                                </svg>
                                <span class="underline leading-6"> rckygtng@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer class="pb-28 bg-amber-400">
            <div class="flex justify-center">
                <button class="border bg-white rounded-3xl p-4 animate-bounce hover:shadow-4xl hover:shadow-teal-500">
                    <a href="#">
                        <img width="30" height="30"
                            src="https://img.icons8.com/external-others-inmotus-design/30/external-Up-basic-web-ui-elements-others-inmotus-design.png"
                            alt="external-Up-basic-web-ui-elements-others-inmotus-design" />
                    </a>
                </button>
            </div>
            <nav class="flex justify-center my-[2rem]">
                <div>
                    <ul class="flex font-serif text-white gap-x-8 text-base md:text-lg">
                        <li><a class="hover:text-gray-800" href="#about">About Me</a></li>
                        <li><a class="hover:text-gray-800" href="#experience">Experience</a></li>
                        <li><a class="hover:text-gray-800" href="#recentworks">Recent Works</a></li>
                    </ul>
                </div>
            </nav>
            <p class="text-center font-mono text-amber-600 text-xs sm:text-sm">
                &#169; 2021 GEOJIRAM. All Rights Reserved.
            </p>
        </footer>

    </div>
</template>

<script setup>
import Navbar from '@/components/Navigation.vue'

const selfportrait = '/images/person/MyPortrait.png'
const aboutme = '/images/person/AboutMe.png'
const dkmv = '/images/logo/DKMV.png'

const education = [
    {
        name: 'Don Juan Dela Cruz Central ES',
        level:
            'Elementary School',
        date: '2008 - 2014',
    },
    {
        name: 'Doña Carmen Denia National HS',
        level:
            'Junior and Senior High School',
        strand: 'TVL - Information and Communication Technology',
        major: 'Computer Animation and Programming',
        date: '2014 - 2020',
    },
    {
        name: 'Davao Central College',
        level:
            'Tertiary Education',
        major: 'Human Resource Development Management',
        strand: 'Bachelor of Science in Business Administration',
        date: '2022 - 2026',
    },
]

const experience = [
    {
        id: 1,
        description:
            'I was part of a team at Web Leads, a company known for providing high-quality leads to small, medium, and large businesses. The company is recognized for its strong client support, sales training, and commitment to delivering excellent customer service. Through this experience, I developed strong communication, sales, customer service, and lead generation skills while working in a fast-paced and goal-driven environment.',

        date: '2014 - 2017',
        category: { title: 'Virtual Assistant', href: '#' },
        author: {
            name: 'Webleads',
            role: 'Lead Generation',
            imageUrl: '/images/experience/WebLeads.png',

        },
    },
    {
        id: 2,
        description:
            'I worked as an Outbound Sales Representative in a call center environment, handling both voice and non-voice accounts. My role focused on selling different types of insurance services, including auto, home, and health insurance. I communicated with potential clients, explained insurance coverage options, generated leads, and helped customers choose the best plans based on their needs.',

        date: '2020 - 2021',
        category: { title: 'Call Center Agent', href: '#' },
        author: {
            name: 'Christian Business Center',
            role: 'BPO',
            href: '#',
            imageUrl: '/images/experience/MMMJC.png',
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