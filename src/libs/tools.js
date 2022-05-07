const openNewPage = url => {
    if (!url) return;
    var link = document.createElement('a');
    link.href = url;
    link.target = "_blank";
    link.style.fontSize = '0';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export default {
    openNewPage
};