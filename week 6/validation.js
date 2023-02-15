let valid = () => {
    let x = document.getElementById('name').value
    let y = document.getElementById('collage').value
    let z = document.getElementById('dept').value
    let a = document.getElementById('stid').value
    let b = document.getElementById('gen').value
    let c = document.getElementById('sem').value

    let val = /\d{2}it\d{3}$/i
    let val2 = /\d{2}it[0][0][0]$/i
    if (!val.test(a) || val2.test(a)) {
        alert('invalid ID')
        throw new Error("Invalid Id");
    }
    
    let namee = /^[a-zA-Z ]{2,30}$/
    if (!namee.test(x)) {
        alert('invalid name')
        throw new Error("Invalid name");
    }

    if(!y)
    {
        alert('chose collage')
        throw new Error("chode collage");
    }

}