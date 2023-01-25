import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { 	sortRecipesHighScore,
			getRecipeByName,
			sortRecipesLowScore,
            sortRecipesAsc,
            sortRecipesDesc,
			unSorted } from '../../redux/actions/index';

const SearchBar = ({find, setSearch, handleSearchChange}) => {
	const dispatch = useDispatch();
 	const [sort, setSort] = useState('');
	useEffect(() => {
		dispatch(getRecipeByName(find));
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
		// handleSearchChange(find)
		// dispatch(getRecipeByName(find))
		return () => {
		 	dispatch(unSorted());
		}
		}, [find, sort, dispatch]);

	return (
		<div>
			<div className="title">
				<h1>Filtering Test</h1>
			</div>
			<div className="filters">
				<div className="search">
					<input
						type="text"
						value={find}
						onChange={handleSearchChange}
						placeholder="Search"
					/>
				</div>
				<div className="sort">
					<select onChange={(e) => setSort(e.target.value)} defaultValue="none" >
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
// const SearchBar = ({ search, setSearch, onChange }) => {
// 	const dispatch = useDispatch();
// 	const [sort, setSort] = useState('');


// 	useEffect(() => {
// 		//dispatch(searchRecipe(search));
//         switch( sort ){
//             case "desc":
//                 dispatch(sortRecipesDesc());
//                 break;
//             case "asc":
//                 dispatch(sortRecipesAsc());
//                 break;*/
//             case "high":
//                 dispatch(sortRecipesHighScore())
//                 break;
//            /* case "low":
//                 dispatch(sortRecipesLowScore())
//                 break;*/
//             default:
//                 break;
//         }
//         return () => {
//             dispatch(unSorted());
//         }
// 	}, [search, sort, dispatch]);

// 	return (
// 		<span>
// 			<div className="title">
// 				<h1>React Redux Filtering</h1>
// 			</div>
// 			<div className="filters">
// 				<div className="search">
// 					<input
// 						type="text"
// 						value={search}
// 						onChange={onChange}
// 						placeholder="Search"
// 					/>
// 				</div>
// 				<div className="sort">
// 					<select onChange={(e) => setSort(e.target.value)}>
// 						<option value="asc">Acendente</option>
// 						<option value="desc">Descendente</option>
//                         <option value="high">High Score</option>
// 						<option value="low">Low Score</option>
// 					</select>
// 				</div>
// 			</div>
// 		</span>
// 	);
// };


export default SearchBar;