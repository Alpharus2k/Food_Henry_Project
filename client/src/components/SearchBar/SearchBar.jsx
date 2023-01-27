import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
		sortRecipesHighScore,
		sortRecipesLowScore,
        sortRecipesAsc,
        sortRecipesDesc,
		unSorted				} from '../../redux/actions/index';
import style from "./SearchBar.module.css";

const SearchBar = ({find, handleSearchChange}) => {
	const dispatch = useDispatch();
 	const [sort, setSort] = useState('');
	useEffect(() => {
		switch( sort ){
			case "desc":
				dispatch(sortRecipesDesc());
				break;
			case "asc":
				dispatch(sortRecipesAsc());
				break;
			case "high":
				dispatch(sortRecipesHighScore())
				break;
			case "low":
				dispatch(sortRecipesLowScore())
				break;
			default:
				dispatch(unSorted())
				break;
		}
		return () => {
		 	dispatch(unSorted());
		}
		}, [sort, dispatch]);

	return (
		<div>
			{/* Page Title */}
			<div className={style.title}>
				<h1>Henry's Recipies</h1>
			</div>
			{/* Search Bar */}
			<div className={style.line}>
				<div className={style.search}>
					<h5>Search:</h5>
					<input
						className={style.resize }
						type="text"
						value={find}
						onChange={handleSearchChange}
						placeholder="Search"
					/>
				</div>
				{/* Sort By */}
				<div className="sort">
					<h5>Sort By:</h5>
					<select className={style.resize} onChange={(e) => setSort(e.target.value)} >
						<option value="asc">A - Z</option>
						<option value="desc">Z - A</option>
						<option value="high">High Health Score</option>
						<option value="low">Low Health Score</option>
					</select>
				</div>
			</div>
		</div>
	)
}

export default SearchBar;