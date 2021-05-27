import React from "react";
import OdaListItem from "../component/OdaListItem";
import axios from "axios";
import Spinner from "../../Spinner/Spinner";
export class OdaListesi extends React.Component {
  constructor() {
    super();
    this.state = {
      rez: null,
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/rez-listesi").then((res) => {
      this.setState({ rez: res.data });
    });
  }

  render() {
    return (
      <div className="container rezlist-container">
        <div style={{ marginTop: "7rem" }}>
        <h1 className="text-white mb-5">
            Bugün gece 2den önce bitmesi için burdaki tabloyu direk bootstrapden çekiyorum.
        </h1>
          {this.state.rez == null ? (
            <div className="spinner d-flex align-items-center justify-content-center">
              <Spinner color="#61dafb" size={120} width={20} />
            </div>
          ) : (
            <>
              <table class="table table-striped bg-white">
                <thead>
                  <tr>
                    <th scope="col">REZ ID</th>
                    <th scope="col">İsim Soyad</th>
                    <th scope="col">Oda</th>
                    <th scope="col">Tarih</th>
                  </tr>
                </thead>
                <tbody>

                {this.state.rez.map(val=>{
                    return(
                    <tr>
                        <th scope="row">{val.id}</th>
                        <td>{val.isim}</td>
                        <td>{val.oda}</td>
                        <td>{val.tarih}</td>
                      </tr>    
                    )
                })}

                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default OdaListesi;
