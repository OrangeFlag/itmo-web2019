export const  DELETE_FAVORITE_TOWN = "DELETE_FAVORITE_TOWN";

export function deleteFavoriteTown(town) {
    return {
        type: DELETE_FAVORITE_TOWN,
        payload: town
    }
}