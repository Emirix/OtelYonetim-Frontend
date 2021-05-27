import React, { Component } from "react";
import Otel1 from "../../assets/img/otel/otel1.jpg";
import Otel2 from "../../assets/img/otel/otel2.jpg";
import Otel3 from "../../assets/img/otel/otel3.jpg";

export class OdaListItem extends Component {
  render() {
    return (
      <div className="oda-list-item">
        <div className="sol">
          <div className="oda-list-item__title">{this.props.odaIsmi}</div>

          <div className="oda-list-item__status">
            {this.props.dolu ? (
              <div className="oda-list-item__status-item c-r">
                <div className="ball"></div>
                <div className="status">Oda Dolu</div>
              </div>
            ) : (
              <div className="oda-list-item__status-item c-g">
                <div className="ball"></div>
                <div className="status">Oda Dolu</div>
              </div>
            )}
          </div>

          <div className="satislar mt-4">
            <div className="satis-title">
              Satış Sayısı: <span>{this.props.toplamSatis}</span>
            </div>
            <div className="satis-title">
              Bu ayki satış: <span>{this.props.buAykiSatis}</span>
            </div>
            <div className="satis-title">
              Bilgi: <span>{this.props.bilgi}</span>
            </div>
          </div>

          <div className="mt-4">
            <button className="btn btn-primary me-2">Buton</button>
            <button className="btn btn-danger me-2">Buton</button>
            <button className="btn btn-success me-2">Buton</button>
          </div>
        </div>

        <div className="sag">
          <div className="d-flex">
            <div className="main-image">
              <img src={this.props.resim} alt="" />
            </div>
            <div className="img-list">
              <img src={Otel1} alt="" />
              <img src={Otel2} alt="" />
              <img src={Otel3} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OdaListItem;
