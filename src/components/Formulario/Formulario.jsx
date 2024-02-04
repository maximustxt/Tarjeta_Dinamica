import { useState } from "react";
import Tarjeta from "../Tarjeta/Tarjeta";
import "./Formulario.css";

const Formulario = () => {
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [nombreTarjeta, setNombreTarjeta] = useState("");
  const [fechaExpiracion, setFechaExpiracion] = useState("");
  const [numeroCcv, setNumeroCcv] = useState("");

  const onChangeNumeroTarjeta = (e) => {
    setNumeroTarjeta(e.target.value);
  };

  const onChangeNombreTarjeta = (e) => {
    setNombreTarjeta(e.target.value);
  };

  const onChangeFechaExpiracionTarjeta = (e) => {
    setFechaExpiracion(e.target.value);
  };

  const onChangeCcvTarjeta = (e) => {
    setNumeroCcv(e.target.value);
  };

  return (
    <form>
      <Tarjeta
        numeroTarjeta={numeroTarjeta}
        fechaExpiracion={fechaExpiracion}
        nombreTarjeta={nombreTarjeta}
        numeroCcv={numeroCcv}
      />

      {/*Número*/}
      <div className="container-input">
        <label>Número de Tarjeta</label>
        <input type="text" maxLength={16} onChange={onChangeNumeroTarjeta} />
      </div>

      {/*Nombre*/}
      <div className="container-input">
        <label>Nombre Tarjeta</label>
        <input type="text" onChange={onChangeNombreTarjeta} />
      </div>

      <div className="container-input-fecha-ccv">
        {/*Expiración*/}
        <div className="container-input">
          <label>Fecha Expiración</label>
          <input
            type="text"
            maxLength={6}
            onChange={onChangeFechaExpiracionTarjeta}
          />
        </div>

        {/*CCV*/}
        <div className="container-input">
          <label>CCV</label>
          <input type="text" maxLength={3} onChange={onChangeCcvTarjeta} />
        </div>
      </div>
      <button>Enviar</button>
    </form>
  );
};

export default Formulario;
