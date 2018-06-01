const ENCRYPT_URL = 'jvvr<11rke0:eqoke0ug1yr/eqpvgpv1wrnqcfu1c26el:6yl8ws26'

const CaesarCipherReverse = (str, num) => {
    str = str.toLowerCase();

    var result = '';
    var charcode = 0;

    for (var i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) - num;
        result += String.fromCharCode(charcode);
    }
    return result;
}

export const getPageFormat = (page) => ('00' + page).slice(-3)

export const linkGenerator = ({
    comicId,
    bookId,
    pageId
}) => `${CaesarCipherReverse(ENCRYPT_URL, 2)}/${comicId}/${bookId}//${pageId}.jpg`