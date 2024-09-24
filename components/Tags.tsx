interface TagsProps {
  tags: Tags[];
}

const Tags = ({ tags }: TagsProps) => {
  return (
    <div className="flex flex-wrap mt-4">
      {tags.map((tag) => (
        <span
          key={tag.name}
          className="bg-mandarin text-azure rounded-full px-3 py-1 text-sm mr-2 mb-2"
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
};

export default Tags;
