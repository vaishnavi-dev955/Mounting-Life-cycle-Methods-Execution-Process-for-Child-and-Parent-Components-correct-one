import {Component} from 'react'

class ChildApp extends Component{
    constructor(props){
        super(props)
        this.state = {name:'varshini'}
        console.log('Construtor Method is First Method in Mouting phase and started in ChildComponent')
    }

    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps is second method in Mounting phase and started in ChildApp and started in ChildComponent')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount is Last and Fourth Method in Mounting Phase and started in ChildApp and started in ChildComponent')
    }

    render(){
        console.log('render is Third Method in Mounting Phase and started in ChildApp and started in ChildComponent')
        return(
            <div>
                <h1>Child Life Cycle Methods</h1>
            </div>
        )
    }
}

export default ChildApp