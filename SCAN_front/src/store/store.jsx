import { makeAutoObservable } from "mobx";
import axios from 'axios'

export default class Store {
    
    baseURL = 'https://gateway.scan-interfax.ru/api/v1'

    isAuth = false


    inn = ''
    tonality = ''
    limit = ''
    startDate = ''
    endDate = ''

    setInn(value){
        this.inn = value
    }

    setLocalDataRequest(item, data) {
        localStorage.setItem(`${item}`, data)
        console.log('setLocal')
    }


    eventFiltersInfo = {
        "usedCompanyCount": 0,
        "companyLimit": 0
    }
    

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setFiltersInfo(data) {
        this.eventFiltersInfo = data
    }

    async handleLogin(login, password) {
        try {
            const response = await fetch(`${this.baseURL}/account/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    login: login,
                    password: password,
                    // Другие параметры аутентификации, если необходимо
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                const accessToken = data.accessToken;
                this.setAuth(true)
                localStorage.setItem("accessToken", accessToken)
                console.log('Login successful. Access Token:', localStorage.getItem("accessToken"));
                // Далее вы можете сохранить токен в состоянии приложения или использовать его по вашему усмотрению
            } else {
                localStorage.setItem("accessToken", accessToken)
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    async handleLogout() {
        try {
            this.isAuth = false;
            localStorage.removeItem("accessToken");
          } catch (err) {
            console.log("logout error");
          }
    }

    async checkAuth(accessToken) {
        try {
            const response = await axios.get(`${this.baseURL}/account/info`, 
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    }
                }
            )
            this.setAuth(true)
            this.setFiltersInfo(response.data.eventFiltersInfo)
            console.log('Проверка авторизации с ответом ' + this.eventFiltersInfo)
        } catch (e) {
            localStorage.setItem("accessToken", '')
            console.log(e.response.data.message);
        }
    }

    async RequestHistogram(request) {
        try {
            const response = await fetch(`${this.baseURL}objectsearch/histograms`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        issueDateInterval: {
                            startDate: new Date(request.startDate).toISOString(),
                            endDate: new Date(request.endDate).toISOString(),
                        },
                        searchContext: {
                            targetSearchEntitiesContext: {
                                targetSearchEntities: [
                                    {
                                        type: "company",
                                        sparkId: null,
                                        entityId: null,
                                        inn: request.inn,
                                        maxFullness: request.maxFullness,
                                        inBusinessNews: request.inBusinessNews,
                                    }
                                ],
                                onlyMainRole: request.onlyMainRole,
                                tonality: request.tonality,
                                onlyWithRiskFactors: request.onlyWithRiskFactors,
                                riskFactors: {
                                    and: [],
                                    or: [],
                                    not: []
                                },
                                themes: {
                                    and: [],
                                    or: [],
                                    not: []
                                }
                            },
                            themesFilter: {
                                and: [],
                                or: [],
                                not: []
                            }
                        },
                        searchArea: {
                            includedSources: [],
                            excludedSources: [],
                            includedSourceGroups: [],
                            excludedSourceGroups: []
                        },
                        attributeFilters: {
                            excludeTechNews: request.excludeTechNews,
                            excludeAnnouncements: request.excludeAnnouncements,
                            excludeDigests: request.excludeDigests,
                        },
                        similarMode: "duplicates",
                        limit: request.limit,
                        sortType: "sourceInfluence",
                        sortDirectionType: "desc",
                        intervalType: "month",
                        histogramTypes: [
                            "totalDocuments",
                            "riskFactors"
                        ]
                    }
                ),
            });
    
            if (response.ok) {
                const data = await response.json();
                const accessToken = data.accessToken;
                this.setAuth(true)
                localStorage.setItem("accessToken", accessToken)
                console.log('Login successful. Access Token:', localStorage.getItem("accessToken"));
                // Далее вы можете сохранить токен в состоянии приложения или использовать его по вашему усмотрению
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

}