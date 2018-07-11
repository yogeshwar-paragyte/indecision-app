class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne= this.addOne.bind(this);
        this.minusOne= this.minusOne.bind(this);
        this.reset= this.reset.bind(this);
        this.state = {
            count: this.props.count   
        }
    }
    addOne(){
        this.setState((prevState) => prevState.count++)
    }
    minusOne(){
        this.setState((prevState) => prevState.count--);
    }
    reset(){
        this.setState(() => { return {count : 0}});
        //older versions used to accept objects e.g.
        //this.setState({count : 0});
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button> 
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>       
            </div>
        )
    }
}
Counter.defaultProps = {
    count:0
}
ReactDOM.render(<Counter />,document.getElementById("app"));