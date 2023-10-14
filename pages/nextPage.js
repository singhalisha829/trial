import Router from "next/router";

const NextPage = () =>{
    return(
        <div>Welcome to Next Page<br /><br/>
        <button className="bg-buttongrey rounded-sm" onClick={()=>Router.push('/')}>Go Back</button>
</div>
    )
}

export default NextPage;