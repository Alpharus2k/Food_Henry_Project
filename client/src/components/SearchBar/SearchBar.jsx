import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchSortFilter, getDiets } from '../../redux/actions/index';
import style from "./SearchBar.module.css";

const SearchBar = () => {
	const DEF_VALUE = "none";
	const dispatch = useDispatch();
	const [ search, setSearch ] = useState("");                   // Hook que permite dispachar acctions de REDUX
 	const [ sort, setSort] = useState(DEF_VALUE);
	const [ dietFilterBy, setDietDilterBy ] = useState(DEF_VALUE)
	useEffect(() => { dispatch(getDiets()) },[dispatch])     // Precarga los elementos a mostrar
	const diets = useSelector((state) => state.diets);
	useEffect(()=> {
		dispatch(searchSortFilter(search, sort, dietFilterBy));
	},[search, sort, dietFilterBy, dispatch])

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
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Search"
					/>
				</div>
				{/* Sort By */}
				<div>
					<h5>Sort By:</h5>
					<select className={style.resize} onChange={(e) => setSort(e.target.value)} defaultValue={DEF_VALUE}>
						<option value={DEF_VALUE}>...</option>
						<option value="asc">A - Z</option>
						<option value="desc">Z - A</option>
						<option value="high">High Health Score</option>
						<option value="low">Low Health Score</option>
					</select>
				</div>
				{/* Filter By Diet*/}
				<div>
					<h5>Filer By Diet:</h5>
					<select className={style.resize} onChange={(e) => setDietDilterBy(e.target.value)} defaultValue={DEF_VALUE}>
						<option value={DEF_VALUE}>...</option>
						{ diets.map( diet => {
							return (
								<option key={diet.id} value={diet.name}>{diet.name}</option>
							)
						})}
					</select>
				</div>
			</div>
		</div>
	)
}

export default SearchBar;