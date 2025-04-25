const TagBadge = ({ tag }) => {
  // Add more specific colors based on tag text if needed
  let colorClasses = "bg-blue-100 text-blue-800";
  if (tag.toLowerCase().includes("hot")) {
    colorClasses = "bg-red-100 text-red-800";
  } else if (tag.toLowerCase().includes("feat")) {
    colorClasses = "bg-green-100 text-green-800";
  }

  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-xs font-medium mr-1 mb-1 ${colorClasses}`}
    >
      {tag}
    </span>
  );
};

export default TagBadge;
