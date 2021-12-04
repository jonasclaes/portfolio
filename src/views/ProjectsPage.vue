<script setup lang="ts">
import { onMounted, Ref } from "@vue/runtime-core";
import { ref } from "vue";
import API from "../api";
import Server from "../util/Server";

const api = API.getInstance();

type ProjectDocument = {
    created_at: string,
    updated_at: string,
    name: string,
    short_description: string,
    slug: string,
    content: string,
}

const projects: Ref<ProjectDocument[]> = ref([]);

onMounted(async () => {
    const documents = await api.database.listDocuments(Server.projectsCollectionId);
    documents.documents.forEach((document) => {
        projects.value.push(<any> document);
    });
});
</script>

<template>
    <div class="grid grid-cols-6 gap-3">
        <div class="bg-white shadow-md rounded-lg p-3 col-span-full">
            <h1 class="text-2xl">Projects</h1>
        </div>
        <router-link :to="'/projects/' + project.slug" v-for="project in projects" :key="project.slug" class="bg-white shadow-md rounded-lg p-3 col-span-full">
            <h2 class="text-xl">{{ project.name }}</h2>
            <p class="text-gray-400">{{ project.short_description }}</p>
        </router-link>
    </div>
</template>