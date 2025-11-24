export async function getUserRepos() {
  const username = process.env.GITHUB_USERNAME
  const token = process.env.GITHUB_TOKEN

  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`,
    {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: token ? `Bearer ${token}` : '',
      },
      next: { revalidate: 3600 },
    }
  )

  if (!res.ok) {
    console.error('GitHub API Error:', await res.text())
    return []
  }

  return res.json()
}
