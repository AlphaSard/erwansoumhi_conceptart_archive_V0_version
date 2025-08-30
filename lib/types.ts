export type Cover = { url: string; width?: number; height?: number; alt?: string };
export type Project = { title: string; slug: string; cover?: Cover | null; tags: string[] };

