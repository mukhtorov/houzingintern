import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { useRequest } from '../../hooks/useRequest';
import Filter from '../Filter';
import HouseCard from '../HouseCard';
import { Container, Title, Wrapper } from './style';

export const Proporties = () => {
  const [data, setData] = useState([]);

  const { request } = useRequest();
  const { search } = useLocation();

  useQuery(
    ['getHouses', search],
    () => request({ url: `/v1/houses/list${search || '?'}` }),
    {
      onSuccess: (res) => {
        setData(res?.dataList[0] || []);
      },
      // onError: (err) => console.log(err, 'err'),
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Container>
      <Filter />
      <div className='title center'>Proporties</div>
      <div className='description center'>
        Siz orzu qilgan, siz izlagan shinam va arzon uylar.
      </div>
      <Title className='description'>
        Total: <div className='subTitle'>{data?.length}</div>{' '}
      </Title>
      <Wrapper>
        {data.length ? (
          data.map((uy, index) => {
            return <HouseCard key={index} info={uy} />;
          })
        ) : (
          <div className='title center'>No Data Found</div>
        )}
      </Wrapper>
    </Container>
  );
};

export default Proporties;
