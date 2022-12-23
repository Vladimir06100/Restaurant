import QRCode from 'qrcode.react'; //Import du modude Qrcode nécessaire pour générer un Qrcode. 

function Qrcode(props) {
 
	return (
		<div className="qrcode_header">
		<QRCode  // La balise QRCode permet de créer un qrcode.
		// Props URL qui servira a mettre un QRCode sur la page en question
			value="{props.url}" style={{ marginRight: 50 }}/>
		</div>
	)
}

export default Qrcode;