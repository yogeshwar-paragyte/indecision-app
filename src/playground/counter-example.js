const appRoot = document.getElementById('app');
// This is example two
const user = {
    name:'Yogeshwar',
    age:18,
    location:'Pune'
}

function getUser(user){
    if(user)
    {
        return (<div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>} 
        <p>Location: {getLocation(user.location)}</p>  
        </div>
        );
    }
    else
    {
        return 'user not found!!!'
    }
}

function getLocation(location){
    if(location)
    {
        return location
    }else
    {
        return 'Unknown'
    }   
}

const template2 = (
    <div>{getUser(user)}</div>
);


//This is example three
let count = 0;
const addOne = () => {
    count++;
    randerCounterApp();
}

const minusOne = () => {
    count--;
    randerCounterApp();
}

const reset = () => {
    count = 0;
    randerCounterApp();
}

const randerCounterApp = () => {
    const template3 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button> 
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(template3, appRoot);
}

randerCounterApp();