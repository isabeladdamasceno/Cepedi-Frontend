import './estilo.css'; 

function AppContainer({ children }) {
    return (
        <div className='AppContainer'>
            {children}
        </div>
    );
}

export default AppContainer;