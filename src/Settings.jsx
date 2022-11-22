import React from "react";

class Settings extends React.Component {
	render() {
		return (
			<div style={styles.settings}>
				<div style={styles.titleBar}>
					<p style={{ fontWeight: "bold" }}>iPod</p>
					<img
						style={styles.battery}
						src="https://cdn-icons-png.flaticon.com/512/664/664883.png"
					></img>
				</div>
				<div
					style={{
						width: "100%",
						height: "90%",
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
					}}
				>
					<img
						style={styles.image}
						src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Settings-icon-symbol-vector.png"
					/>
				</div>
			</div>
		);
	}
}

const styles = {
	settings: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		flexWrap: "wrap",
	},
	image: {
		width: "65%",
		height: "65%",
		alignSelf: "center",
	},
	titleBar: {
		height: "10%",
		width: "100%",
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

export default Settings;
