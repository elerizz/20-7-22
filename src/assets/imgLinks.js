const imgLinks = []

for (let i = 0; i < 5; i++) {
    imgLinks[i] = {
        url: `https://picsum.photos/200?${i}`,
        id: i,
    };
}

export default imgLinks