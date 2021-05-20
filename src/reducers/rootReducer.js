const initState = {
    posts: [
        {id: '1', title: 'Squirtle', body: 'Squirtle, known as Zenigame in Japan, is a Pokémon species in Nintendo and Game Freaks Pokémon franchise. It was designed by Atsuko Nishida. Its name was changed from Zenigame to Squirtle during the English localization of the series in order to give it a clever and descriptive name. '},
        {id: '2', title: 'Charmander', body:'Charmander, known as Hitokage in Japan, is a Pokémon species in Nintendos and Game Freaks Pokémon franchise.'},
        {id: '3', title: 'Bulbasaur', body:'Bulbasaur, known as Fushigidane in Japan, is the first Pokémon in Nintendo and Game Freaks Pokémon franchises monster dictonary, called a PokéDex. Designed by Atsuko Nishida, Bulbasaur debuted in Pokémon Red and Blue as a Starter Pokémon.'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer