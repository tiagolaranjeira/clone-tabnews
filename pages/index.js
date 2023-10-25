function Home() {
    const mainContainerStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#f0f0f0', // Cor de fundo do contêiner principal
    };
  
    const containerStyles = [
      {
        background: '#FF5733', // Cor de fundo do primeiro contêiner
      },
      {
        background: '#33FF57', // Cor de fundo do segundo contêiner
      },
      {
        background: '#5733FF', // Cor de fundo do terceiro contêiner
      },
    ];
  
    return (
      <div style={mainContainerStyle}>
        <div style={containerStyles[0]}>
          <h1>Vocês vão ter que me engolir!</h1>
        </div>
        <div style={containerStyles[1]}>
        <h1>Vocês vão ter que me engolir!</h1>
        </div>
        <div style={containerStyles[2]}>
        <h1>Vocês vão ter que me engolir!</h1>
        </div>
      </div>
    );
  }
  
  export default Home;
  
  
  
  