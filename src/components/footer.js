import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitterSquare, faFacebookSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons"

import footerStyles from './footer.module.scss'

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
				}
			}
		}
	`)

	return (
		<footer className={footerStyles.footer}>
			<Link to="/">
				<h2>nobuhiroharada.com</h2>
			</Link>
			<div className={footerStyles.list}>
				<ul>
					<li>
						<Link to="/" className={footerStyles.item} activeClassName={footerStyles.activeItem}>Home</Link>
					</li>
					<li>
						<Link to="/about" className={footerStyles.item} activeClassName={footerStyles.activeItem}>About</Link>
					</li>
					<li>
						<Link to="/contact" className={footerStyles.item} activeClassName={footerStyles.activeItem}>Contact</Link>
					</li>
				</ul>
			</div>
			<div className={footerStyles.socialMedia}>
				<a href="https://twitter.com/nobuhiro_harada" className={footerStyles.twitter}>
					<FontAwesomeIcon icon={faTwitterSquare} />
				</a>
				<a href="https://www.facebook.com/nobuhiroharada1026" className={footerStyles.facebook}>
					<FontAwesomeIcon icon={faFacebookSquare} />
				</a>
				<a href="https://github.com/nobuhiroharada" className={footerStyles.github}>
					<FontAwesomeIcon icon={faGithubSquare} />
				</a>
			</div>
			<div>
				<p>Created by {data.site.siteMetadata.author} © 2020</p>
			</div>
		</footer>
	)
}

export default Footer