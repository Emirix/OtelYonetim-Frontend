import React from 'react'
import Sidebar from "../component/Sidebar"
import Header from "../component/Header"
import Bilgi from "../../assets/svg/bilgi.svg"
export class Index extends React.Component {
    render() {
        return (
                <div className="container index-container">
                    <h2 className="hosgeldiniz">Hoşgeldiniz</h2>
                    <p className="caption">Lorem Ipsum is simply dummy teing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                
                    <div className="bilgiler d-flex mt-5">
                        <div className="bilgi">
                            <img src={Bilgi} alt="" />
                            <div>
                                <h2>Toplam Oda</h2>
                                <h3>31</h3>
                            </div>
                        </div>

                        <div className="bilgi">
                            <img src={Bilgi} alt="" />
                            <div>
                                <h2>Toplam Oda</h2>
                                <h3>31</h3>
                            </div>
                        </div>

                        <div className="bilgi">
                            <img src={Bilgi} alt="" />
                            <div>
                                <h2>Toplam Oda</h2>
                                <h3>31</h3>
                            </div>
                        </div>

                        <div className="bilgi">
                            <img src={Bilgi} alt="" />
                            <div>
                                <h2>Toplam Oda</h2>
                                <h3>31</h3>
                            </div>
                        </div>

                        
                    </div>
                </div>
        )
    }
}

export default Index
