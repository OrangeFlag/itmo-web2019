export const DELETE_FAVORITE_TOWN = "DELETE_FAVORITE_TOWN";

export function deleteFavoriteTown(town) {
    return (dispatch) => {

        fetch(`/favourites?q=${town}`, {method: 'DELETE'}).then().catch();
        dispatch({
            type: DELETE_FAVORITE_TOWN,
            payload: {town: town}
        })
    }
}