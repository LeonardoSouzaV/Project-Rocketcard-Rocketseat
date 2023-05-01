function ChangeCardColor() {
  const borderColor = "#" + Math.round(Math.random() * 0xffffff).toString(16)

  document.querySelector("div.card-color").style.backgroundColor = borderColor
}

const user = "LeonardoSouzaV"

function GetDatasFromAPIGitHub(user) {
  const profile = `https://api.github.com/users/${user}`

  fetch(profile)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("a#github-user").textContent = data.login
      document.querySelector("span#followers").textContent = data.followers
      document.querySelector("span#following").textContent = data.following
      document.querySelector("span#repositories").textContent =
        data.public_repos
      document.querySelector("span#location").textContent = data.location
      document.querySelector("span#company").textContent = data.company
      document.querySelector("img#github-user-photo").src = data.avatar_url
    })
}

function newCard() {
  const userInput = prompt("Enter your GitHub user name:")
  if (userInput) {
    GetDatasFromAPIGitHub(userInput)
  } else {
    GetDatasFromAPIGitHub(user)
  }
}

window.onload = newCard()
