let btn = document.querySelector('.btn1')
btn.addEventListener('click', async function (e) {
    e.preventDefault()

    let name = document.querySelector("input[name='name']").value
    let classes = document.querySelector("input[name='class']").value
    let id = document.querySelector("input[name='id']").value

    let resp = await axios.post('http://localhost:5000/route/user', { name, classes, id })

    console.log(resp.data)
})





let btn2 = document.querySelector('.btn2')
        btn2.addEventListener('click', async function (e) {
            e.preventDefault()

            let tbody = document.querySelector('tbody')

            let resp = await axios.get('http://localhost:5000/route/show')

            let student = resp.data.student

            tbody.innerHTML=[]
            for (let st of student) {

                let tbl = ` <tr>
            <td>${st.name}</td>  
            <td>${st.classes}</td>
            <td>${st.id}</td>
        </tr>`
       
                tbody.innerHTML += tbl
            }

            console.log(resp.data.student)

        })





let btn3 = document.querySelector('.btn3')
    btn3.addEventListener('click', async function (e) {
        e.preventDefault()

        let tbody = document.querySelector('tbody')

        let resp = await axios.get('http://localhost:5000/route/ascend')

        let student = resp.data.student

        tbody.innerHTML=[]
        for (let st of student) {

            let tbl = ` <tr>
        <td>${st.name}</td>
        <td>${st.classes}</td>
        <td>${st.id}</td>
    </tr>`
   
            tbody.innerHTML += tbl
        }

        console.log(resp.data.student)

    })





let btn4 = document.querySelector('.btn4')
    btn4.addEventListener('click', async function (e) {
        e.preventDefault()

        let tbody = document.querySelector('tbody')

        let resp = await axios.get('http://localhost:5000/route/desc')

        let student = resp.data.student

        tbody.innerHTML=[]
        for (let st of student) {

            let tbl = ` <tr>
        <td>${st.name}</td>
        <td>${st.classes}</td>
        <td>${st.id}</td>
    </tr>`
   
            tbody.innerHTML += tbl
        }

        console.log(resp.data.student)

    })



let btn5 = document.querySelector('.btn5')
btn5.addEventListener('click', async function (e) {
    e.preventDefault()

    let id = document.querySelector("input[name='id_del']").value

    let resp = await axios.delete('http://localhost:5000/route/del', {data:{id}})

    console.log(resp.data)
    console.log(id)
})