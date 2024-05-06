export const fetchSingleBlog = async (slug: any) => {
    const options: RequestInit = {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      cache: 'no-store',
    };
  
    try {
      const res = await fetch(`${process.env.STRAPI_API_URL}/api/blogs?filters[slug][$eq]=${slug}`, options);
      const blogData = await res.json();
      return blogData;
    } catch (error) {
      console.error("Error fetching blog", error);
    }
};