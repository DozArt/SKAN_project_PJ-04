import React, {useContext, useEffect, useState, useRef } from 'react';
import s from './ListDocuments.module.css'
import Rate_item from './components/Document_item'
import { Context } from '@/main'
import Loading from '../Loading';
import mock_article_1_picture from 'img/mock_article_1_picture.png';





const ListDocuments = () => {
    const {store} = useContext(Context)
    const [isLoading, setIsLoading] = useState(false);
    const [displayedArticles, setDisplayedArticles] = useState(2); 
    const [documentsData, setDocumentsData] = useState(null);
    const [articles, setArticles] = useState([]);

    const showMoreArticles = () => {
        setDisplayedArticles(prev => prev + 2);
      };

    const fetchSearchResults = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${store.baseURL}/objectsearch`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify(
                    store.bodyHistograms
                ),
            });

            const data = await response.json();
            const publicationIds = data.items.map(item => item.encodedId);

            const fetchSearchDocument = await fetch(`${store.baseURL}/documents`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify({ ids: publicationIds }),
            });

            if (fetchSearchDocument.ok) {
                console.log('успешное получение документа');
                const documentsData = await fetchSearchDocument.json();
                setDocumentsData(documentsData);
            } else {
                console.error('ошибка получения документа');
            }
            
            


        } catch (error) {
            console.error('Error during request:', error);
        } finally {
            setIsLoading(false);
        }
    }


    // плучение документов
    

    useEffect(() => {
        if (Object.keys(store.bodyHistograms).length == 0) {
            setIsLoading(true)
        } else {
            fetchSearchResults()
        }
    }, []);

    useEffect(() => {
        if (documentsData && Array.isArray(documentsData)) { 
            const transformedArticles = documentsData.map(doc => ({
                date: new Date(doc.ok.issueDate).toLocaleDateString("ru-RU"),
                url: doc.ok.url,
                sourceName: doc.ok.source.name,
                isTechNews: doc.ok.attributes.isTechNews,
                isAnnouncement: doc.ok.attributes.isAnnouncement,
                isDigest: doc.ok.attributes.isDigest,
                title: doc.ok.title.text,
                content: doc.ok.content.markup,
                wordCount: doc.ok.attributes.wordCount,
                picture: mock_article_1_picture, 
            }));
        
            setArticles(transformedArticles);
            }
        }, [documentsData]);
    const test1 = {
        title: 'qweqweqwe',
        date: '13.09.2021',
        wordCount: '123',
        url: '/',
        sourceName: 'Комсомольская правда KP.RU',
        picture: '',
        picture: mock_article_1_picture,
        content: "SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях. Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.",
    }
    const test2 = {
        title: 'asdasdasdasdasdasd',
        date: '13.09.2023',
        wordCount: '321',
        url: '/',
        sourceName: 'VC.RU',
        picture: '',
        picture: mock_article_1_picture,
        content: 'Кто такой Data Scientist и чем он занимается? Data Scientist — это специалист, который работает с большими массивами данных, чтобы с их помощью решить задачи бизнеса. Простой пример использования больших данных и искусственного интеллекта — умные ленты в социальных сетях. На основе ваших просмотров и лайков алгоритм выдает рекомендации с контентом, который может быть вам интересен. Эту модель создал и обучил дата-сайентист, и скорее всего, не один. В небольших компаниях и стартапах дата-сайентист делает все: собирает и очищает данные, создает математическую модель для их анализа, тестирует ее и презентует готовое решение бизнесу.',
    }
    return (
        <div className={s.unit}>
            <h2 className={s.title}>список документов</h2>
            <div className={s.ListDocuments}>
                {articles.slice(0, displayedArticles).map((article, index) => (
                    <Rate_item key={index} {...article} />
                ))}
                {/* <Rate_item key='1' {...test1} />
                <Rate_item key='2' {...test2} /> */}

            </div>
            {displayedArticles < articles.length && (
                <div className="button-div">
                    <button className="button show-more" onClick={showMoreArticles} >Показать больше</button>
                </div>
            )}
        </div>
    );
};

export default ListDocuments;