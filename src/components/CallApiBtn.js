import { useState } from "react";
import { POLYGON_API_KEY } from "../APIKEY";

const CallApiBtn = ({ stockList, setApiResponse }) => {
  const CALL_INTERVAL = 60;

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
        try {
          const json = JSON.stringify(
            await (
              await fetch(
                `https://api.polygon.io/v2/aggs/ticker/${item}/prev?adjusted=true&apiKey=${POLYGON_API_KEY}`
              )
            ).json()
          );
          return json;
        } catch {
          return item;
        }
      })
    );

    setApiResponse(() => results);
  };

  const controlBtn = () => {
    setActivateBtn(true);
    setCoolDown(CALL_INTERVAL);
    const timer = setInterval(
      () => setCoolDown((current) => current - 1),
      1000
    );

    setTimeout(() => {
      setActivateBtn(false);
      clearInterval(timer);
    }, CALL_INTERVAL * 1000);
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
