// const url = 'https://spotify23.p.rapidapi.com/search/?type=multi&offset=0&limit=10&numberOfTopResults=5';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'fc4990bb4bmshb924bcc42c799dcp164fb0jsn7d4480a632b6',
// 		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
// 	}
// };

// const getMusic = async () => {
//     console.log("getting data... ");
//     try{
//         let response = await fetch(url,[options]);
//         console.log(response);
//         let data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.error(error);
//     }
    
// }

const myKey = 'fc4990bb4bmshb924bcc42c799dcp164fb0jsn7d4480a632b6';


const url = 'https://dietagram.p.rapidapi.com/apiFood.php?q=diet&name=Jab%C5%82ko&lang=pl'
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': myKey,
		'x-rapidapi-host':  'dietagram.p.rapidapi.com'

	}
};

const getMusic = async() =>{
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        // const tracks = result.tracks.items;
        // const musicContainer = document.getElementById('music-container');

        // tracks.forEach(track => {
        //     const previewUrl = track.data.albumOfTrack.sharingInfo.shareUrl;
        //     console.log(previewUrl);
        //     if (previewUrl) {
        //         const audioElement = document.createElement('audio');
        //         audioElement.controls = true;
        //         audioElement.src = previewUrl;
        //         audioElement.volume = 0.5;  // You can adjust volume here

        //         musicContainer.appendChild(audioElement);
        //         audioElement.play();
        //     }
        // });
        
    } catch (error) {
        console.error(error);
    }
};

// document.getElementById('playButton').addEventListener('click', function() {
//     getMusic();
// });

getMusic();