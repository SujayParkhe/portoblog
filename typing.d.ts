type Blog = {
  id: string;
  blogTitle: string;
  blogDescription: string;
  blogDate: string;
  slug: string;
  blogContent: {
    markdown: string;
  };
  tags: Tags[];
};

type Tags = {
  name: string;
};
