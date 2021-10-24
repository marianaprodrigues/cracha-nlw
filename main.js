const LinksSocialMedia = {
  github: 'MAAARIAAANAAA',
  youtube: 'mari9647',
  facebook: 'profile.php?viewas=100000686899395&id=100000538624938',
  instagram: 'maariiirodrigues',
  twitter: 'marianapr1211'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userNameGitHub.textContent = data.login
    })
}

getGitHubProfileInfos()
