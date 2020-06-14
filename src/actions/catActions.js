// write and export your action creator function here
export const fetchCats = () => {
    const catsURL = 'https://learn-co-curriculum.github.io/cat-api/cats.json'
    return (dispatch) => {
        dispatch({ type: 'LOADING_CATS' })
        fetch(catsURL)
            .then(resp => resp.json())
            .then(cats => {
                dispatch({ type: 'ADD_CATS', cats: cats.images })
            })
    }
}