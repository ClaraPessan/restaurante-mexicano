import Item from './Item';
import cardapiopratos from './itens.json'
import { useState, useEffect } from 'react'
import styles from './Item/Item.module.scss'

interface Props {
  busca: string,
  ordenador: string
}

export default function Itens(props: Props) {
  const [lista, setLista] = useState(cardapiopratos);
  const { busca, ordenador } = props;

    function testaBusca(title: string) {
        const regex = new RegExp(busca, 'i');
        return regex.test(title);
    }

    function ordenar(novaLista: typeof cardapiopratos) {
      switch(ordenador) {
        case 'burrito': 
          return novaLista.sort((a, b) => {
            if (a.category.label === 'Burritos' && b.category.label === 'Burritos') {
              return 0;
            } else if (a.category.label === 'Burritos') {
              return -1;
            } else if (b.category.label === 'Burritos') {
              return 1;
            } else {
              return a.category.label > b.category.label ? 1 : -1;
            }
          });
        case 'guacamole': 
          return novaLista.sort((a, b) => {
            if (a.category.label === 'Guacamole' && b.category.label === 'Guacamole') {
              return 0;
            } else if (a.category.label === 'Guacamole') {
              return -1;
            } else if (b.category.label === 'Guacamole') {
              return 1;
            } else {
              return a.category.label > b.category.label ? 1 : -1;
            }
          });
        case 'taco': 
          return novaLista.sort((a, b) => {
            if (a.category.label === 'Tacos' && b.category.label === 'Tacos') {
              return 0;
            } else if (a.category.label === 'Tacos') {
              return -1;
            } else if (b.category.label === 'Tacos') {
              return 1;
            } else {
              return a.category.label > b.category.label ? 1 : -1;
            }
          });
        case 'nacho': 
          return novaLista.sort((a, b) => {
            if (a.category.label === 'Nachos' && b.category.label === 'Nachos') {
              return 0;
            } else if (a.category.label === 'Nachos') {
              return -1;
            } else if (b.category.label === 'Nachos') {
              return 1;
            } else {
              return a.category.label > b.category.label ? 1 : -1;
            }
          });
        case 'preco':
          return novaLista.sort((a,b) => a.price > b.price ? 1 : -1);
        default:
          return novaLista; 
      }
    }
    
    useEffect(() => {
        const novaLista = cardapiopratos.filter(item => testaBusca(item.title));
        setLista(ordenar(novaLista));
    },[busca, ordenador])

    return (
        <div className={styles.cards}>
          {lista.map(item => (
            <Item key={item.id} {...item} />
          ))}
        </div>
    )
}