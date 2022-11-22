import React from "react";
import artistImage from "./assets/images/Sabrina-Carpenter-8.jpg";

class Artists extends React.Component {
	render() {
		return (
			<div style={styles.artistsContainer}>
				<div style={styles.titleBar}>
					<p style={{ fontWeight: "bold" }}>iPod</p>
					<img
						style={styles.battery}
						src="https://cdn-icons-png.flaticon.com/512/664/664883.png"
					></img>
				</div>

				<div style={styles.info}>
					<div style={styles.imageContainer}></div>

					<div style={styles.subInfo}>
						<h4 style={{ marginBottom: "0.5rem", color: "black" }}>
							Sabrina Carpenter
						</h4>
					</div>
				</div>
			</div>
		);
	}
}

const styles = {
	artistsContainer: {
		height: "100%",
		width: "100%",
		display: "flex",
		flexDirection: "column",
	},
	imageContainer: {
		height: "65%",
		width: "40%",
		borderRadius: "50%",
		backgroundImage: `url(${artistImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		alignSelf: "center",
	},
	image: {
		width: "2rem",
		height: "2rem",
	},
	info: {
		height: "70%",
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	info2: {
		width: "100%",
		height: "30%",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	subInfo: {
		alignSelf: "center",
	},
	titleBar: {
		height: "10%",
		width: "97%",
		borderRadius: "12px 0 0 0",
		// backgroundImage: "linear-gradient(0deg, rgb(123, 132, 140), transparent)",
		background: "blue",
		// background:
		// 	"radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)",
		borderBottom: "1px solid #6c757d",
		padding: "1px 5px 10px 8px",
		display: "flex",
		flexDirecton: "row",
		justifyContent: "space-between",
	},
	battery: {
		width: "20px",
		height: "20px",
	},
};

export default Artists;
