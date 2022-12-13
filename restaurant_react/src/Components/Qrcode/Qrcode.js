import QRCode from 'qrcode';
import { useState } from 'react';
import '../../Styles/Qrcode.css';

function Qrcode() {

	let fakelink = [
		"https://facebook.com",
		"https://twitter.com",
		"https://www.linkedin.com",
		"https://plus.google.com",
		"https://plus.google.com",
	]

	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 800,
			margin: 2,
			color: {
				dark: '#6FDFBE',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}
 
	return (
		<div className="qrcode_div">
			<h1>Générateur de QR Code</h1>
			<input 
				type="text"
				placeholder="Quel site? "
				value={url}
				onChange={e => setUrl(e.target.value)} />
			<button onClick={GenerateQRCode}>Générer</button>
			{qr && <>
				<img src={qr} alt='link qr'/>
				<a href={qr} download="qrcode.png">Télécharger le QRCode</a>
			</>}
		</div>
	)
}

export default Qrcode;
