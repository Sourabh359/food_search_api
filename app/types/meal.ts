export interface Meal {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strMealThumb: string;
    strCountry: string;
    strArea: string;
    strInstructions: string;
    strSource: string;
    strYoutube: string;
    
      [key: `strIngredient${number}`]: string | null;
  [key: `strMeasure${number}`]: string | null;

}