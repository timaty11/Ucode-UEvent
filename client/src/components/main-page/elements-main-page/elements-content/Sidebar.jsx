import React from 'react';
import SearchInput from './elements-sidebar/SearchInput.jsx';
import FilterButton from './elements-sidebar/FilterButton.jsx';
// import '../css/Sidebar.css';
import { useCategories } from '../../../../../hooks/useCategories.js';
import Categories from './elements-sidebar/filter-items/Categories.jsx';
import Cities from './elements-sidebar/filter-items/Cities.jsx';
import apiClientRoutes from '../../../../routes/api/apiClientRoutes.js';
import $api from '../../../../../utils/api.js';
import { useCities } from '../../../../../hooks/useCities.js';

const Sidebar = ({ setData, setLoading }) => {
  const { isLoading, categories } = useCategories();
  const response = useCities();
  const [active, setActive] = React.useState(false);
  const [hidden, setHidden] = React.useState('hidden');
  const [filter, setFilter] = React.useState({
    categories: {},
    cities: {},
  });

  const handelForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setActive(false);
    try {
    const url = new URL(apiClientRoutes.getAllEvent());
    let i = 1;
    for (const index1 in filter) {
      const items = filter[index1];
      for (const itemIndex in items)
        if (items[itemIndex]) {
          url.searchParams.set(
            (index1 !== 'cities' ? 'category' : 'city') + i,
            itemIndex
          );
          i += 1;
        }
    }
      const response = await $api.get(url.toString());
      setData(response);
    } catch (err) {
      console.error(err);
    } finally {
      // setTimeout(() => {
        setLoading(false);
      // }, 1000);
    }
  };

  React.useEffect(() => {
    if (active) {
      setHidden('');
    } else {
      setTimeout(() => {
        setHidden('hidden');
      }, 100);
    }
  }, [active]);

  return isLoading ? (
    <></>
  ) : (
    <div className="container m-auto flex flex-col relative">
      <div className="flex justify-between w-full py-7">
        <FilterButton setActive={setActive} active={active} />
        <SearchInput />
      </div>
      <div
        className={`p-5 w-full h-[27em] bg-white shadow absolute opacity-0 z-10 top-20  dark:bg-gray-800 dark:text-gray-200 ${hidden} ${
          active ? 'animate-active' : 'animate-inactive'
        }`}
      >
        <p className="text-2xl">Filters:</p>
        <form
          onSubmit={handelForm}
          className="flex h-[92%] flex-col justify-between items-end"
        >
          <div className="flex w-full ">
            <div className="flex ml-10 w-full">
              <Categories
                categories={categories.data.values}
                filter={filter}
                setFilter={setFilter}
              />
              {response.isLoading ? (
                <></>
              ) : (
                <Cities
                  cities={response.cities.data.values}
                  filter={filter}
                  setFilter={setFilter}
                />
              )}
            </div>
          </div>
          <button className="py-2 px-3 rounded-lg text-sm font-medium text-gray-200 dark:text-gray-300 bg-blue-600 dark:bg-dark-bg-800">
            Perform filtering
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
