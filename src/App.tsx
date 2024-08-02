import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Input from "./ui-kit/Input/Input";
import Button from "./ui-kit/Button/Button";
import "./App.css";
import "./styles/constants.css";
import "./styles/font.css";
import { getMatchPercentage } from "./utils/getMatchPercentage";
import Composition from "./modules/Composition/Composition";
import { fakePromise } from "./utils/fakePromise";
import Modal from "./ui-kit/Modal/Modal";

const TARGET_WORD = "1234";

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const matchPercentage = getMatchPercentage(inputValue, TARGET_WORD);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);


  useEffect(() => {
    setIsLoading(true)
    fakePromise(300).finally(() => setIsLoading(false))
  }, [inputValue])

  const checkValueHandler = () => {
    if(inputValue === TARGET_WORD) {
      setIsOpen(true)
    }
  }

  return (
    <motion.div
      className="App"
      initial={{ backgroundColor: "white" }}
      animate={{ backgroundColor: 'skyblue' }}
      transition={{ duration: 1 }}
      style={{ height: "100vh" }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          width: "100%",
          height: "300px",
        }}
      >
        <Composition progress={matchPercentage} />

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2>Поздравляем с тем, что вы успешно справились с задачей!</h2>
        </Modal>

        <Input
          inputRef={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Введите текст"
          disabled={isLoading}
          style={{
            width: 190,
          }}
        />
        <Button
          isLoading={isLoading}
          onClick={checkValueHandler}
          progress={matchPercentage}
          style={{
            width: 220,
          }}
          disabledStyle={{
            backgroundColor: "#ffefc1",
            color: "#ffab91",
          }}
        >
          Проверить
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default App;
