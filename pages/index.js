function Home() {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#f0f0f0', // Cor de fundo
    };
  
    const centerTextStyle = {
      textAlign: 'center',
      margin: '20px', // Margem para separar o texto do contêiner abaixo
    };
  
    return (
      <div style={containerStyle}>
        <h1 style={centerTextStyle}>Vocês vão ter que me engolir!</h1>
        <div style={centerTextStyle}>Outro texto aqui</div>
        <div style={centerTextStyle}>Mais texto</div>
      </div>
    );
  }
  
  export default Home;
  
  
  
  