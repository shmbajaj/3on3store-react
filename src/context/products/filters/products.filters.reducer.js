export function productsReducer(state, { type, sortType, rating }) {
  switch (type) {
    case "CLEAR_ALL_FILTERS":
      return getProdutsWithoutFilters();
    case "CATEGORY_INTELLIGENCE":
      return { ...state, categoryIntelligence: !state.categoryIntelligence };
    case "CATEGORY_SOCIAL_SKILLS":
      return { ...state, categorySocialSkills: !state.categorySocialSkills };
    case "CATEGORY_STRENGTH":
      return { ...state, categoryStrength: !state.categoryStrength };
    case "RATING":
      return { ...state, rating: rating };
    case "SORT_BY":
      return { ...state, sortby: sortType };
    default:
      return state;
  }
}

function getProdutsWithoutFilters() {
  return {
    sortby: "",
    categoryIntelligence: false,
    categorySocialSkills: false,
    categoryStrength: false,
    rating: 1,
  };
}
