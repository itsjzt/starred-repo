import React, { useState, useEffect } from 'react'
// @ts-ignore
import style from './Repos.module.css'
import Repo from './Repo'

export default function Repos({ username }) {
  const [starredRepos, setStarredRepos] = useState(null)
  useEffect(() => {
    if (!username) return;
    const apiUrl = `https://api.github.com/users/${username}/starred`
    fetch(apiUrl)
      .then(chunks => chunks.json())
      .then(json => {
        const data = json.map(starred => ({
          name: starred.name,
          url: starred.url,
          description: starred.description,
          ownerName: starred.owner.login,
          ownerAvatar: starred.owner.avatar_url,
          allStars: starred.stargazers_count
        }))
        setStarredRepos(data)
      }).catch(error => {
        console.error(error)
      })
  }, [username])

  if (!starredRepos) {
    return <div className={style.loadingText}>Enter username to get starred repo</div>
  }

  return (
    <div>
      {starredRepos.map(repo => <Repo key={repo.name} repo={repo} />)}
    </div>
  )
}
