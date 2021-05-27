import React from 'react'
import OdaListItem from '../component/OdaListItem'
import axios from "axios";
import Spinner from "../../Spinner/Spinner"
export class OdaListesi extends React.Component {

    constructor(){
        super();
        this.state={
            odalar: null
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/api/oda-listesi").then(res=>{
            this.setState({odalar:res.data})
        })
    }


    render() {
        return (
            <div className="container odalist-container">
                <div style={{marginTop:"7rem"}}>
                      
         
                {this.state.odalar == null ?
                
                <div className="spinner d-flex align-items-center justify-content-center">
                <Spinner color="#61dafb" size={120} width={20}/>
                 </div>
                    
                    :
    <>
                {this.state.odalar.map(val=>{
                    return(
                        <OdaListItem
                        key={val.id}
                        odaIsmi={val.odaAdi}
                        dolu={val.dolu}
                        toplamSatis={val.satislar[0]}
                        buAykiSatis={val.satislar[1]}
                        bilgi={val.satislar[2]}
                        resim={val.resim}
                        />
                    )
                })}
    </>
                }
                
                </div>
            </div>
        )
    }
}

export default OdaListesi
