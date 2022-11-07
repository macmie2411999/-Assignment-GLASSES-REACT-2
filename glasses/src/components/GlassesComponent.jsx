import React, { Component } from 'react';
import style from './GlassesComponent.module.css';

const data = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
];

export default class ChangeGlasses extends Component {
    state = {
        id: "",
        price: "",
        name: "",
        url: "",
        desc: "Choose a glasses below!"
    }
    renderGlasses = () => {
        return data.map((glassesOB, index) => {
            return (
                <div className='glasses-collection col-2' key={index}>
                    <button className={`${style["btn-glass"]}`} onClick={() => {
                        this.setState({
                            id: glassesOB.id,
                            price: glassesOB.price,
                            name: glassesOB.name,
                            url: glassesOB.url,
                            desc: glassesOB.desc
                        })
                    }}>
                        <img className='w-100' src={glassesOB.url} />
                    </button>
                </div>
            )
        })
    }

    render() {
        return (
            <div className={`${style["background"]}`}>
                <div className="carousel">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5 mx-auto">
                            <div className={`${style["image"]}`}>
                                <img className={`${style["glass"]}`} src={this.state.url} alt="." />
                                <div className={`${style["detail"]}`}>
                                    <h1 className={`${style["name"]}`}>{this.state.name}</h1>
                                    <p className={`${style["description"]}`}>{this.state.desc}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5 mx-auto">
                            <img class= {`${style["default-model"]}`} src="./glassesImage/model.jpg" alt="" />

                        </div>
                    </div>
                </div>

                <div className="list-glasses pt-5 mx-5">
                    <div className="container">
                        <div className={`${style["list-glasses-rendered"]} row`}>
                            {this.renderGlasses()}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
