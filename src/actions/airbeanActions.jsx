// Actions - Bestämmer vad som ska uppdateras i state
export const setLoaded = (count) => {
    return {
        type: 'INCREMENT',
        payload: count
    }
}