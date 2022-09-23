

import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const NewDashboard = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload('/login');
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<div className={styles.navLinks}>
					<h1>Coding Dojo Finance</h1>
					<Link to ="/dashboard">Dashboard</Link>
					<Link to ="/dashboard/stock/portfolio">Portfolio</Link>
					<Link to ="/settings">Settings</Link>
				</div>
				





				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default NewDashboard;