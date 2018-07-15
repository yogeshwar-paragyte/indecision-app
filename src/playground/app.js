class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options: this.props.options
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
    }
    handleDeleteOptions(){
        this.setState(() => ({options:[]}))
    }
    /*Life cycle methods begin*/
    componentDidMount()
     {
         try
         {
             const options = JSON.parse(localStorage.getItem('options'));
            if (options)
            {
                this.setState(() => ({options}));
            }
         }
         catch(e)
         {
             //Do nothing
         }                
    }

    componentDidUpdate(prevProps, prevState)
    {
        if (prevState.options.length != this.state.options.length)
        {
            const options = JSON.stringify(this.state.options);
            localStorage.setItem('options', options);
        }        
    }
    /*Life cycle methods end*/
    handleDeleteOption(option)
    {        
        this.setState((prevState) => 
        {
            return{
            options:prevState.options.filter((i) => {
                    return option != i;
                    })
                }
        })
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
        this.setState((prevState) => ({
                options: prevState.options.concat(option) // not using push bcoz it modifies the orignal array
           }))
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
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions handleAddOption={this.handleAddOption}/>
            </div>
        );
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
        {props.options.length === 0?<p>Please add an option to get started.</p>:<p>Here are your options:</p>}
            <ol>
            {props.options.map((option) => (
                <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}
            </ol>                
        </div>
    );
}

const Option = (props) => {
    return <div>
                {props.optionText}
                <button onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}>Remove</button>
            </div>;
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
            this.setState(() => ({error}))     
        } 
        else
        {
            this.setState(() => ({error:undefined}));
            e.target.elements.option.value = '';
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