
function mailValidation(e) {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const value = e.target.value
    return EMAIL_REGEXP.test(value)
}

function phoneValidation(e){
    const PHONE_REGEXP = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/
    const value = e.target.value
    return PHONE_REGEXP.test(value)
}

function nameValidation(e) {
    const NAME_REGEXP = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/
    const value = e.target.value
    return NAME_REGEXP.test(value)
}

function addressValidation(e) {
    const ADDRESS_REGXP = /\d{6}[\s]*[г.]*\s*[А-Яа-я-]{2,}[\s]*[ул|пер|пр|б-р]*\.\s*[А-Яа-я-]{2,}[\s]*[д]*\s*\d{1,3}[\\\d{1,3}]*[\s-]*[кв]*\s*\d{1,3}\s*/gmi
    const value = e.target.value
    return ADDRESS_REGXP.test(value)
}

function zipValidation(e) {
    const ZIP_REGXP = /(^\d{5}$)|(^\d{5}-\d{4}$)/
    const value = e.target.value
    return ZIP_REGXP.test(value)
}

export {mailValidation, nameValidation, phoneValidation, addressValidation, zipValidation}