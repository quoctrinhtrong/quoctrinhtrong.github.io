import React, {useState, useEffect} from 'react';
import './Home.scss';
import BoxColor from './component/BoxColor';
import ToDoList from './component/ToDoList';
import ToDoForm from './component/ToDoForm';
import PostList from './component/PostList';
import Pagination from './component/Pagination';
import queryString from 'query-string';
import PostFiltersForm from './component/PostFiltersForm';
import Clock from './component/Clock';
import BetterClock from './component/BetterClock';
import MagicBox from './component/MagicBox';

function Home() {
  const [todos, setToDos] = useState([
    {id: 1, title:'Learn React Hooks'},
    {id: 2, title:'Learn Typescript'},
    {id: 3, title:'Learn Mobx'},
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page:1,
    _limit:10,
    _totalRows:11,
  });
  const [filters, setFilters] = useState({
    _limit:10,
    _page:1,
  });
  const [showClock, setShowClock] = useState(true);


  useEffect(() => {
    const fetchPostList = async() => {
      console.log('fetchPostList');
      try {
        const paramString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const resp = await fetch(requestUrl);
        const respJson = await resp.json();
        const {data, pagination} = respJson;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Error fetch post list: ', error.message);
      }

    }
    fetchPostList();
  }, [filters])

  useEffect(()=> {
    console.log('Use Effect 2');
  },[])

  const handlePageChange = (newPage) => {
    setFilters({
      ...filters,
      _page:newPage
    })
  }

  const handleOnClick = (id) => {
    console.log(id);
    let todoIndex = todos.findIndex(item => item.id === id);
    if (todoIndex !== -1) {
      let todosClone = [...todos];
      todosClone.splice(todoIndex,1);
      setToDos(todosClone);
    }
  }

  const onSubmit = (values) => {
    console.log(values);
    const newToDoList = [...todos];
    const newToDo = {
      id: newToDoList.length + 1,
      ...values,
    }
    newToDoList.push(newToDo);
    setToDos(newToDoList);
  }

  // Handle search debouce
  const hanldeFiltersChange = (newFilters) => {
    console.log("newFilters: ",newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.filters
    })
  }

  return (
    <div className="app">
      <h1 className="app__title">Hello Hooks</h1>
      {/* <BoxColor/> */}
      {/* <ToDoForm onSubmit={onSubmit}/>
      <ToDoList todos={todos} onToDoClick={handleOnClick}/> */}
      {/* {showClock && <Clock/>}
      <BetterClock/>
      <button onClick={()=>setShowClock(!showClock)}>Hide Clock</button>
      <PostFiltersForm onFilters={hanldeFiltersChange}/>
      <PostList post={postList}/>
      <Pagination pagination={pagination} onPageChange={handlePageChange}/> */}
      <MagicBox/>
    </div>
  );
}


export default Home;
