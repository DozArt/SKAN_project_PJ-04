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

const Rate_item = (props) => {

    const [cleanContent, setCleanContent] = useState('');

    useEffect(() => {
        setCleanContent(cleanHtmlContent(props.content));
    }, [props.content]);

    const tagLabel = props.isTechNews ? "Технические новости" : props.isAnnouncement ? "Анонсы и события" : "Сводки новостей";

    return (
        <div className={s.item}>
            <div>
                <div className={s.article_info}>
                    <span className={s.article_date}>{props.date}</span>
                    <a href={props.url} className={s.article_source} target="_blank">{props.sourceName}</a>
                </div>
                <h5 className={s.article_title}>{props.title}</h5>
                <div className={s.article_tag}>{tagLabel}</div>
                <img src={props.picture} className={s.article_images} alt="Image article" />
                <p className={s.article_content}>{cleanContent}</p>
            </div>
            <div className={s.article_footer}>
                <form action={props.url} target="_blank">
                    <Button className={s.rate_button}>Подробнее</Button>
                </form> 
                <div className={s.world_count}>{props.wordCount} слова</div>
            </div>
        </div>
    );
};

export default Rate_item;
