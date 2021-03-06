import axios from "axios";

export const fetchRepos = async pageNumber => {
  const lastMonth = new Date(new Date().setMonth(new Date().getMonth() - 1))
    .toISOString()
    .split("T")[0];
  try {
    let {data: {items}} = await axios({
      method: "GET",
      url: "https://api.github.com/search/repositories",
      params: {
        q: `created:>${lastMonth}`,
        sort: "stars",
        order: "desc",
        page: pageNumber
      }
    });
    return items;
  } catch (error) {
    console.log(error);
  }
};
