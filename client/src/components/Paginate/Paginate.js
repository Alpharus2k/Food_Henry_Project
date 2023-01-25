import React from 'react';
import style from "./Paginate.module.css"

const Paginate = ({ current, setCurrent, totalRecipes, recipesPerPage }) => {
	const totalPages = Math.ceil(totalRecipes / recipesPerPage);

	let pages = [];

	for (let p = 1; p <= totalPages; p++) {
		pages.push(p);
	}

	return (
		<ul className="pagination">
			<li className={`page-item ${current === 1 && `disabled`}`}>
				<button className="page-link" onClick={() => setCurrent(current - 1)}>
					&laquo;
				</button>
			</li>
			{pages.map((page) => (
				<li
					key={page}
					className={`page-item ${page === current && `active`}`}
					onClick={() => setCurrent(page)}
				>
					<button className="page-link">{page}</button>
				</li>
			))}
			<li className={`page-item ${current === totalPages && `disabled`}`}>
				<button className="page-link" onClick={() => setCurrent(current + 1)}>
					&raquo;
				</button>
			</li>
		</ul>
	);
};

export default Paginate;
