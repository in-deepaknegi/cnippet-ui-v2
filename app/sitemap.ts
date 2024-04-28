import { MetadataRoute } from "next";
import components from "@/data/components";
import templates from "@/data/templates";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const BASE_URL = process.env.NEXT_PUBLIC_URL
        ? `https://${process.env.NEXT_PUBLIC_URL}`
        : 'http://localhost:3000';

    const urls = [
        `${BASE_URL}/components`,
        `${BASE_URL}/templates`,
        `${BASE_URL}/layouts`,
        `${BASE_URL}/contacts`,
        `${BASE_URL}/about`,
    ]

    const allUrls: MetadataRoute.Sitemap = urls.map((url) => ({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    const entries_c: MetadataRoute.Sitemap = components.map(({ slug }) => ({
        url: `${BASE_URL}/components/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    const entries_t: MetadataRoute.Sitemap = templates.map(({ slug }) => ({
        url: `${BASE_URL}/templates/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    return [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...allUrls,
        ...entries_c,
        ...entries_t
    ]
}