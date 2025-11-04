import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom"


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<h3>{store.saludo}</h3>


			<Link to="/informacion">
				<button className="btn btn-danger">Ir a Info</button>
			</Link>

			<Link to="/agenda-astrid">
				<button className="btn btn-danger">Ir a agenda Astrid</button>
			</Link>

			<p>
				<img src={rigoImageUrl} />
			</p>
		</div>
	);
}; 