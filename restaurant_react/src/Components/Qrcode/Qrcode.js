import QRCode from 'qrcode.react'; //Import du modude Qrcode nécessaire pour générer un Qrcode. 
import '../../Styles/Qrcode.css'; 

function Qrcode() {
 
	return (
			<div className="qrcode_header">

			<QRCode  // La balise QRCode permet de créer un qrcode.
               value="https://mettrelelienici.com"style={{ marginRight: 50 }}/>
			</div>
	)
}

export default Qrcode;