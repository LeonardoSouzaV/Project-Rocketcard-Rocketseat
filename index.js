function ChangeCardColor() {
  const borderColor = "#" + Math.round(Math.random() * 0xffffff).toString(16)

  document.querySelector("div.card-color").style.backgroundColor = borderColor
}

const url = "https://api.github.com/users/LeonardoSouzaV"

function GetDatasFromAPIGitHub(url) {
  axios
    .get(url)
    .then((response) => {
      const data = response.data

      document.querySelector("a#github-user").textContent = data.login
      document.querySelector("span#followers").textContent = data.followers
      document.querySelector("span#following").textContent = data.following
      document.querySelector("span#repositories").textContent =
        data.public_repos
      document.querySelector("span#location").textContent = data.location
      document.querySelector("span#company").textContent = data.company
      document.querySelector("img#github-user-photo").src = data.avatar_url
    })
    .catch((error) => prompt.error(error))
}

GetDatasFromAPIGitHub(url)
