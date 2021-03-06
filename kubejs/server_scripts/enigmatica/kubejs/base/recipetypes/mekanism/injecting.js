events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                output: 'buildinggadgets:construction_block_dense',
                input: 'buildinggadgets:construction_block_powder',
                gas: { tag: 'mekanism:water_vapor', amount: 200 }
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.mekanism.injecting(recipe.output, recipe.input, recipe.gas);
    });
});
