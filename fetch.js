async function fetchData() {
    // console.log("adfasf");
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        console.log(response);
        if (response.status === 200) {
            const data = await response.json();// showing the response in json 
            console.log(data);
        }
    }
    catch (error) {
        console.log("the erro is ", error);
    }
}
// fetchData()


async function postData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'post',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                title:'akash',
                body: 'this is my body',
                userId: 1
            })
            
        })
        console.log(response);
        if(response.status===201){
            const data= await response.json()
            console.log(data);
        }

    } catch (error) {
    console.log(error);
    }
}
postData()