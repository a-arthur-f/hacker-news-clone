import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const Loader = ({show, children}) => {
    const [ node ] = useState(document.createElement('div'));
    const loader = document.querySelector('#loader');

    useEffect(() => {
        loader.appendChild(node).classList.add('message');
    }, [loader, node]);

    useEffect(() => {
        if(show) {
            loader.classList.remove('hide');
            document.body.classList.add('loader-open');
        } else {
            loader.classList.add('hide');
            document.body.classList.remove('loader-open');
        }

        window.scrollTo(0, 0);

    },[loader, show])

    return ReactDOM.createPortal(children, node);
}

export default Loader;