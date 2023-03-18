import React from "react";
import { QRCodeSVG } from "qrcode.react";

function QrCode() {
  return (
    <div className="qr-code">
      <QRCodeSVG value="https://qrmenu01.netlify.app" />
    </div>
  );
}

export default QrCode;
