import React from 'react'
import MyContext from './MyContext'
import { useState } from 'react';
import { fireDB } from '../../firebase/FirebaseConfig';
import { QuerySnapshot, addDoc, collection, deleteDoc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { doc } from 'firebase/firestore';


function MyState(props) {

    // demo of how context gonna work...
    // const state={
    //     name:"vijay Jd",
    //     rollno:21
    // }

    // const color="red"

    //   in the below {state,color}  gives error so use as follows

    const [mode, setMode] = useState('light');
    const [loading,setLoading]=useState(false);

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(17, 24, 39)';
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';

        }
    }

    // product details 
    const [products, setProducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
          "en-US",
          {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }
        )
    
      })

       // ********************** Add Product Section  **********************
  const addProduct = async () => {
    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      return toast.error('Please fill all fields')
    }
    const productRef = collection(fireDB, "products")
    setLoading(true)
    try {
      await addDoc(productRef, products)
      toast.success("Product Add successfully")
      setTimeout(() => {
        window.location.href='/dashboard'
        
      }, 800);
      getProductData()
      closeModal()
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    //setProducts("")
  }

  const [product,setProduct]=useState([]);

  const getProductData=async()=>{
    setLoading(true);
    try{
        const q=query(collection(fireDB,'products'),orderBy('time'))
        const data=onSnapshot(q,(QuerySnapshot)=>{
            let productArray=[];
            QuerySnapshot.forEach((doc)=>{
                productArray.push({...doc.data(),id:doc.id});
            });
            setProduct(productArray)
            setLoading(false)
        });
        return ()=>data;
    }
   
    catch(error){
        console.log(error)
        setLoading(false)


    }
  }

  useEffect(() => {
    getProductData();
  }, []);

  const edithandle = (item) => {
    setProducts(item)
  }

  // update product 
  const updateProduct = async () => {
    setLoading(true)
    try {

        await setDoc(doc(fireDB, 'products', products.id), products)
        toast.success("Product Updated successfully")
        setTimeout(() => {
            window.location.href = '/dashboard'
        }, 800);
        getProductData();
        setLoading(false)

    } catch (error) {
        console.log(error)
        setLoading(false)
    }
}

  const deleteProduct=async(item)=>{
    setLoading(true)
    try{
        await deleteDoc(doc(fireDB,"products",item.id))
    toast.success("Product delete successfully")
    setLoading(false)
    getProductData()
    

    }catch(error){
        setLoading(false)
        console.log(error)
    }
    
  }



  // Now getting details of the product to the order page ...

  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "order"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false)
      });
      setOrder(ordersArray);
      console.log(ordersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "users"))
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setLoading(false)
      });
      setUser(usersArray);
      console.log(usersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }



  useEffect(() => {
    getProductData();
    getOrderData();
    getUserData();

  }, []);


  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')



    // now we can use mode and toggleMode anywhere we want , by using contextProvider..
    return (
        <MyContext.Provider value={{mode,toggleMode,loading,setLoading,products, setProducts,addProduct,product,edithandle,updateProduct,deleteProduct,order,user,searchkey,setSearchkey,filterPrice,setFilterPrice,filterType,setFilterType}}>
            {props.children}
        </MyContext.Provider>
        
    )
}

export default MyState
