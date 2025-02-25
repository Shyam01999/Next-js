import RecipeList from "@/components/recipe-list";
import Link from "next/link";

async function fetchListOfRecipes() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/recipes');
        const result = await apiResponse.json();
        return result.recipes
    }
    catch (error) {
        throw new Error(error);
    }
}

export default async function Recipes() {
    const listOfReceipes = await fetchListOfRecipes()
    
    return (
        <RecipeList recipelist={listOfReceipes}/>
    )
}