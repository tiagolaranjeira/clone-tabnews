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
      background: '#00FFFF', // Cor de fundo do primeiro contêiner
    };
  
    const container2Style = {
      background: '#E6E6FA', // Cor de fundo do segundo contêiner
    };
  
    const container3Style = {
      background: '#F0FFF0', // Cor de fundo do terceiro contêiner
    };
  
    const textStyle = {
      textAlign: 'center', // Centraliza horizontalmente o texto
    };
  
    return (
      <div style={mainContainerStyle}>
        <div style={{ ...containerStyle, ...container1Style }}>
            <h1 style={textStyle}>Vocês vão ter que me engolir!</h1>
        </div>
        <div style={{ ...containerStyle, ...container2Style }}>
            <h1 style={textStyle}>Vocês vão ter que me engolir!</h1>
        </div>
        <div style={{ ...containerStyle, ...container3Style }}>
            <h1 style={textStyle}>Vocês vão ter que me engolir!</h1>
        </div>
      </div>
    );
  }
  
  export default Home;
  
  
  
  