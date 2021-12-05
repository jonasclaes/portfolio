<script setup lang="ts">
    import moment from 'moment';

    const age = moment().diff(moment([2001, 6, 21]), 'years');
</script>

<template>
    <div class="grid grid-cols-6 gap-3">
        <div class="bg-white shadow-md rounded-lg p-3 col-span-full">
            <h1 class="text-4xl md:text-5xl">Welcome to my portfolio</h1>
            <p class="text-xl text-gray-500">Learn more about me, my experience and my projects here.</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-3 col-span-full">
            <h1 class="text-xl">About me</h1>
            <p>
                I'm Jonas Claes, a {{ age }} year old programmer and I'm currently studying for a Bachelors degree in Applied Computer Sciences at the Thomas More in Geel, Belgium.
            </p>
            <p>
                I really like programming and IT in general, and I would call myself a tech enthusiast/geek.
                You can always find me doing something, most of the time on open source projects!
            </p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-3 col-span-full">
            <h1 class="text-xl">Experience</h1>
            <p>
                I've smartified my whole home, and contributed on numerous projects!
                I've also worked with numerous OT devices like Siemens PLCs and industrial controllers and networks.
            </p>
            <p>
                I grew up with the Siemens S7-300 series, all the way up to the new S7-1200 and S7-1500 series.
                Not only did I program these controllers, I even wrote software to communicate with them over OPC-UA from a server.
            </p>
            <p>
                Everything from web to hardware is right up my alley.
            </p>
            <p>
                Want to see some projects that I made? Check out <router-link to="/projects" class="text-blue-500">this</router-link> page.
            </p>
        </div>
    </div>
</template>