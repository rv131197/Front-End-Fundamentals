
const fakeRequest = url => {
    const rand = Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(rand<0.7){
                resolve('HURRRAYYY!!')
            }
                reject("YYAAYYA, NOOOn WRINGGG!!")
        }, 1000)
    })
}

fakeRequest('dogs/1')
.then((data) => {
    console.log('DONEEE!!!')
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})







