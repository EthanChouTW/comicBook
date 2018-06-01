import { linkGenerator, getPageFormat } from '../helpers'

export const getLink = ({ comicId = 1104, bookId = 1, page = 1 }) => {
    const bookIdFormatted = getPageFormat(bookId);
    const pageIdFormatted = getPageFormat(page);
    const url = linkGenerator({ comicId, bookId: bookIdFormatted, pageId: pageIdFormatted });
    return url
}