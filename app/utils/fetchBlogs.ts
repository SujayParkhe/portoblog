export const fetchBlogs = async () => {
  const options: RequestInit = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    cache: 'no-store', 
  };

  try {
    const res = await fetch(`${process.env.STRAPI_API_URL}/api/blogs`, options);
    const blogData = await res.json();
    return blogData;
  } catch (error) {
    console.error("Error fetching blogs", error);
  }
};
