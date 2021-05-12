import useWebAnimations, { rubberBand } from '@wellyshen/use-web-animations';
import './App.css';

function App() {
	//  We can also use animations direct from the ANIMATE.CSS

	//const {ref} = useWebAnimations({ ...rubberBand });

	const { ref, playState, getAnimation } = useWebAnimations({
		keyframes: [
			{ transform: 'translate(0,0)', background: 'rebeccapurple' },
			{ transform: 'translate(100%, 0)', background: 'tomato' },
		],
		timing: {
			//delay: 500, // Start with a 500ms delay
			duration: 2000, // Run for 1000ms
			iterations: 2, // Repeat once
			direction: 'alternate', // Run the animation forwards and then backwards
			easing: 'ease-in-out', // Use a fancy timing function
		},
		onReady: ({ playState, animate, animation }) => {
			// Triggered when the animation is ready to play (Google Chrome: available in v84+)
		},
		onUpdate: ({ playState, animate, animation }) => {
			// Triggered when the animation enters the running state or changes state
		},
		onFinish: ({ playState, animate, animation }) => {
			// Triggered when the animation enters the finished state (Google Chrome: available in v84+)
		},
		// More useful options...
	});

	const play = () => {
		getAnimation().play();
	};

	const pause = () => {
		getAnimation().pause();
	};

	const reverse = () => {
		getAnimation().reverse();
	};

	const cancel = () => {
		getAnimation().cancel();
	};

	const finish = () => {
		getAnimation().finish();
	};

	const seek = (e) => {
		const animation = getAnimation();
		const time =
			(animation.effect.getTiming().duration / 100) * e.target.value;
		animation.currentTime = time;
	};

	const updatePlaybackRate = (e) => {
		getAnimation().updatePlaybackRate(e.target.value);
	};

	return (
		<div>
			<div className='target' ref={ref}>
				{playState}
			</div>
			<button onClick={play}>Play</button>
			<button onClick={pause}>Pause</button>
			<button onClick={reverse}>Reverse</button>
			<button onClick={cancel}>Cancel</button>
			<button onClick={finish}>Finish</button>
			<input type='range' onChange={seek} />
			<input
				type='number'
				defaultValue='1'
				onChange={updatePlaybackRate}
			/>
		</div>
	);
}

export default App;
