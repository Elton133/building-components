import { useState } from "react";

export default function RecipeApi() {
    // Step 1: Initialize state variables
    const [searchInput, setSearchInput] = useState('');
    const [recipes, setRecipes] = useState([]); // Fixed the typo here
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // API credentials
    const apiKey = 'dcaec8e191a7895997e7a9a9112e4bfc';
    const appId = '14a373e3';
    const appUrl = 'https://api.edamam.com/api/recipes/v2';

    // Function to fetch recipes
    const searchRecipes = async () => {
        setLoading(true);
        setError(null);

        try {
            // Updated to use searchInput instead of undefined searchTerm
            const response = await fetch(`${appUrl}?q=${searchInput}&app_id=${appId}&app_key=${apiKey}`);
            if (!response.ok) throw new Error('Something went wrong');

            const data = await response.json();
            setRecipes(data.hits); // Updated to correct state variable name
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Update search input state on change
    const handleInputChange = (e) => setSearchInput(e.target.value);

    return (
        <div>
            <h1>Recipe Search</h1>
            <input 
                type="text"
                value={searchInput}
                onChange={handleInputChange}
                placeholder="Search for recipes" 
            />
            <button onClick={searchRecipes}>Search</button>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <div>
                {recipes.map((recipe, index) => (
                    <div key={index}>
                        <h3>{recipe.recipe.label}</h3>
                        <p>Calories: {Math.round(recipe.recipe.calories)}</p>
                        <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                    </div>
                ))}
            </div>
        </div>
    );
}
