<script setup lang="ts">
import { onMounted, Ref } from "@vue/runtime-core";
import { Appwrite } from "appwrite";
import { ref } from "vue";
const api = new Appwrite();
api
    .setEndpoint("https://appwrite.jonasclaes.be/v1")
    .setProject("61ab3f7d9d4d8");

const projectCollection = "61ab6582e11c8";

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
    const documents = await api.database.listDocuments(projectCollection);
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
        <div v-for="project in projects" :key="project.slug" class="bg-white shadow-md rounded-lg p-3 col-span-full">
            <h1 class="text-xl">{{ project.name }}</h1>
        </div>
    </div>
</template>