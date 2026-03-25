let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

const list = document.querySelectorAll('[name="nav-a"]')

function activeLink(){
	list.forEach((item) =>
	item.classList.remove('active'))
	this.classList.add('active')
}

list.forEach((item) =>
item.addEventListener('click', activeLink))

function toggleMode(){
  const html = document.documentElement
  const isLight = html.classList.contains('light')
  
  if (isLight) {
    html.classList.remove('light')
    localStorage.setItem('theme', 'dark')
    document.querySelector('#switch button').style.left = '0'
  } else {
    html.classList.add('light')
    localStorage.setItem('theme', 'light')
    document.querySelector('#switch button').style.left = '50%'
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const theme = savedTheme || (prefersDark ? 'dark' : 'light')
  
  if (theme === 'dark') {
    // :root is default dark, no class needed
    document.querySelector('#switch button').style.left = '0'
  } else {
    html.classList.add('light')
    document.querySelector('#switch button').style.left = '50%'
  }
  
  // Listen for system changes if no saved theme
  if (!savedTheme) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (e.matches) {
        html.classList.remove('light')
        document.querySelector('#switch button').style.left = '0'
      } else {
        html.classList.add('light')
        document.querySelector('#switch button').style.left = '50%'
      }
    })
  }
})


let idade = 25
let temCarteira = true

if(idade >= 18 && temCarteira) {
  console.log("Pode dirigir")
}
if(idade < 18 || !temCarteira) {
  console.log("Não pode dirigir")
}

//

let tarefaConcluida = true

if(tarefaConcluida) {
  console.log("A tarefa está concluída")
}