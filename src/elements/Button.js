import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useDispatch } from "react-redux";
import axios from "axios";

const Button = () => {
  const dispatch = useDispatch();
  const [todoListContents, setTodoListContents] = React.useState("");
  const postTodo = (todoListContents) => {
    let formData = new FormData();
    formData.append("contents", todoListContents);
    axios({
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      url: "http://3.36.55.80:3000/api/todolist/:user",
      data: {
          contents : todoListContents,
      }
    })
      .then((res) => {
        window.alert(res.data.message);
        console.log(res.data.message);
      })
      .catch((error) => {
        console.log(error);
        window.alert("오류가 발생했습니다. 다시 시도해주세요.");
      });
  };
  console.log(todoListContents)
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 200,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(1, 3, 3),
    },
  }));

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">
        New Task
        <span>
          <p onClick={handleClose}>X</p>
        </span>
      </h2>
      <input
        placeholder="할일을 적어주세요"
        onChange={(e) => {
          setTodoListContents(e.target.value);
        }}
        value={todoListContents}
      ></input>
      <button onClick={postTodo}>Add</button>
    </div>
  );
  return (
    <>
      <Grid onClick={handleOpen}>+</Grid>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    </>
  );
};

export default Button;

const Grid = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  background-color: gray;
  text-align: center;
  font-size: 30px;
  display: relative;
  margin: 0 40px 0 auto;
  cursor: pointer;
`;
