function Home() {
    const mainContainerStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#f0f0f0', // Cor de fundo do contêiner principal
    };
  
    const containerStyle = {
      flex: '1', // Ocupa todo o espaço disponível
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };
  
    const container1Style = {
      background: '#FF5733', // Cor de fundo do primeiro contêiner
    };
  
    const container2Style = {
      background: '#33FF57', // Cor de fundo do segundo contêiner
    };
  
    const container3Style = {
      background: '#5733FF', // Cor de fundo do terceiro contêiner
    };
  
    return (
      <div style={mainContainerStyle}>
        <div style={{ ...containerStyle, ...container1Style }}>
          <h1>Vocês vão ter que me engolir!</h1>
        </div>
        <div style={{ ...containerStyle, ...container2Style }}>
          <p>Conteúdo do segundo contêiner</p>
        </div>
        <div style={{ ...containerStyle, ...container3Style }}>
          <p>Conteúdo do terceiro contêiner</p>
        </div>
      </div>
    );
  }
  
  export default Home;
  
  
  
  