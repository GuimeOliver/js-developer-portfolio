async function fetchProfileData() {
    const url = 'https://guimeoliver.github.io/API-portifolio/db.json'
    const fetching =  await fetch(url)
    return await fetching.json()
}

