import { useState } from "react";
import "./App.css";

function App() {
  const BUTTON_INTERVAL = 20;

  const [activateBtn, setActivateBtn] = useState(false);
  const [coolDown, setCoolDown] = useState(0);

  const onClickBtn = () => {
    console.log("데이터 불러오는 중...");
    controlBtn();
  };

  const controlBtn = () => {
    setActivateBtn(true);

    setCoolDown(BUTTON_INTERVAL);
    const timer = setInterval(
      () => setCoolDown((current) => current - 1),
      1000
    );

    setTimeout(() => {
      setActivateBtn(false);
      clearInterval(timer);
    }, BUTTON_INTERVAL * 1000);
  };

  return (
    <div>
      <h2>버튼이 클릭된 후 {BUTTON_INTERVAL}초간 클릭할 수 없게 만들기</h2>
      <button onClick={onClickBtn} disabled={activateBtn}>
        Call API
      </button>
      <span>{coolDown}</span>
    </div>
  );
}

export default App;
