const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const allTheLinks = document.querySelectorAll('a')
const mainNav = document.querySelector('nav')
// console.log(allTheLinks)
allTheLinks[0].textContent = 'Services'
allTheLinks[1].textContent = 'Product'
allTheLinks[2].textContent = 'Vision'
allTheLinks[3].textContent = 'Features'
allTheLinks[4].textContent = 'About'
allTheLinks[5].textContent = 'Contact'

allTheLinks.forEach(link => {
  link.style.color = 'green'
})





const locationLink = document.createElement('a')
locationLink.textContent = 'Location'
locationLink.href = '#'
mainNav.appendChild(locationLink)

const locationLinkTwo = document.createElement('a')
locationLinkTwo.textContent = 'IDK'
locationLink.href = '#'
mainNav.prepend(locationLinkTwo)
locationLinkTwo.style.color = 'green'
locationLink.style.color = 'green'

const topImageCode = document.querySelector('#cta-img')
// console.log(topImageCode)
topImageCode.src = siteContent["cta"]["img-src"]

const topHeader = document.querySelector('h1')
topHeader.innerHTML = "DOM <br> IS <br> AWESOME"

const topButton = document.querySelector('button')
topButton.textContent = 'Get Started'

topButton.addEventListener('click', (event) => {event.target.style.backgroundColor = 'blue';});

const textContent = document.querySelectorAll('h4')
textContent[0].textContent = "Features"
textContent[1].textContent = "About"
textContent[2].textContent = "Services"
textContent[3].textContent = "Product"
textContent[4].textContent = "Vision"
textContent[5].textContent = "Contact"

const paraContent = document.querySelectorAll('p')
console.log(paraContent)
const paraImg = document.querySelector('#middle-img')
paraImg.src = siteContent['main-content']["middle-img-src"]
            
paraContent[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paraContent[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paraContent[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paraContent[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paraContent[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paraContent[5].innerHTML = "123 Way 456 Street <br> Somewhere, USA"
paraContent[6].textContent = "1 (888) 888-8888"
paraContent[7].textContent = "sales@greatidea.io"
paraContent[8].textContent = "Copyright Great Idea! 2018"

textContent.forEach(text =>{
  text.style.color = 'green'
})

const footer = document.querySelector('footer')
footer.style.color = 'green'









