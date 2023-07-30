const getUrlFromTitle = (title: string) => {
    return `/${title.toLowerCase().split(' ').join('-')}`
}

export default getUrlFromTitle