import {Component} from 'react'

import ChildApp from '../ChildApp'

class FirstApp extends Component{
    constructor(props){
        super(props)
        this.state = {name:'vaishnavi'}
        console.log('Constructor Method is First Method in Mouting phase and Started in Parent Component')
    }

    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps is second method in Mounting phase and Started in Parent Component')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount is Last and Fourth Method in Mounting Phase and Started in Parent Component')
    }

    render(){
        console.log('render is Third Method in Mounting Phase and Started in Parent Component')
        return(
            <div>
                <h1>Life Cycle Methods</h1>
                <ChildApp/>
            </div>
        )
    }
}

export default FirstApp