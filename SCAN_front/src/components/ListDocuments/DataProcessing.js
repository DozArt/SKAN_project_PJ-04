const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
};

export const combineDataByDate = (data) => {
    const combinedData = {};

    data.forEach(histogram => {
        histogram.data.forEach(item => {
            const dateKey = item.date.split('T')[0];
            if (!combinedData[dateKey]) {
                combinedData[dateKey] = { period: formatDate(dateKey), total: 0, risks: 0 };
            }
            if (histogram.histogramType === 'totalDocuments') {
                combinedData[dateKey].total += item.value;
            } else if (histogram.histogramType === 'riskFactors') {
                combinedData[dateKey].risks += item.value;
            }
        });
    });

    return Object.values(combinedData).sort((a, b) => new Date(a.period) - new Date(b.period));
};