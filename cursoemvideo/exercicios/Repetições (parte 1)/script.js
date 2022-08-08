var c = 1
while (c <= 6) {
    console.log(`Passo ${c}`)
    c++ // c = c + 1
}

var d = 1
do {
    console.log(`Pulou ${d}`)
    d++
} while (d <= 6)

var e = 1
while (e <= 20) {
    if (e % 4 != 0) {
        console.log(`${e} -`)
    } else {
        console.log(`PIN`)
    }
    e++
}