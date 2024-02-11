export const arrCards = [
    '/images/furniture/f1.png',
    '/images/furniture/f2.png',
    '/images/furniture/f3.png',
    '/images/furniture/f4.png',
    '/images/furniture/f5.png',
    '/images/furniture/f6.png',
    '/images/furniture/f7.png',
    '/images/furniture/f8.png',
    '/images/furniture/f9.png',
]


arrCards.forEach(src => {
    const img = document.createElement('img')
    img.src = src

    const div = document.createElement('div')
    div.className = 'card'
    div.append(img)
})
