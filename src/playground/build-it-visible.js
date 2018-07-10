const appRoot = document.getElementById('app');
let visibility = false;
const onVisibilityChange = (e) => {
    visibility = !visibility;
    render();
}

const render = () =>{
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button id="showHideDetails" onClick={onVisibilityChange}>{visibility?'Hide Details': 'Show Details'}</button>
            {visibility && (
                <div>
                    <p>Some Text</p>
                </div>
            )}
        
        </div>
    )

    ReactDOM.render(template, appRoot);
}

render();