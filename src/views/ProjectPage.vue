<script setup lang="ts">
import { onMounted, Ref } from "@vue/runtime-core";
import { ref } from "vue";
import { useRoute } from "vue-router";
import API from "../api";
import Server from "../util/Server";
const route = useRoute();

const api = API.getInstance();

type ProjectDocument = {
    created_at: string,
    updated_at: string,
    name: string,
    short_description: string,
    slug: string,
    content: string,
}

const project: Ref<ProjectDocument|null> = ref(null);

onMounted(async () => {
    const dbDocuments = await api.database.listDocuments(Server.projectsCollectionId);
    const documents: ProjectDocument[] = <any> dbDocuments.documents;
    project.value = documents.filter(document => document.slug === route.params.slug)[0];
});
</script>

<template>
    <div v-if="project" class="grid grid-cols-6 gap-3">
        <div class="bg-white shadow-md rounded-lg p-3 col-span-full">
            <h1 class="text-2xl">Project: {{ project.name }}</h1>
            <p class="text-gray-400">{{ project.short_description }}</p>
        </div>
        <div v-html="project.content" class="bg-white shadow-md rounded-lg p-3 col-span-full"></div>
    </div>
</template>