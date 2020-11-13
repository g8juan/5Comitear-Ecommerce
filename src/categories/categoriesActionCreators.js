import axios from "axios";

export function actionCategories(categories) {
  return { type: "GET_CATEGORIES", categories: categories };
}

export function actionSelectCategory(categorySelected) {
  return { type: "SELECT_CATEGORY", categorySelected: categorySelected };
}

export const getCategories = () => (dispatch) => {
  axios
    .get("/api/categories")
    .then((res) => res.data)
    .then((categories) => dispatch(actionCategories(categories)))
    .catch((err) => console.log(err));
};

export const getSingleCategory = (id) => (dispatch) => {
  axios
    .get("/api/categories/singleCategory", { params: { id: id } })
    .then((res) => res.data)
    .then((category) => dispatch(actionSelectCategory(category)))
    .catch((err) => console.log(err));
};

export const deleteCategory = (id) => () => {
  axios.post("/api/categories/delete", { id });
};

export const updateCategoryName = (name, id) => () => {
  console.log("soy name y edit", name, id);
  axios.put("/api/categories/edit", name, id);
};
