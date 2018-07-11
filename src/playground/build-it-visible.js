class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility:false
        }
    }
    handleToggleVisibility(){        
        this.setState((prevState) => prevState.visibility = !prevState.visibility)
    }
    render(){
        return (
            <div>
                <h1>Visiblity Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility?'Hide Details': 'Show Details'}</button>        
                {this.state.visibility && (
                    <div>
                        <p>Some Text</p>
                    </div>
                )}
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
// const appRoot = document.getElementById('app');
// let visibility = false;
// const onVisibilityChange = (e) => {
//     visibility = !visibility;
//     render();
// }

// const render = () =>{
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button id="showHideDetails" onClick={onVisibilityChange}>{visibility?'Hide Details': 'Show Details'}</button>
//             {visibility && (
//                 <div>
//                     <p>Some Text</p>
//                 </div>
//             )}
        
//         </div>
//     )

//     ReactDOM.render(template, appRoot);
// }

// render();