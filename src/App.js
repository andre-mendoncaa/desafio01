import Input from "./Components/Input";
import Button from "./Components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleHalfClear = () => {
    setCurrentNumber('0');
  };
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handleSubNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    }else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub))
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handleMultiNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*')
    }else {
      const multi = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multi))
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handleDivNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/')
    }else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div))
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handlePerNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('%')
    }else {
      const per = Number(firstNumber) * (Number(currentNumber) / 100);
      setCurrentNumber(String(per.toFixed(2)))
      setFirstNumber('0');
      setOperation('');
    }
  };

  const handleBackspace = () => {
    if(currentNumber.length > 1){
      setCurrentNumber(prev => prev.slice(0, -1));
    } else{
      setCurrentNumber('0');
    }
    
  };
  
  

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubNumbers();
          break;
        case '*':
          handleMultiNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        case '%':
          handlePerNumbers();
          break;
        default:
          break;
      }
    }
  }
  return (
    <Container>
      <Content>
      <Input value = {currentNumber}></Input>
      <Row>
        <Button label="%"  onClick={handlePerNumbers}></Button>
        <Button label="CE" onClick={handleHalfClear}></Button>
        <Button label="C"  onClick={handleOnClear}></Button>
        <Button label="<" onClick={handleBackspace}></Button>
      </Row>
      <Row>
        <Button label="7" onClick={() => handleAddNumber('7')}></Button>
        <Button label="8" onClick={() => handleAddNumber('8')}></Button>
        <Button label="9" onClick={() => handleAddNumber('9')}></Button>
        <Button label="x" onClick={handleMultiNumbers}></Button>
      </Row>
      <Row>
        <Button label="4" onClick={() => handleAddNumber('4')}></Button>
        <Button label="5" onClick={() => handleAddNumber('5')}></Button>
        <Button label="6" onClick={() => handleAddNumber('6')}></Button>
        <Button label="-" onClick={handleSubNumbers}></Button>
      </Row>
      <Row>
        <Button label="1" onClick={() => handleAddNumber('1')}></Button>
        <Button label="2" onClick={() => handleAddNumber('2')}></Button>
        <Button label="3" onClick={() => handleAddNumber('3')}></Button>
        <Button label="+" onClick={handleSumNumbers}></Button>
      </Row>
      <Row>
        <Button label="/" onClick={handleDivNumbers}></Button>
        <Button label="0" onClick={() => handleAddNumber('0')}></Button>
        <Button label="." onClick={() => handleAddNumber('.')}></Button>
        <Button label="=" onClick={handleEquals}></Button>
      </Row>
      </Content>
    </Container>
  );
}

export default App;
