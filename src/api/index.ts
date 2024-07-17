import axios from "axios";

interface IPost {
    userId: number
    id: number
    title: string
    body: string
}

export const fetchData = async () => {
    try {
        const fetchedData: { data: IPost[] } = await axios.get<IPost[]>(
            `https://jsonplaceholder.typicode.com/posts`
        )
        return fetchedData
    } catch (e) {
        console.error(e);
    }
}