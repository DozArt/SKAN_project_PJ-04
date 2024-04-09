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
    return (
        <div className={s.unit}>
            <h2 className={s.title}>список документов</h2>
            <div className={s.ListDocuments}>
                {articles.slice(0, displayedArticles).map((article, index) => (
                    <Rate_item key={index} {...article} />
                ))}

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