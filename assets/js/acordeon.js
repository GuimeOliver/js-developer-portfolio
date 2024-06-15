const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')


acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e)=> {
        const acordeon = trigger.parentElement;
        const isOpen = acordeon.classList.contains('Open')

        if (isOpen) {
            acordeon.classList.remove('Open')
        }else {
            acordeon.classList.add('Open')
        }
    })
})
