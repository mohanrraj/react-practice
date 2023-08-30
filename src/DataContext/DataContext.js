import { createContext, useEffect, useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import {format} from "date-fns";

const DataContext = createContext({});

export const DataProvider = ({children}) => {

    const [items, setItems] = useState([]);
    const [searchedItems, setSearchedItems] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [updatedTask, setUpdatedTask] = useState("");

    const navigate = useNavigate();

    useEffect(() => {

        const fetchData = async () => {
            try{
                const response = await api.get("/items");
                setItems([...response.data]);
            }
            catch(err){
                console.log(err.message);
            }
        }

        fetchData();

    }, [items])

    useEffect(() => {
        setSearchedItems(items.filter(item => item.task.toLowerCase().includes(searchInput.toLowerCase())))
    }, [items, searchInput])

    function findMax(){
        let max = 0;
        items.map((item) => {
            if(item.id > max){
                max = item.id;
            }
        }
        );

        return max;
    }

    async function addItem(task){

        const id = items.length === 0 ? 1 : findMax()+1;
        
        const currentTime = format(new Date(),"yyyy dd, MMMM pp");
        console.log(currentTime);
        const newItem = {id, datetime : currentTime, task};
        try{
            const response = await api.post("/items", newItem);
            navigate("/");
        }catch(err){
            console.log(err.message);
        }        
    }

    const handleDelete = async (id) => {
        // console.log(id)
        try{
            await api.delete(`/items/${id}`);
            navigate("/");
        }catch(err){
            console.log(err.message)
        }
    }

    const handleEdit = async (id) => {
        const newTime = format(new Date(), "yyyy dd, MMMM pp");
        const newItem = {id, datetime : newTime, task : updatedTask};

        items.map(item => item.id === id ? {...newItem} : item);

        try{
            const response = api.put(`/items/${id}`, newItem);
            navigate("/");
        }catch(err){
            console.log(err.message);
        }

    }

    return ( 
        <DataContext.Provider value={{
            searchInput, setSearchInput, searchedItems, addItem, handleDelete, updatedTask, setUpdatedTask, handleEdit
        }}>   
            {children}
        </DataContext.Provider>
    )
}


export default DataContext;