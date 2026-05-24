<template>
    <div>
        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">

            <div class="flex lg:hidden">
                <button type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-white"
                    @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12 lg:flex-1 lg:justify-center">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                    class="text-sm font-semibold font-serif leading-6 text-white">{{ item.name }}</a>
            </div>

        </nav>
        <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-50" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-amber-400 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Racky</span>
                        <img class="h-8 w-auto" :src="selfportrait" alt="" />
                    </a>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-white"
                        @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <a v-for="item in navigation" :key="item.name" :href="item.href"
                                class="-mx-3 block font-serif rounded-lg px-7 py-2 text-base font-semibold leading-7 text-white hover:bg-amber-500 transition-colors duration-200 ">{{
                                    item.name }}</a>
                        </div>

                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </div>
    <!-- <div>dsadsajdhskjahdksaj</div> -->
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
const selfportrait = '/images/person/MyPortrait.png'

const navigation = [
    { name: 'About Me', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'My Works', href: '#recentworks' },
    { name: 'Contact', href: '#contact' },
]


const mobileMenuOpen = ref(false)
</script>