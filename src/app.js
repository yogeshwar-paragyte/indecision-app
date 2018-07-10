class IndecisionApp extends React.Component{
    render(){
        const title = 'Indicision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Two', 'Three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOptions options={options}/>
            </div>
        )
    }
}
class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component{
    constructor(props){
        super(props);
        this.handlePick = this.handlePick.bind(this);
    }
    handlePick(){
        alert('asdasdas');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }    
}

class Options extends React.Component{
    constructor(props)
    {
        super(props);
        // const a = this.handleRemoveAll;
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        // const b = this.handleRemoveAll;
        // if (a==b){
        //     console.log('a==b');
        // }
        // if (a===b){
        //     console.log('a===b');
        // }
        // console.dir(a);
        // console.dir(b);
    }
    handleRemoveAll(){
        console.log(this.props.options);
    }
    render(){
        
        return (
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
            <p>Here are your options:</p>
                <ol>
                {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
                </ol>                
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return <li key={this.props.optionText}>{this.props.optionText}</li>;
    }
}
class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option){
            this.props.options.push(option);
            //Options.rander();
        }
        
    }
    render(){
        return (
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
          </form>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app')) 