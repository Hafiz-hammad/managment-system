"use server"

export async function addRequest(data){
    let add = await fetch(`${process.env.BASE_URL}api/request`,{
        method:"POST",
        body:JSON.stringify(data),
    });
    console.log("add=>" , add   )
    add = await add?.json();
    return add;

}

