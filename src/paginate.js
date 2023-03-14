const paginate = (items) => {
  //const { page } = useGlobalContext();
  const itemsPerPage = 10;
  const pageNumber = Math.ceil(items.length / itemsPerPage);

  const newArray = Array.from({ length: pageNumber }, (_, index) => {
    let start = index * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  });

  return newArray;
};
export default paginate;
