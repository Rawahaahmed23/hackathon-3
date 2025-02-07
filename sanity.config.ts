import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schema from "@/sanity/schemas";
import { visionTool } from '@sanity/vision'


const config = defineConfig ({
    projectId: 'z3bmnk0j',
    dataset: 'production',
    title: "Marketplace Hackathon",
    apiVersion: '2025-02-06',
    basePath: '/admin',
    plugins: [deskTool(), visionTool()],
    schema: { types: schema, }
})

export default config;