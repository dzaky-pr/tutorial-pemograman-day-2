// import { useState } from 'react';

// import Button from './components/atoms/Button';
import { useEffect, useState } from 'react';
import Counter from './components/atoms/Counter';
import CounterUseState from './components/atoms/CounterUseState';
import CounterWithRef from './components/atoms/UseRefExample';
import CardDzaky from './components/molecules/Card';
import Layout from './components/templates/Layout';
import { getAllCoffee } from './services/coffee.service';

const artikel = [
  {
    title: 'Gunung Sriwijaya',
    content: 'lorem lroem lerleoroe',
    link: 'ini footer',
  },
  {
    title: 'Gunung Putri',
    content: 'sdasdsadsadsadsad',
    link: 'ini footer 2',
  },
  {
    title: 'Gunung Semeru',
    content: 'dsadsadsadsdsad',
    link: 'ini footer 3',
  },
];

function App() {
  const [fetchApi, setFetchApi] = useState([]);

  useEffect(() => {
    getAllCoffee((data) => {
      setFetchApi(data);
    });
  }, []);

  console.log(fetchApi);

  return (
    <Layout>
      <div className="container flex flex-wrap gap-4 p-4">
        {fetchApi.map((item) => (
          <CardDzaky key={item._id}>
            <CardDzaky.Image src={item.image_url} />
            <CardDzaky.Header>{item.name}</CardDzaky.Header>
            <CardDzaky.Content>{item.description}</CardDzaky.Content>
            <CardDzaky.Footer>{item.price}</CardDzaky.Footer>
          </CardDzaky>
        ))}

        <div className="flex flex-col gap-4">
          {/* <div className="flex p-4 bg-green-400 h-fit w-fit">
            <Counter />
          </div> */}

          <div className="flex p-4 bg-blue-400 h-fit w-fit">
            <CounterUseState />
          </div>

          <div className="flex p-4 bg-red-200 h-fit w-fit">
            <CounterWithRef />
          </div>
        </div>

        {/* <CardDzaky title={item.title} content={item.content}>
          <CardDzaky.Header>{item.title}</CardDzaky.Header>
          <CardDzaky.Content>{item.content}</CardDzaky.Content>
          <CardDzaky.Footer>{item.link}</CardDzaky.Footer>
        </CardDzaky> */}
      </div>
    </Layout>
  );
}

export default App;
