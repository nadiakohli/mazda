import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { carsModel, modelColors } from 'config/config';

// Components
import ModelSlider from './Slider';
import Description from './Description';
import Configurator from './Configurator';

// Styles
import { Wrap, ContentWrap, ImgWrap } from './styled';

const ModelSettings = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [defaultData, setdefaultData] = useState({});
  const [cost, setCost] = useState({ colorPrice: 0, salonPrice: 0, wheelsPrice: 0 });

  const findColor = modelColors.find((item) => item.id === data.id ? item.colors : '');

  useEffect(() => {
    const car = carsModel.find((item) => item.id === +id);
    setData(car !== -1 ? { ...car, totalPrice: car.price } : {});
    setdefaultData(car !== -1 ? { ...car, totalPrice: car.price } : {});
  }, [id]);

  const handleColorChange = (colorItem) => {
    setData({
      ...data,
      color: colorItem.colorName,
      image: findColor?.model === data?.title ? findColor?.colors[`${colorItem.colorName}`] : data?.image,
      totalPrice: defaultData.color === colorItem.colorName
        ? defaultData.price
        : defaultData.price + colorItem.price,
    });
    setCost({ ...cost, colorPrice: defaultData.color === colorItem.colorName ? 0 : colorItem.price });
  };

  const handleSalonChange = (salonType) => {
    setData({
      ...data,
      salon: salonType.type,
      totalPrice: defaultData.salon === salonType.type
        ? defaultData.price
        : defaultData.price + salonType.price,
    });
    setCost({ ...cost, salonPrice: defaultData.salon === salonType.type ? 0 : salonType.price });
  };

  const handleWheelChange = (wheelType) => {
    setData({
      ...data,
      wheel: wheelType.wheel,
      totalPrice: defaultData.wheel === wheelType.wheel
        ? defaultData.price
        : defaultData.price + wheelType.price,
    });
    setCost({ ...cost, wheelsPrice: defaultData.wheel === wheelType.wheel ? 0 : wheelType.price });
  };

  const sumPrices = Object.values(cost).reduce((a, b) => a + b, 0);
  const totalAmount = sumPrices + defaultData.totalPrice;

  return (
    <Wrap>
      <ContentWrap>
        <ModelSlider images={data?.image} />
        <Description data={data} totalPrice={totalAmount} />
      </ContentWrap>
      <div>
        <Configurator
          data={data}
          handleColorChange={handleColorChange}
          handleSalonChange={handleSalonChange}
          handleWheelChange={handleWheelChange}
          totalPrice={totalAmount}
        />
      </div>
    </Wrap>
  );
};

export default ModelSettings;
