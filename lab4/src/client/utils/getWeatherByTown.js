export async function getWeatherByTown(town) {
    const response = await fetch( `/weather/town?q=${town}`);

    if (response.status !== 200){
        throw new Error('Status not 200');
    }

    return await response.json();
}
