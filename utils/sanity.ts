import { ClientConfig, createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: "2021-10-21",
    useCdn: process.env.NODE_ENV === "production",
};

// initialize Sanity client
export const sanityClient = createClient(config);
export const createSanityClient = (_config: ClientConfig) =>
    createClient(_config);

// generate image url
export const urlFor = (source: string | object) =>
    createImageUrlBuilder(config).image(source);
