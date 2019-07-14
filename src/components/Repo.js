import React from 'react'
import classNames from 'classnames/bind'
// @ts-ignore
import style from './Repo.module.css'

/**
 * @param {{ repo: { name: any; url: any; description: any; ownerName: any; ownerAvatar: any; allStars: any; }; }} props
 */
export default function Repo(props) {
  const {
    name,
    url,
    description,
    ownerName,
    ownerAvatar,
    allStars
  } = props.repo

  const cx = classNames.bind(style);

  return (
    <div className={cx(style.card, style.marginBottomLg)}>
      <div className={style.paddingMd}>
        <div className={style.row}>
          <div className={style.column}>
            <img className={style.repoAvatar} src={ownerAvatar} alt="Owner" />
          </div>
          <div className={cx(style.column, style.paddingLeftMd)}>
            <a className={style.repolink} href={url}>
              <h2>{name}</h2>
            </a>
            <p>{ownerName}</p>
            <p>{description}</p>
            <p>
              <span role="img" aria-label="stars">⭐</span>
              {allStars}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}