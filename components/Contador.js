const Contador = () => {
    
    const [contador, setContador] = React.useState (0);
    
    const aumentar = () => setContador(contador+1)
    const disminuir = () => setContador(contador-1)

    return (
        <div>
            <h1 className={contador<0 ? "negativo" : "positivo"} >Contador: {contador}</h1>
            <hr/>
            <button onClick={aumentar}>AUMENTAR</button>
            <button onClick={disminuir}>DISMINUIR</button>
        </div>    
    );
};