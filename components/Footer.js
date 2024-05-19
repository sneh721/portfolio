import React from 'react';
import Link from 'next/link'

export const Contact = ({ title, description, buttons }) => {
	return (
		<div id="contact" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-5">
					<p>{description}</p>
					<div className="">
						{buttons.map((value, index) => (
							(value.isPrimary) ?
								<Link key={index} href={value.link} passHref>
									<button className="btn btn-primary my-1 mx-3">
										{value.title}
									</button>
								</Link>
								:
								<Link key={index} href={value.link} passHref>
									<button className="btn btn-outline-primary my-1 mx-3">
										{value.title}
									</button>
								</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

import Link from 'next/link';

export const Footer = () => {
	return (
		<footer className="bg-secondary text-center py-2 px-5">
			<div className="container text-muted">
				<small>&copy; 2021{" "}
					<Link href="https://github.com/hashirshoaeb" legacyBehavior>
						<a>hashirshoaeb</a>
					</Link>
					. Open sourced with love under{" "}
					<Link href="https://github.com/hashirshoaeb/portfolio/blob/main/LICENSE" legacyBehavior>
						<a>MIT</a>
					</Link>
					{" "}License
				</small>
			</div>
		</footer>
	);
};
