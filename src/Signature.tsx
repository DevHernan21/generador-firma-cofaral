import {PhotoSignatureProps} from "./App";
import Logo from "./assets/logoSignatureChico.gif";
import Reciclar from "./assets/reciclar.png";
import Telefono from "./assets/telefono.png"
import Email from "./assets/email.png"

const Signature = (props: PhotoSignatureProps) => {
    return (
        <table cellPadding={0} cellSpacing={0} className={"signature"}>
            <tbody>
            <tr>
                <td rowSpan={5}>
                    <img
                        className={"main-image"}
                        src={Logo}
                        alt={""}
                    />
                </td>
                <td rowSpan={5}>
                    <div
                        className={"vertical-line"}
                    />
                </td>
                <td><b>{props.fullName}</b></td>
            </tr>
            <tr>
                <td colSpan={3}><b>{props.position}</b></td>
            </tr>
            <tr>
                <td colSpan={3} ><img src={Telefono} alt={""} className={"imgSignature"}/>{'+54' + props.phone}</td>
            </tr>
            <tr>
                <td colSpan={3} ><img src={Email} alt={""} className={"imgSignature"}/>{props.email}</td>
            </tr>
            <tr>
                <td colSpan={3} className={"recicleText"}><img src={Reciclar} alt={""}/> Piense en el medio ambiente antes de imprimir este e-mail.</td>
            </tr>
            {/* <tr>
                <td colSpan={3}>
                    <div className={"social-logos-frame"}>
                        <a href={"https://cofaral.com.ar/"}>
                            <img src={WebLogo} alt={""}/>
                        </a>
                        <a href={"https://www.linkedin.com/"}>
                            <img src={LinkedInLogo} alt={""}/>
                        </a>
                        <a href={"https://www.facebook.com/"}>
                            <img src={FacebookLogo} alt={""}/>
                        </a>
                    </div>
                </td>
            </tr> */}
            </tbody>
        </table>
    );
};

export default Signature;
