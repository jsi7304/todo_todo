import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import PlannerCalender from "./PlannerCalender";
import categorySvg from '../../assets/img/categorySvg.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { __getCategory, __getTodayTodo } from '../../redux/modules/plannerSlice';
import dayjs from "dayjs";
import Planner from './Planner';

const PlannerCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectDate, setSelectDate] = useState(null);

  const [calenderdate, setCalenderdate] = useState(dayjs(Date.now()).format("YYYY-MM-DD"));
  const [categoryTodoList, setCategoryTodoList] = useState([]);
  const [categoryTodoComplete, setCategoryTodoComplete] = useState([]);

  const { category, todos, dateTodo, date } = useSelector((state) => state.planner);
  console.log('category', category, 'todos', todos, 'dateTodo', dateTodo, 'date', date)

  console.log(todos.length > 0 && todos[0].addDate === date);

  const onClickAddCategoryHandler = () => {
    navigate('/planner/category')
  }

  const onClickSelectCategoryToTodoListHandler = (e) => {
    const { innerText } = e.target.children[0];
    const { id } = e.target.parentElement;
    localStorage.setItem('category', innerText);
    localStorage.setItem('categoryId', id);
    navigate('/planner/category/todolist')
  }


  useEffect(() => {
    const arr = [];
    const arrRate = [];
    for (let i = 0; i < category.length; i++) {
      const data = todos.filter((data) => data.category === category[i].title);
      arr.push(data);
    }

    for (let i = 0; i < arr.length; i++) {
      const rate = ((arr[i].filter((data) => data.complete === true).length / arr[i].length) * 100).toFixed();
      arrRate.push(rate);
    }

    setCategoryTodoComplete(arrRate);
    setCategoryTodoList(arr);
  }, [category, todos])

  console.log('categoryTodoList', categoryTodoList);
  console.log('categoryTodoComplete', categoryTodoComplete);

  useEffect(() => {
    dispatch(__getCategory())
    dispatch(__getTodayTodo());
  }, [dispatch]);

  return (
    <>
      <StDiv>
        <div className='header'>
          <PlannerCalender calenderdate={calenderdate} selectDate={selectDate} setSelectDate={setSelectDate} />
          <div className='categoryBox'>
            <img className='category' src={categorySvg} alt="categoryIcon" onClick={onClickAddCategoryHandler} />
          </div>
        </div>

        <StCategoryContainer>
          {category.length > 0 && category.map((data, index) => (
            <StCategoryItem key={data.id} id={data.id} name={data.title}>
              <div className='top' onClick={onClickSelectCategoryToTodoListHandler} >
                <p className='title'>{data.title}</p>
                {categoryTodoList.length > 0 &&
                  <p onClick={(e) => e.stopPropagation()}>
                    {categoryTodoList[index].filter((data) => data.complete === true).length}/{categoryTodoList[index].length}
                  </p>}
              </div>
              <StProgressBarBox onClick={(e) => e.stopPropagation()}>
                <StProgressBar width={categoryTodoComplete[index] === 'NaN' ? 0 : categoryTodoComplete[index]} backgroundColor='#74E272'></StProgressBar>
              </StProgressBarBox>
            </StCategoryItem>
          ))}
        </StCategoryContainer>
      </StDiv>
      {/* <Planner x={x} setX={setX} /> */}
    </>
  )
}

const StDiv = styled.div`
  background-color: #fafafa;
  height: 100vh;
  font-family: "SUIT-Regular", sans-serif;

  & div.header {
    width:100%;
    height:100px;
    display: flex;
    background-color:#FFFFFF;
    justify-content:space-between;
    align-items:flex-end;
    padding: 1rem;
    border-bottom: 1px solid #F1F3F5;

    .categoryBox {
      padding:10px;
      display: flex;
      justify-content:center;
      align-items:center;

      img.category {
      width:24px;
      height:24px;
    }
    }
  }
`;

const StCategoryContainer = styled.div`
  padding: 20px;
`

const StCategoryItem = styled.div`
  width:100%;
  height:auto;
  border-radius: 16px;
  background-color:#fff;
  display: flex;
  flex-direction:column;
  box-sizing:border-box;
  margin-bottom:16px;
  padding: 15px 20px;
  -webkit-box-shadow: 0px 4px 8px -2px rgba(16,24,40,0.1); 
  box-shadow: 0px 4px 8px -2px rgba(16,24,40,0.1);

  & .top {
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding-bottom:5px;
    p {
      margin:0
    }
  }
`

const StProgressBarBox = styled.div`
  width:100%;
  height:13px;
  border-radius:10px;
  background-color:#ECECEC;
`

const StProgressBar = styled.div`
  transition: all 0.3s;
  width: ${props => props.width + '%' || '0%'};
  height:13px;
  border-radius:10px;
  background:${props => props.backgroundColor || '#D34C4C'};
`

export default PlannerCategory