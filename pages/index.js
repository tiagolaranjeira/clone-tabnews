function Home() {
    const centerContainerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Isso define a altura da div para ocupar a altura inteira da tela
    };
  
    const centerTextStyle = {
      textAlign: 'center',
    };
  
    return (
      <div style={centerContainerStyle}>
        <h1 style={centerTextStyle}>Vocês vão ter que me engolir!</h1>
      </div>
    );
  }
  
  export default Home;