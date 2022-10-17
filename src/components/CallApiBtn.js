import { useState } from "react";
import { POLYGON_API_KEY } from "../APIKEY";

const CallApiBtn = ({ stockList, setApiResponse }) => {
  const BUTTON_INTERVAL = 60;

  const [activateBtn, setActivateBtn] = useState(false);
  const [coolDown, setCoolDown] = useState(0);

  const onClickBtn = () => {
    CallApi();
    controlBtn();
  };

  const CallApi = async () => {
    setApiResponse([]);
    const results = await Promise.all(
      stockList.map(async (item) => {
        const response = await fetch(
          `https://api.polygon.io/v2/aggs/ticker/${item}/prev?adjusted=true&apiKey=${POLYGON_API_KEY}`
        );
        const json = JSON.stringify(await response.json());
        return json;
      })
    );
    setApiResponse(() => results);
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
      <button onClick={onClickBtn} disabled={activateBtn}>
        Call API
      </button>
      <span>{coolDown}</span>
    </div>
  );
};

export default CallApiBtn;
