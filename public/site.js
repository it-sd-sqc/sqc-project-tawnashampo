document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.getElementById('navigation-dropdown')
    const dropdownContent = document.querySelector('.dropdown-content')

    dropdownToggle.addEventListener('click', function () {
        dropdownContent.classList.toggle('show')
    })

    window.addEventListener('click', function (event) {
        if (!event.target.matches('#navigation-dropdown')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show')
            }
        }
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle')
    const mainBody = document.getElementById('mainBody')

    function toggleDarkMode () {
        mainBody.classList.toggle('dark-mode')
        darkModeToggle.innerHTML = mainBody.classList.contains('dark-mode') ? '☀️' : '🌙'
        const isDarkModeEnabled = mainBody.classList.contains('dark-mode')
        localStorage.setItem('darkModeEnabled', isDarkModeEnabled)
    }

    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true'
    if (isDarkModeEnabled) {
        mainBody.classList.add('dark-mode')
        darkModeToggle.innerHTML = '☀️'
    }

    darkModeToggle.addEventListener('click', toggleDarkMode)
})
