import React from "react";
import sound from "./assets/music/Sabrina-Carpenter-Looking-at-Me.mp3";

class MyMusic extends React.Component {
	constructor() {
		super();
		this.state = {
			isMounted: true,
		};
	}

	componentDidMount() {
		let self = this;
		self.props.audio.play();

		self.props.audio.addEventListener("timeupdate", function () {
			if (self.state.isMounted) {
				var pos = self.props.audio.currentTime / self.props.audio.duration;
				self.updateTime();
				let fill = document.getElementById("fill");
				if (fill !== null) {
					fill.style.width = pos * 100 + "%";
				}
			}
		});
	}

	updateTime = () => {
		this.setState({
			audio: this.props.audio,
		});
	};

	componentWillUnmount() {
		this.state.isMounted = false;
	}

	render() {
		let audio = this.props.audio;
		return (
			<div style={styles.myMusicContainer}>
				<div style={styles.titleBar}>
					<p style={{ fontWeight: "bold" }}>iPod</p>
					<img
						style={styles.battery}
						src="https://cdn-icons-png.flaticon.com/512/664/664883.png"
					></img>
				</div>

				<div style={styles.info}>
					<img
						style={styles.image}
						src=" https://illuminaija.com/wp-content/uploads/2019/07/Sabrina-Carpenter-8.jpg"
					></img>
					<div style={styles.subInfo}>
						<h4 style={{ marginBottom: "0.5rem", color: "black" }}>
							Looking At Me
						</h4>
						<p style={{ marginBottom: "0", color: "black" }}>
							Sabrina Carpenter
						</p>
					</div>
				</div>
			</div>
		);
	}
}

const styles = {
	myMusicContainer: {
		height: "100%",
		width: "100%",
		display: "flex",
		flexDirection: "column",
	},
	image: {
		height: "75%",
		width: "45%",
		alignSelf: "center",
	},
	info: {
		height: "70%",
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	statusBar: {
		width: "100%",
		height: "30%",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-evenly",
	},
	subInfo: {
		alignSelf: "center",
	},
	seekBar: {
		width: "70%",
		height: "20%",
		border: "1px solid grey",
		cursor: "pointer",
		alignSelf: "center",
		display: "flex",
	},
	fill: {
		height: "100%",
		backgroundColor: "royalblue",
		width: "0%",
	},
	currTime: {
		margin: "0",
		alignSelf: "center",
		color: "black",
	},
	dur: {
		margin: "0",
		alignSelf: "center",
		color: "black",
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

export default MyMusic;
