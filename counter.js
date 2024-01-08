import { doc } from "prettier"

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

const shoe = document.getElementById('shoe-img');
const smallShoes = [
  document.getElementById('shoe-1'),
  document.getElementById('shoe-2'),
  document.getElementById('shoe-3')
];

function setBorder(index) {
  smallShoes.forEach((smallShoe, i) => {
    const isClicked = i === index;
    const parentElement = smallShoe.parentElement.parentElement;

    if (isClicked) {
      parentElement.classList.add('border-coral-red');
      smallShoe.classList.add('animate-pulse')
      parentElement.classList.remove('border-transparent');
    } else {
      parentElement.classList.remove('border-coral-red');
      smallShoe.classList.remove('animate-pulse')
      parentElement.classList.add('border-transparent');
    }
  });
}

function handleClick(index) {
  shoe.src = smallShoes[index].src;
  shoe.classList.add('fade-in');
  setBorder(index);
  setTimeout(() => {
    shoe.classList.remove('fade-in');
  }, 500);
}

// Set the border for the first small shoe initially
setBorder(0);

smallShoes.forEach((smallShoe, index) => {
  smallShoe.addEventListener('click', () => {
    handleClick(index);
  });
});

const hamMenu = document.getElementById('menu-ham');
const hamIcon = document.getElementById('hamburger-icon');


hamIcon.addEventListener('click', () => {
  hamMenu.classList.toggle('hidden');
});

const lightModeToggle = document.getElementById('light-mode-toggle');
const darkModeToggle = document.getElementById('dark-mode-toggle');

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const themeSwitch = (theme) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

themeSwitch(systemTheme);

lightModeToggle.addEventListener('click', () => {
  themeSwitch('light');
});

darkModeToggle.addEventListener('click', () => {
  themeSwitch('dark');
});






