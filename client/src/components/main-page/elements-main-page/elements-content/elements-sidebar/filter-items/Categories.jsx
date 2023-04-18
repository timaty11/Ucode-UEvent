import React, { useEffect } from 'react';

const Categories = ({ categories, filter, setFilter }) => {
  useEffect(() => {
    categories.forEach(({ title }) => {
      setFilter((prev) => ({
        categories: { ...prev.categories, [title]: false },
        cities: { ...prev.cities },
      }));
    });
  }, []);

  return (
    <div className="mt-5 w-1/2 flex items-start">
      <p className="text-lg mr-5">Categories: </p>
      <div className="flex flex-col pt-1">
        {categories.map((category, i) => (
          <div key={i} className="flex items-center mb-4">
            <input
              id={category.title}
              type="checkbox"
              checked={filter.categories[category.title] || false}
              onChange={() =>
                setFilter((prev) => ({
                  categories: {
                    ...prev.categories,
                    [category.title]: !filter.categories[category.title],
                  },
                  cities: { ...prev.cities },
                }))
              }
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor={category.title}
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {category.title} ({category.countEvent})
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
