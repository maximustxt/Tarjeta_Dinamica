import { useState, useEffect } from "react";
import {
  FuncionNumeroTarjeta,
  FuncionIdentificarTipoTarjeta,
  FuncionFormatMesAño,
} from "../Helpers/helpers";
import ImgChip from "../../assets/chip (1).png";
import ImgVisa from "../../assets/simbolos.png";
import ImgMastercard from "../../assets/logo.png";
import ImgAmericaExpress from "../../assets/american-express.png";
import "./Tarjeta.css";

const Tarjeta = ({
  numeroTarjeta,
  fechaExpiracion,
  numeroCcv,
  nombreTarjeta,
}) => {
  const [CambioDePosicion, setCambioDePosicion] = useState(false);
  const [numeroTarjetaFormat, setNumeroTarjetaFormat] = useState("");
  const [fechaExpiracionFormat, setFechaExpiracionFormat] = useState("");

  useEffect(() => {
    if (numeroCcv.length > 0) {
      setCambioDePosicion(true);
    } else {
      setCambioDePosicion(false);
    }
  }, [numeroCcv]);

  useEffect(() => {
    setNumeroTarjetaFormat(FuncionNumeroTarjeta(numeroTarjeta));
  }, [numeroTarjeta]);

  useEffect(() => {
    setFechaExpiracionFormat(FuncionFormatMesAño(fechaExpiracion));
  }, [fechaExpiracion]);

  return (
    <div
      onClick={() => setCambioDePosicion(!CambioDePosicion)}
      className={`flip-card${CambioDePosicion ? " voltear" : ""}`}
    >
      <div className="flip-card-inner">
        {/*💳 CONTENEDOR FRONTAL DE LA TARJETA 💳*/}
        <div className="Delantera">
          <div className="LogoMarca">
            {FuncionIdentificarTipoTarjeta(numeroTarjeta) === "Visa" ? (
              <img className="ImagenLogo" src={ImgVisa} alt="logo" />
            ) : FuncionIdentificarTipoTarjeta(numeroTarjeta) ===
              "MasterCard" ? (
              <img className="ImagenLogo" src={ImgMastercard} alt="logo" />
            ) : FuncionIdentificarTipoTarjeta(numeroTarjeta) ===
              "American Express" ? (
              <img className="ImagenLogo" src={ImgAmericaExpress} alt="logo" />
            ) : (
              <div className="ImagenLogo" />
            )}
          </div>
          <img src={ImgChip} className="chip" alt="Chip" />
          <div className="Datos">
            <div className="FlexBox">
              <div className="Grupo">
                <p className="Label">Número de Tarjeta</p>
                {numeroTarjeta?.length > 0 ? (
                  <p className="Numero">{numeroTarjetaFormat}</p>
                ) : (
                  <p className="Numero">#### #### #### ####</p>
                )}
              </div>
            </div>
            <div className="FlexBox">
              <div className="Grupo">
                <p className="Label">Nombre Tarjeta</p>
                {nombreTarjeta?.length > 0 ? (
                  <p className="Nombre">{nombreTarjeta}</p>
                ) : (
                  <p className="Nombre">Jhon Doe</p>
                )}
              </div>
              <div className="Grupo">
                <p className="Label">Expiración</p>
                {fechaExpiracion?.length > 0 ? (
                  <p className="Expiracion">{fechaExpiracionFormat}</p>
                ) : (
                  <p className="Expiracion">MM/AA</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/*💳 CONTENEDOR TRASERA DE LA TARJETA 💳*/}

        <div className="Trasera">
          <div className="strip" />
          <div className="Container-Firma-Ccv">
            <div className="mstrip">
              {nombreTarjeta?.length > 0 ? (
                <p className="Nombre">{nombreTarjeta}</p>
              ) : (
                <p className="Nombre">Jhon Doe</p>
              )}
            </div>
            <div className="ContainerCCV">
              {numeroCcv?.length > 0 ? (
                <p className="ccv">{numeroCcv}</p>
              ) : (
                <p className="ccv">---</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarjeta;
