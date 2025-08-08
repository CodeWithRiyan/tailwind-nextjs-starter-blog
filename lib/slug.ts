export const setSlug = (text: string): string => 
    text.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')