function updateProfileInfo(profileData) {
    const name = document.getElementById('name')
    const job = document.getElementById('job')
    const location = document.getElementById('location')
    const phone = document.getElementById('phone')
    const email = document.getElementById('email')

    name.innerText = profileData.name
    job.innerText = profileData.job
    location.innerText = profileData.location
    phone.innerText = profileData.phone
    email.innerText = profileData.email
}


function updateHardSkills (profileData){
    const skillsPag = document.getElementById('skills');
    const htmlSkils = profileData.skills.hardSkills.map((ferramentas) => `
        <li>
            <img src="${ferramentas.logo}" alt="${ferramentas.nome}" title="${ferramentas.nome}">
        </li>
    `).join("")
    skillsPag.innerHTML = htmlSkils
}
function updateSoftSkills (profileData) {
    const skillsPag = document.getElementById('softSkills');
    const htmlSkils = profileData.skills.softSkills.map((soft) => `<li> ${soft.habilidade} </li>`).join("")
    skillsPag.innerHTML = htmlSkils
}
function updateLanguages (profileData) {
    const languagePag = document.getElementById('language')
    const languageHtml = profileData.languages.map((idioma) => `<li>${idioma}</li>`).join('')
    languagePag.innerHTML = languageHtml
}
function updatePortifolio (profileData){
    const portifolioPag = document.getElementById('Portifolio');
    const htmlPortifoli = profileData.portfolio.map((content) => {
        return `
        <li>
            <h3 ${content.github ? 'class="github"' : ''}>${content.name}</h3>
            <a href="${content.url}" target="_blank">${content.url}</a>
        </li>
    `
    }).join("")
    portifolioPag.innerHTML = htmlPortifoli
}
function updateExperience (profileData){
    const experiencePag = document.getElementById('professionalExperience')
    const experienceHtml = profileData.professionalExperience.map((item) => `
        <li>
            <h3 class="title">${item.name}</h3>
            <span class="period">${item.period}</span>
            <p> ${item.description} </p>
        </li>
    `
    ).join('')
    experiencePag.innerHTML = experienceHtml
}



(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)  
    updateHardSkills(profileData)
    updateSoftSkills(profileData)
    updateLanguages(profileData)
    updatePortifolio(profileData)
    updateExperience(profileData)
})()

