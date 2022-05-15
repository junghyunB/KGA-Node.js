import axios from "axios";

const Index = () => { 
    const handleClick = async() => {
        const result = await axios.post("http://localhost:3500/getCookie",'', {withCredentials: true})
        console.log(result.headers)
        return result
        // axios.post(주소, 바디, 헤더)
        // http get 인자값 2개
        // http post 인자값 3개
     
    } 
    return (
        <div>
            <button onClick={handleClick}>쿠키 가져오기</button>
        </div>
    ) 
}

export default Index