var btnhash = document.querySelector('.btn')

let getValue = () => {
    var hashInput = document.querySelector('.input').value
    if (hashInput.length == 0)
    console.log('error')
    else
    console.log(hashInput)

    var crypted=sha1(hashInput)
    alert(crypted)

    return hashInput
}

btnhash.addEventListener('click', getValue);