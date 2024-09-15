type Blog = {
  id: string;
  blogTitle: string;
  blogDescription: string;
  blogDate: string;
  slug: string;
  blogContent: {
    markdown: string;
  };
  categories: Categories[];
};

type Categories = {
  name: string;
};
