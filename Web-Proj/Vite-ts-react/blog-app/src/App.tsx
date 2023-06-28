import { useLayoutEffect, useState } from 'react'
import './App.css'

let user:{
	name: string;
	age: number;
	isloggedIn: boolean;
};

user = {
	name: "Shawn",
  	age: 18,
  	isloggedIn: false
};
	

function LoginPage() {
	const [cur, setval] = useState(0);
	let goBack = () => {
		return user.isloggedIn = true;
	}
	if (cur == 5){
		return user.isloggedIn = true;
	}


	return (
		<>
		<button onClick={goBack}>
			Back
		</button>
		<h1>Please Login</h1>
		<h2>{cur}</h2>
		<button onClick={() => setval(cur + 1)}>
			Click ME
		</button>
		</>
	);  
}




function Admin() {
	return (
		<>
		<h2>I LOVE YOU💗💗</h2>
		</>
	);
}




function App() {
	const [count, setCount] = useState(0)

	let lyrics: string[] = ["Bakit uhaw🥤 sa 'yong sayaw?🕺🏻", "Bakit ikaw?🫵🏻", "'Di bibitaw🫂, sa 'yong sa 'yo", "Laging ikaw", "Ako'y giniginaw, halika rito", "Dito ka lang sa tabi ko", "Mananatiling uhaw💦, uhaw💦, uhaw💦"]

	let content: any;
	if(user.isloggedIn == true){
		content = <Admin />
	}else{
		content = <LoginPage />
	}

	let text: string = "Bayot Ka Charles  \n\n\t-Shun";

	if(count != 0){
		text = lyrics[count-1];
	}
	
	return (
		<>
			<h1>
				{text}
			</h1>
			<br />
			<br />
			<br />
			<br />
			<br />
			<button onClick={() => setCount(count + 1)}>
				Ig click ak
			</button>
		</>
	)
}

export default App
