class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options: this.props.options
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
    }
    handleDeleteOptions(){
        this.setState(() => {return {options:[]}})
    }
    handleAddOption(option){        
        if(!option)
        {
            return 'Enter a valid value to add item.';
        }
        else if (this.state.options.indexOf(option) > -1)
        {
            return 'This option already exists';
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option) // not using push bcoz it modifies the orignal array
            }
        })
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        console.log(this.state.options[randomNum]);
    }
    render(){
        const subtitle = 'Put your life in the hands of a computer';    
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOptions handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}
const Header = (props)=> {    
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title:"Indicision"
}

const Action = (props) => {
    return (
    <div>
        <button 
            onClick = {props.handlePick}
            disabled = {!props.hasOptions}
        >
            What should I do?
        </button>
    </div>
    ); 
}

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        <p>Here are your options:</p>
            <ol>
            {props.options.map((option) => <Option key={option} optionText={option}/>)}
            </ol>                
        </div>
    );
}

const Option = (props) => {
    return <li key={props.optionText}>{props.optionText}</li>;
}
class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error:undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        if(error)
        {
            this.setState(() => {return {error}})     
        }        
    }
    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
          </form>
          </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options:[]
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app')) 