import React, { useEffect, useState } from 'react';
import s from './Document_item.module.css'
import Button from '../../Button';

function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  
  function cleanHtmlContent(htmlContent) {
    const decodedHtml = decodeHtml(htmlContent);
    const cleanedContent = decodedHtml.replace(/(<([^>]+)>)/gi, "");
    return cleanedContent;
  }

const Rate = (props) => {

    const [cleanContent, setCleanContent] = useState('');

    useEffect(() => {
        setCleanContent(cleanHtmlContent(props.content));
    }, [props.content]);

    return (
        <div className={s.item}>
            <div>{props.date} Комсомольская правда KP.RU</div>
            <h5>{props.title}</h5>
            <div>Тхнические новости</div>
            <div></div>
            <p>{cleanContent}</p>
            <div>
                <Button className={s.rate_button}>Подробнее</Button>
                <div>{props.wordCount} слова</div>
            </div>
            
        </div>
    );
};

export default Rate;
