import { BlogPost } from "types/blog";

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_APP_URL

export async function getBlogPosts({locale, page, limit }: {
  locale: 'id-ID' | 'en-US'
  page: number
  limit: number
}): Promise<BlogPost[]> {

  try {
    
    const response = await fetch(
      `${baseUrl}/api/blog?lang=${locale}&page=${page}&limit=${limit}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'default'
      }
    );

    if (!response.ok) {
      console.error(`API responded with status: ${response.status}`);
      const errorText = await response.text();
      console.error('Error response:', errorText);
      return [];
    }

    const data = await response.json();
    console.log('Blog posts fetched successfully:', data.data);
    return data.data || [];

  } catch (error) {
    console.error("Error fetching blog posts:", {
      message: error.message,
      stack: error.stack
    });
    return [];
  }
}

export async function getBlogPost({ locale, slug }: {
  locale: 'id-ID' | 'en-US'
  slug: string
}): Promise<BlogPost | null> {

  try {

    const response = await fetch(
      `${baseUrl}/api/blog/${slug}?lang=${locale}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'default'
      }
    );

    if (!response.ok) {
      console.error(`API responded with status: ${response.status}`);
      const errorText = await response.text();
      console.error('Error response:', errorText);
      return null;
    }

    const data = await response.json();
    console.log('Blog post fetched successfully:', data.data);
    return data.data || null;

  } catch (error) {
    console.error("Error fetching blog post:", {
      message: error.message,
      stack: error.stack
    });
    return null;
  }
}