import './App.css';
import CryptoJS from 'crypto-js';
import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const cifrar = () => {
    const textoCifrado = CryptoJS.AES.encrypt(inputText, 'clave-secreta').toString();
    setEncryptedText(textoCifrado);
  };

  const descifrar = () => {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedText, 'clave-secreta');
      const textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
      setDecryptedText(textoDescifrado);
    } catch (error) {
      setDecryptedText('Error al descifrar');
    }
  };

  return (
    <div className="App">
      <h1>Formulario de Cifrado</h1>

      <input
        type="text"
        placeholder="Introduce un texto"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <br /><br />

      <button onClick={cifrar}>Cifrar texto</button>

      <p><strong>Texto cifrado:</strong> {encryptedText}</p>

      <button onClick={descifrar}>Descifrar texto</button>

      <p><strong>Texto descifrado:</strong> {decryptedText}</p>
    </div>
  );
}

export default App;
