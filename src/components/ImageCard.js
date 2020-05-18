import React from 'react'

class ImageCard extends React.Component{
    constructor(props){
        super(props)

        this.state = { span : 0}
        this.imageRef = React.createRef()
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.SetSpan)
    }

    SetSpan = () =>{
        const height = this.imageRef.current.clientHeight
        const newspan = Math.ceil(height / 10)
        this.setState({span : newspan})
    }

    render(){
        const {description, url} = this.props
        return(
            <div style={{gridRowEnd: `span ${this.state.span}`}}>
                <img ref={this.imageRef} alt={description} src={url} ></img>
            </div>
        )
    }
}

export default ImageCard