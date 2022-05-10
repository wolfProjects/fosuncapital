const getCurrentLocale = () => {
    return localStorage.getItem('locale') || process.env.DEFAULT_LOCALE
};

const openNewPage = url => {
    if (!url) return;
    let link = document.createElement('a');
    link.href = url;
    link.target = "_blank";
    link.style.fontSize = '0';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const formatDateI18nFactory = format => dateText => {
    let newDate = new Date(dateText);
    let year = newDate.getFullYear();
    let month = newDate.getMonth();
    let date = newDate.getDate();
    let hours = newDate.getHours();
    let minues = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    let formattedDate = format
        .replace('yyyy', year)
        .replace('MM', month)
        .replace('dd', date)
        .replace('hh', hours)
        .replace('mm', minues)
        .replace('ss', seconds);
    return formattedDate;
};

const showDate = formatDateI18nFactory(
    ({ 'zh-Hans': 'yyyy年MM月dd日' })[getCurrentLocale()] || 'yyyy/MM/dd'
);

export default {
    openNewPage,
    showDate,
    getCurrentLocale
};