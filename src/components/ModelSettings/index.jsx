import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { carsModel, modelColors } from 'config/config';

// Components
import ModelSlider from './Slider';
import Description from './Description';
import Configurator from './Configurator';

// Styles
import { Wrap, ContentWrap } from './styled';

const ModelSettings = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [defaultData, setDefaultData] = useState({});

  const findColor = modelColors.find((item) => item.id === data.id);

  useEffect(() => {
    const car = carsModel.find((item) => item.id === +id);
    setData(car !== -1 ? {
      ...car,
      totalPrice: car.price,
      colorPrice: 0,
      salonPrice: 0,
      wheelPrice: 0,
    } : {});
    setDefaultData(car !== -1 ? {
      ...car,
      totalPrice: car.price,
      colorPrice: 0,
      salonPrice: 0,
      wheelPrice: 0,
    } : {});
  }, [id]);

  const handleColorChange = (colorItem) => {
    setData({
      ...data,
      color: colorItem.colorName,
      colorPrice: defaultData.color === colorItem.colorName ? 0 : colorItem.price,
      image: findColor?.model === data?.title ? findColor?.colors[`${colorItem.colorName}`] : data?.image,
      totalPrice: defaultData.color === colorItem.colorName
        ? defaultData.price
        : defaultData.price + colorItem.price,
    });
  };

  const handleSalonChange = (salonType) => {
    setData({
      ...data,
      salon: salonType.type,
      salonPrice: defaultData.salon === salonType.type ? 0 : salonType.price,
      totalPrice: defaultData.salon === salonType.type
        ? defaultData.price
        : defaultData.price + salonType.price,
    });
  };

  const handleWheelChange = (wheelType) => {
    setData({
      ...data,
      wheel: wheelType.wheel,
      wheelPrice: defaultData.wheel === wheelType.wheel ? 0 : wheelType.price,
      totalPrice: defaultData.wheel === wheelType.wheel
        ? defaultData.price
        : defaultData.price + wheelType.price,
    });
  };

  const handleDefaultData = () => {
    setData(defaultData);
  };

  const totalAmount = data.colorPrice + data.salonPrice + data.wheelPrice + defaultData.totalPrice;

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
          handleDefaultData={handleDefaultData}
          totalPrice={totalAmount}
        />
      </div>
    </Wrap>
  );
};

export default ModelSettings;
