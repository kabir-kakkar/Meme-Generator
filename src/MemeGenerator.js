import React from 'react'
import './App.css'

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log (memes[0])
                this.setState({ allMemeImgs: memes })
            })
    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit (event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url

        this.setState({
            randomImg: randMemeImg
        })
    }
    render() {
        return (
            <div className="App">
                <h2>
                    Fill this to get started !
                </h2>

                <form className="form-group App" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name = "topText"
                                placeholder="Top Text"
                                value = {this.state.topText}
                                onChange= {this.handleChange}
                            />
                    </div>
                    <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name = "bottomText"
                                placeholder="Bottom Text"
                                value = {this.state.bottomText}
                                onChange= {this.handleChange}
                            />
                    </div>
                    <button className="btn btn-primary">Generate</button>
                </form>

                <div className="container">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator