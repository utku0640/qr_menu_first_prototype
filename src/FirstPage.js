import React from "react";
import { QRCodeSVG } from "qrcode.react";

function FirstPage() {
  return (
    <div className="container-first-page">
      <div className="card-first-page">
        <h1>Menü</h1>
        <p>TEMASSIZ MENÜ İÇİN KARE KODU TARATIN</p>
        <div className="qr-code2">
          <QRCodeSVG value="https://qrmenu01.netlify.app" />
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
