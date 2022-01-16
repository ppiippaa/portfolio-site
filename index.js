const footerDate = document.getElementsByClassName('footer-date')

const currentYear = new Date().getFullYear();

footerDate.innerHTML = currentYear.toString();


